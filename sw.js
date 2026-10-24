// Service Worker for Kripto-Kurs PWA (Cross-Platform Auto-Sync Engine)
const CACHE_NAME = "kripto-kurs-v13";
const ASSETS_TO_CACHE = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",
  "./references_data.js",
  "./lectures_bundle.js",
  "./glossary_compact.html",
  "./glossary_full.html",
  "./manifest.json",
  "./assets/icons/icon-192.png",
  "./assets/icons/icon-512.png",
  "./assets/icons/icon-maskable-192.png",
  "./assets/icons/icon-maskable-512.png",
  "./assets/icons/apple-touch-icon.png",
  "./assets/icons/favicon-32x32.png",
  "./assets/icons/favicon-16x16.png",
  "./assets/icons/icon.svg"
];

// Helper: Fetch with timeout for network-first strategy
function fetchWithTimeout(request, timeoutMs = 2500) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error("Network timeout")), timeoutMs);
    fetch(request)
      .then((response) => {
        clearTimeout(timer);
        resolve(response);
      })
      .catch((err) => {
        clearTimeout(timer);
        reject(err);
      });
  });
}

// 1. Install Event: Cache critical assets immediately and activate without waiting
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return Promise.allSettled(
        ASSETS_TO_CACHE.map((url) =>
          fetch(url, { cache: "reload" })
            .then((res) => {
              if (res.ok) return cache.put(url, res);
              throw new Error("HTTP " + res.status);
            })
            .catch((err) => console.warn("SW pre-cache notice for:", url, err))
        )
      );
    }).then(() => self.skipWaiting())
  );
});

// 2. Activate Event: Clear outdated caches and claim clients across all open tabs
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

// 3. Fetch Event:
// - Navigation / HTML: Network-first (2.5s timeout) with Cache fallback (ensures online users always see newest version)
// - Local Assets (JS, CSS, HTML, JSON, Icons): Stale-while-revalidate with background cache refresh
// - CDN Assets (Bootstrap, MathJax, fonts): Cache-first with background revalidation
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);
  const isNavigate = event.request.mode === "navigate" || (event.request.headers.get("accept") && event.request.headers.get("accept").includes("text/html"));

  // A. Navigation / Document requests: Network-First with fast cache fallback
  if (isNavigate) {
    event.respondWith(
      fetchWithTimeout(event.request, 2500)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const copy = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          }
          return networkResponse;
        })
        .catch(() => {
          // Offline or slow network: fallback to cached version
          return caches.match(event.request).then((cached) => {
            return cached || caches.match("./index.html");
          });
        })
    );
    return;
  }

  // B. Same-origin assets: Stale-While-Revalidate with active cache refresh
  if (url.origin === location.origin) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        const fetchPromise = fetch(event.request, { cache: "no-cache" })
          .then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              const copy = networkResponse.clone();
              caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
            }
            return networkResponse;
          })
          .catch(() => null);

        return cachedResponse || fetchPromise;
      })
    );
    return;
  }

  // C. CDN & Third-Party resources: Cache-First with background revalidation
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        fetch(event.request)
          .then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              caches.open(CACHE_NAME).then((cache) => cache.put(event.request, networkResponse.clone()));
            }
          })
          .catch(() => {/* ignore background CDN fetch errors */});
        return cachedResponse;
      }

      return fetch(event.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const copy = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        }
        return networkResponse;
      }).catch(() => {/* offline fallback */});
    })
  );
});

// 4. Message Event: Direct sync control from frontend
self.addEventListener("message", (event) => {
  if (!event.data) return;

  if (event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  } else if (event.data.type === "SYNC_NOW") {
    // Proactively re-fetch all critical assets from server and update cache
    caches.open(CACHE_NAME).then(async (cache) => {
      let updatedCount = 0;
      await Promise.allSettled(
        ASSETS_TO_CACHE.map(async (url) => {
          try {
            const res = await fetch(url, { cache: "reload" });
            if (res && res.ok) {
              await cache.put(url, res);
              updatedCount++;
            }
          } catch (e) {
            // Ignore offline network error
          }
        })
      );

      const clients = await self.clients.matchAll();
      clients.forEach((client) => {
        client.postMessage({
          type: "SYNC_COMPLETE",
          cacheName: CACHE_NAME,
          updatedCount: updatedCount,
          timestamp: Date.now()
        });
      });
    });
  }
});
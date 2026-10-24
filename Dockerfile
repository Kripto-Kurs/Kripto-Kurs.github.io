FROM nginx:alpine

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy web application static files
COPY Kripto_WebApp-HTML-SPA /usr/share/nginx/html

# Expose standard HTTP port
EXPOSE 80

# Healthcheck to ensure container is healthy
HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]

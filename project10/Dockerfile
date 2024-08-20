# Use the official Nginx image
FROM nginx:stable-alpine

# Build-time argument to bust the cache
ARG CACHE_BUST=1

# Copy custom Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Copy static assets (using cache busting mechanism)
COPY static/ /usr/share/nginx/html/static/?${CACHE_BUST}

# Expose the Nginx port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

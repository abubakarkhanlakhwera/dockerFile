# Use official Node.js runtime
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy application source code
COPY . .

# Expose the application's port
EXPOSE 3000

# Define a health check to monitor the container's health
HEALTHCHECK --interval=30s --timeout=10s --retries=3 CMD curl -f http://localhost:3000/ || exit 1

# Start the application
CMD ["npm", "start"]

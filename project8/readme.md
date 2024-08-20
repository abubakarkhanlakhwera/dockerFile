
---

### 2. **README for Docker with Healthcheck (Node.js)**

```markdown
# Docker with Healthcheck - Node.js Application

This Dockerfile includes a health check to monitor the health status of the container running a Node.js application. Health checks ensure that your application is running correctly and helps with automated recovery when it isn't.

## Dockerfile Overview

- Uses the `node:20-alpine` image.
- Installs dependencies using `npm ci`.
- Copies application source code.
- Adds a health check that pings the application every 30 seconds to ensure it’s running.

## Building the Docker Image

```bash
docker build -t healthcheck-node-app .

## to run container
docker run -p 3000:3000 healthcheck-node-app

## Health Check Command
HEALTHCHECK --interval=30s --timeout=10s --retries=3 CMD curl -f http://localhost:3000/ || exit 1

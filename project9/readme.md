
---

### 3. **README for Docker with Custom User and Permissions (Golang)**

```markdown
# Docker with Custom User and Permissions - Go Application

This Dockerfile creates a custom user and group to run a Go application securely, avoiding the use of the root user. Running containers as non-root users enhances security and follows best practices.

## Dockerfile Overview

1. **Build Stage:**
   - Uses the `golang:1.21-alpine` image.
   - Downloads dependencies and builds the Go application.

2. **Production Stage:**
   - Uses the lightweight `alpine` image.
   - Creates a custom user and group (`appuser` and `appgroup`).
   - Runs the application as the non-root user `appuser`.

## Building the Docker Image

```bash
docker build -t secure-go-app .
##Running the Container
docker run -p 8080:8080 secure-go-app

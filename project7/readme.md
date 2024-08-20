# Multi-Stage Build - Optimized Python Application

This Dockerfile demonstrates the use of multi-stage builds to create a lightweight and efficient container for a Python application. The build stage installs dependencies, and only the necessary files are copied to the final image, reducing the overall size.

## Dockerfile Overview

1. **Stage 1: Build Stage**
   - Uses the `python:3.11-slim` image to build the application.
   - Installs dependencies from `requirements.txt`.
   - Copies the application code.

2. **Stage 2: Production Stage**
   - Uses `python:3.11-alpine` for the final image.
   - Copies only the built application from the build stage, minimizing the image size.

## Building the Docker Image

```bash
docker build -t optimized-python-app .

## to run it
docker run -p 8000:8000 optimized-python-app

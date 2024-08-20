# Stage 1: Build stage
FROM python:3.11-slim as build

# Set work directory
WORKDIR /app

# Copy the requirements file and install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the application code to the container
COPY . .

# Stage 2: Production stage
FROM python:3.11-alpine

# Copy only the necessary files from the build stage
COPY --from=build /app /app

# Set working directory
WORKDIR /app

# Expose the application's port
EXPOSE 8000

# Command to run the application
CMD ["python", "app.py"]

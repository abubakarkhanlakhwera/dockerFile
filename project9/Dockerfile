# Use official Golang image as the builder
FROM golang:1.21-alpine as builder

# Set working directory
WORKDIR /build

# Copy go.mod and go.sum
COPY go.mod go.sum ./

# Download dependencies
RUN go mod download

# Copy application code
COPY . .

# Build the Go application
RUN go build -o app .

# Create a lightweight final image
FROM alpine:latest

# Create a user and group to avoid running as root
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Set working directory
WORKDIR /app

# Copy the built application from the builder stage
COPY --from=builder /build/app .

# Change ownership of the application files
RUN chown -R appuser:appgroup /app

# Switch to the new user
USER appuser

# Expose the application port
EXPOSE 8080

# Run the application
CMD ["./app"]

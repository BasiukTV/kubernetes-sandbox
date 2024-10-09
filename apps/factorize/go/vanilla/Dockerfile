# Stage 1: Build the Go application
FROM golang:1.23-alpine AS builder

WORKDIR /app

# Copy the application source code
COPY . .

# Build the Go application statically
RUN CGO_ENABLED=0 GOOS=linux go build -o factorize-app

# Stage 2: Create a minimal image using scratch
FROM scratch

WORKDIR /app

# Copy the compiled binary from the builder stage
COPY --from=builder /app/factorize-app /app/

EXPOSE 80

ENTRYPOINT ["/app/factorize-app"]

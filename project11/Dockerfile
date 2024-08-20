# Use the official OpenJDK image
FROM openjdk:20-alpine

# Set environment variables
ENV APP_HOME=/usr/src/app
ENV JAVA_OPTS="-Xms256m -Xmx512m"

# Create application directory
RUN mkdir -p $APP_HOME

# Set working directory
WORKDIR $APP_HOME

# Copy application JAR file
COPY target/myapp.jar .

# Copy the entrypoint script
COPY docker-entrypoint.sh /usr/local/bin/

# Make the script executable
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

# Expose the application port
EXPOSE 8080

# Use the entrypoint script to run the application
ENTRYPOINT ["docker-entrypoint.sh"]

# Default command to run the application
CMD ["java", "$JAVA_OPTS", "-jar", "myapp.jar"]

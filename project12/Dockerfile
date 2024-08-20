# Use the official Ruby image
FROM ruby:3.2-alpine

# Install system dependencies for building the application
RUN apk add --no-cache build-base postgresql-dev nodejs yarn

# Set working directory
WORKDIR /app

# Copy Gemfile and Gemfile.lock for dependency resolution
COPY Gemfile Gemfile.lock ./

# Install Ruby dependencies
RUN bundle install --without development test

# Copy the Rails application code
COPY . .

# Precompile assets to avoid doing so at runtime
RUN bundle exec rake assets:precompile

# Expose the web application port
EXPOSE 3000

# Set environment variables
ENV RAILS_ENV=production

# Start the Rails application
CMD ["bundle", "exec", "puma", "-C", "config/puma.rb"]

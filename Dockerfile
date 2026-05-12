FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies with legacy peer deps flag
RUN npm install --legacy-peer-deps --verbose

# Copy source code
COPY . .

# Build the app
RUN npm run build || (echo "Build failed" && exit 1)

# Verify dist folder exists
RUN test -d dist || (echo "dist folder not created" && exit 1)

# Expose port
EXPOSE 3000

# Start the server
CMD ["npm", "start"]

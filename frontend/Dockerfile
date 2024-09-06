# Set base image for Next.js
FROM node:18-alpine

# Set working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY assignment_frontend/package*.json /app/

# Install dependencies
RUN npm install

# Copy the rest of the Next.js project files
COPY  assignment_frontend/ /app/



# Expose port 3000 for Next.js app
EXPOSE 3000

# Start the Next.js development server
CMD ["npm", "run", "dev"]

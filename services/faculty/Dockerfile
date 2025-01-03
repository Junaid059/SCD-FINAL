# Use a Node.js base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json file into the container
COPY package.json /app/

# Install dependencies
RUN npm install

# Copy the entire project into the container, including the src folder
COPY . /app/

# Expose the port the app will run on
EXPOSE 3000

# Start the app
CMD ["node", "src/app.js"]

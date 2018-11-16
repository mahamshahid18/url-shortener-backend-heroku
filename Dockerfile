FROM node:8-alpine

# Create app directory
WORKDIR /usr/shorty/backend/src

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Expose port required by app
EXPOSE 3000

# Run command npm start
CMD [ "npm", "start" ]

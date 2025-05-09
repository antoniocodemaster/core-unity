# Fist step: Building
FROM node:20-alpine As builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Second step: Serve with NGINX
FROM nginx:stable-alpine

# Copy build to directory of NGINX
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose default port
EXPOSE 80
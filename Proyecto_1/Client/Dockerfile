### STAGE 1: Build ###
FROM node:lts-alpine AS builder

WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

### STAGE 2###
FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /usr/src/app/dist/client /usr/share/nginx/html

EXPOSE 80
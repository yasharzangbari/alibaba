
FROM node:20.18.0-alpine AS base

RUN apk add --no-cache libc6-compat

WORKDIR /app


COPY package.json yarn.lock ./


RUN yarn install --frozen-lockfile


COPY . .


EXPOSE 3000 3001


RUN yarn run build



CMD ["yarn", "run", "server:prod:docker"]

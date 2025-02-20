FROM node:20.18.0-alpine AS base

RUN apk add --no-cache libc6-compat

WORKDIR /app
COPY --chown=node:node . /app
COPY package.json /app

RUN yarn install

EXPOSE 3000 3001
RUN yarn run build
CMD ["yarn", "run", "server:prod:docker"]


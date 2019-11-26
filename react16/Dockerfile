FROM node:erbium-alpine as build
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
EXPOSE 3000
COPY ["package.json", "package-lock.json", "./"]
RUN npm install
COPY . .
CMD npm run start

FROM node:erbium-alpine as dist
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY --from=build /usr/src/app .
RUN npm run build

FROM nginx:alpine as deploy
COPY --from=dist /usr/src/app/build /usr/share/nginx/html


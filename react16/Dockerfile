FROM node:erbium-alpine as build
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
EXPOSE 3000
COPY ["package.json", "package-lock.json", "./"]
RUN npm install
COPY . .
CMD npm run start

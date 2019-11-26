FROM node:erbium-alpine as build
RUN npm install @angular/cli@8.3.19
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ENV PATH "$PATH:/usr/src/app/node_modules/.bin"
COPY ["package.json", "package-lock.json", "./"]
RUN npm install i
EXPOSE 4200
COPY . .
CMD ng serve --host 0.0.0.0

FROM node:erbium-alpine as dist
RUN mkdir -p /usr/src/app
COPY --from=build /usr/src/app /usr/src/app
ENV PATH "$PATH:/usr/src/app/node_modules/.bin"
WORKDIR /usr/src/app
RUN npm run build

FROM nginx:alpine as deploy
COPY --from=dist /usr/src/app/dist/angular8/ /usr/share/nginx/html

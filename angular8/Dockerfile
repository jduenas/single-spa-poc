FROM node:erbium as build
RUN npm install @angular/cli@8.3.19
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
COPY package.json package.json
RUN npm install 
ENV PATH $PATH:/usr/src/app/node_modules/.bin/
EXPOSE 4200
COPY . .
CMD ng serve --host 0.0.0.0


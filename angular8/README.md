# Angular8

# Building the image for dev
docker build --target build -t jduenas/angular8:dev

# Building the image for deployment
docker build -t jduenas/angular8 .

# Running PROD build
docker container run --rm --name angular8-web --publish 80:80 jduenas/angular8:latest

# Running Dev Stage Build
docker container run --name ng-dev -it --publish 4200:4200 -v $(PWD):/usr/src/app -v /usr/src/app/node_modules --rm jduenas/angular8:dev
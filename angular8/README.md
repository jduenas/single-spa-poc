# Angular8

# Building the image
docker build --target build -t jduenas/angular8:dev

# Running Dev Stage Build
docker container run --name ng-dev -it --publish 4200:4200 -v $(PWD):/usr/src/app -v /usr/src/app/node_modules --rm jduenas/angular8:dev
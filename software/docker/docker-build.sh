#!/bin/bash
DOCKERUSER=gboeing
PACKAGE=osmnx
IMAGE=ppd599

TAG="$DOCKERUSER/$IMAGE:latest"
ALLTAGS="$TAG"
TAGARGS="-t $ALLTAGS"

# confirm then proceed
echo "Image will be tagged \"$ALLTAGS\""
read -r -n 1 -p "Ready to proceed? (y/n) " INPUT
echo ""
if [[ $INPUT != "Y" && $INPUT != "y" ]]; then
    exit 1
fi

# remove any existing containers or images
docker stop $(docker ps -aq)
docker rm $(docker ps -aq)
docker rmi $(docker images -q) --force

# login then multi-platform buildx the image and push it to the hub
set -e
docker login
docker buildx build --push --platform=linux/amd64,linux/arm64 $TAGARGS .

# import package and print its version as a test, then export conda env to yml
echo "Pushed $ALLTAGS to Docker Hub"
echo "Testing image..."
IMPORTED_VERSION=$(docker run --rm $TAG /bin/bash -c "python -c \"import $PACKAGE; print($PACKAGE.__version__)\"")
echo "Imported $PACKAGE version $IMPORTED_VERSION."
docker run --rm -v "$PWD":/home/jovyan/work $TAG /bin/bash -c "conda env export -n base > /home/jovyan/work/environment.yml"
echo "Exported conda env to environment.yml"

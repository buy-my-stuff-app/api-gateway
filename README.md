# Buy My Stuff App - Api Gateway

## Use with Docker

### Development

1. Build development image: `docker build -t raulcontrerasrubio/buymystuffapp-dev-api-gateway -f ./Dockerfile.dev .`
2. Run development image: `docker run -it -p 5000:5000 -v $(pwd):/home/bmsa/api-gateway raulcontrerasrubio/buymystuffapp-dev-api-gateway`
3. Make the requests to: `http://localhost:5000`

### Production

# Buy My Stuff App - Api Gateway

## Use with Docker

### Development

1. Build development image: `docker build -t bmsa/buymystuffapp-dev-api-gateway -f ./Dockerfile.dev .`
2. Run development image: `docker run -p 5000:5000 -v $(pwd):/home/bmsa/api-gateway bmsa/buymystuffapp-dev-api-gateway`
3. Make the requests to: `http://localhost:5000`

### Production

1. Build production image: `docker build -t bmsa/buymystuffapp-prod-api-gateway .`
2. Run production image: `docker run -p 5000:5000 bmsa/buymystuffapp-prod-api-gateway`
3. Make the requests to: `http://localhost:5000`

## Use with docker-compose

- Run `docker-compose up --build`

FROM node:12.16-alpine3.11

WORKDIR /home/bmsa/api-gateway

COPY ./package*.json ./

RUN npm install

COPY ./ ./

CMD ["npm", "start"]
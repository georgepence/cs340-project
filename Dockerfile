FROM node

WORKDIR /app/client
COPY ./client/package*.json ./

WORKDIR /app
COPY package*.json ./
RUN npm install

WORKDIR /app
COPY . .

WORKDIR /app
RUN npm run build --prefix client

WORKDIR /app/client
RUN rm -r src

WORKDIR /app

ENV NODE_ENV=production

CMD [ "node", "server.js" ]


FROM node:18.17.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ENV BUILD_TYPE=export

RUN npm run build

EXPOSE 3000

CMD ["npx", "serve@latest", "out"]
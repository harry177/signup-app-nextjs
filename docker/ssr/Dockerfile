
FROM node:18.17.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ENV BUILD_TYPE=standalone

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
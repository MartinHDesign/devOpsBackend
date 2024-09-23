FROM node:20

WORKDIR /docker/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

ENV port=3000

EXPOSE ${port}

CMD [ "npm", "run", "startProd" ]


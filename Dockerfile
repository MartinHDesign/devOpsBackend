FROM node:20 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx tsc

FROM node:20-slim

WORKDIR /app

COPY --from=builder /app/dist ./dist/src
COPY --from=builder /app/package*.json ./

RUN npm install --only=production

ENV port=3000

EXPOSE ${port}

CMD [ "npm", "run", "startProd" ]
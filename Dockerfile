FROM node:10-alpine

WORKDIR /usr/share/app

COPY package*.json ./

RUN npm ci --only=production

RUN npm install -g pm2

COPY index.js ./

EXPOSE 3000

CMD ["pm2-runtime", "start", "index.js"]

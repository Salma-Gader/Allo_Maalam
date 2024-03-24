FROM node:18.17.1

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY app.js ./   # Spécifiez le chemin de destination du fichier app.js

EXPOSE 3000

CMD ["npm","run","start"]  # Assurez-vous que le point d'entrée de votre application est app.js

FROM node:7
WORKDIR /app
COPY . /app
RUN npm install
CMD ["node", "--exec babel-node ./server.js"]
EXPOSE 3000
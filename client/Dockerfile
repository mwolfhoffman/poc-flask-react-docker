FROM node:16-alpine

WORKDIR /client

ENV PATH /client/node_modules/.bin:$PATH
ENV PORT=3030

COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm install --silent
COPY ./ ./

CMD ["npm", "start"]
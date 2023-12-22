FROM node:lts as graph-ql
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn build
EXPOSE 4000
CMD ["node",  "--experimental-specifier-resolution=node", "dist/index.js"]
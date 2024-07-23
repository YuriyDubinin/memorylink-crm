FROM node

WORKDIR '/src'

COPY package.json '/src'

RUN npm install

COPY . .

ENV PORT 3001

EXPOSE $PORT

CMD ["npm", "run", "watch"]
FROM node:argon

RUN mkdir -p /src
COPY . /src

WORKDIR /src
RUN npm install

# Todo: read this from some same config file.
EXPOSE 3000
CMD [ "npm", "start" ]

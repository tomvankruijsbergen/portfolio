FROM node:argon

RUN mkdir -p /src
COPY . /src

WORKDIR /src

# https://github.com/nodejs/docker-node/issues/57
ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install

# Todo: read this from some same config file.
EXPOSE 3000
CMD [ "npm", "start" ]

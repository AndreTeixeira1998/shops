FROM node:18

# Create app directory
WORKDIR /usr/src/app

COPY . .
RUN npm install
RUN npm run build

# PhantomJS fix https://github.com/bazelbuild/rules_closure/issues/351
ENV OPENSSL_CONF=/dev/null

# Run the web service on container startup.
CMD [ "npm", "start" ]

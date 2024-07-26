FROM node:latest as node


WORKDIR /usr/local/app

COPY ./ /usr/local/app

RUN npm install
RUN npm run build


# FROM nginx:latest
# COPY --from=node /usr/local/app/dist/spec-ecom .

EXPOSE 4200

CMD /usr/local/app/node_modules/.bin/ng serve --host 0.0.0.0

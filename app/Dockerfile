FROM node:18-alpine

WORKDIR /usr/src/app

COPY .yarn/cache/ /usr/src/app/.yarn/cache/
COPY .yarn/plugins/ /usr/src/app/.yarn/plugins/
COPY .yarn/releases/ /usr/src/app/.yarn/releases/
COPY package.json yarn.lock .yarnrc.yml tsconfig.json /usr/src/app/

COPY packages /usr/src/app/packages
COPY app/ /usr/src/app/app/

RUN yarn install --immutable
RUN yarn app:build

ENV NODE_ENV production

EXPOSE 3000

CMD ["yarn", "workspace", "@visitor-board/app", "start"]

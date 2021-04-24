FROM node:15.14.0

WORKDIR ./app

COPY ./package.json ./package-lock.json ./

RUN npm install

COPY ./.browserslistrc ./.eslintrc.json ./tsconfig.json ./

COPY ./public ./public

COPY ./src ./src

RUN npm run lint

RUN npm run test:ci

COPY ./.storybook ./.storybook

RUN npm run storybook:build

RUN npm run test:visual:ci

RUN npm build

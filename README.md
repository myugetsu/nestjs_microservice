# NestJS Project

This is a NestJS project using RabbitMQ and MongoDB with a microservice approach. The project consists of two services: the Admin service and the Main service.

## Description

This project is built using the [NestJS](https://github.com/nestjs/nest) framework. It leverages RabbitMQ for messaging and MongoDB for data storage. The project is divided into two services:

- **Admin Service**: Manages the administrative functionalities.
- **Main Service**: Handles the main application logic.

## Project Structure
.
├── README.md
├── admin
│   ├── README.md
│   ├── docker-compose.yml
│   ├── nest-cli.json
│   ├── package-lock.json
│   ├── package.json
│   ├── src
│   │   ├── app.controller.spec.ts
│   │   ├── app.controller.ts
│   │   ├── app.module.ts
│   │   ├── app.service.ts
│   │   ├── main.ts
│   │   └── product
│   │       ├── product.controller.spec.ts
│   │       ├── product.controller.ts
│   │       ├── product.entitiy.ts
│   │       ├── product.module.ts
│   │       ├── product.service.spec.ts
│   │       └── product.service.ts
│   ├── test
│   │   ├── app.e2e-spec.ts
│   │   └── jest-e2e.json
│   ├── tsconfig.build.json
│   └── tsconfig.json
├── frontend_structure.txt
└── main
    ├── README.md
    ├── docker-compose.yml
    ├── listener.json
    ├── nest-cli.json
    ├── package-lock.json
    ├── package.json
    ├── src
    │   ├── app.controller.spec.ts
    │   ├── app.controller.ts
    │   ├── app.module.ts
    │   ├── app.service.ts
    │   ├── listener.ts
    │   ├── main.ts
    │   └── product
    │       ├── product.controller.spec.ts
    │       ├── product.controller.ts
    │       ├── product.model.ts
    │       ├── product.module.ts
    │       ├── product.service.spec.ts
    │       └── product.service.ts
    ├── test
    │   ├── app.e2e-spec.ts
    │   └── jest-e2e.json
    ├── tsconfig.build.json
    └── tsconfig.json


## Project Setup

### Admin Service

Navigate to the `admin` directory and run the following commands:

```bash
# Install dependencies
$ npm install

# Compile and run the project
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

# Run tests
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov

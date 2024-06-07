## How to test this api

Please follow the instructions bellow step by step.

## Dependencies

- Nodejs 16+
- Docker

## Installation

```bash
$ npm install
```

## Running docker

```bash
$ docker-compose up
```

## Running prisma seed

```bash
$ npx prisma db seed
```

## Running the app

```bash
# watch mode
$ npm run start:dev
```

- Go to your [Localhost](http://localhost:3000/api#/) to see Swagger docs

## Auth

Please use the login route with the following email/password

```
email: test@test.com
password: pass1234
```

Then copy the accessToken and use it on the padlock icon besides each route to authenticate.

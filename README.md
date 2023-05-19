# CRUD exercise

This repository documents a CRUD exercise performed as part of a training to learn about some back-end development technologies. A sketch of this exercise can be found in this [google document](https://docs.google.com/document/d/1xlf0R6t4ztzXAgbHhvJ722IOKSP-B0OPgYcOr0Ig5l0/edit?usp=sharing).

## Dependencies

. Node

. Fastify

. Fastify/postgres

. Fastify/jwt

. Fastify/plugin

. Fastify/autoload

. Fastify/cli

. pg

. Dotenv

. Knex

For more information, please, see the _package.json_ file.

Run _npm install_ to install the dependencies within this project.

## Useful commands

### Docker related commands

. To run the docker compose file and start its services and volumes:

```console
~$ docker-compose -f docker-compose.yml up
```

. To down the services and volumes in the docker compose file:

```console
~$ docker-compose -f docker-compose.yml down
```

. To remove all docker volumes:

```console
~$ docker volume rm $(docker volume ls -qf dangling=true)
```

. To acces a bash terminal to execute commands over the database configured for this exercise:

```console
~$ docker exec -it crud_exercise-db-1 /bin/bash
```

### Database related commands

. To acces the database terminal of the db configured for this exercise:

```console
~$ psql order postgres
```

. To remove all the databases created:

```console
~$ drop schema public cascade;
```

. To create the public schema:

```console
~$ create schema public;
```

**OBS**: The last two commands in this section are not recommended and were used just to quickly correct some newbie errors.

### Knex related commands

. To create a migration based on a knexfile:

```console
~$ knex --env <env_name> --knexfile knexfile.js migrate:make <migration_name>
```

Below, the command executed to create a migration for the creation of the user table in the database:

```console
~$ knex --env dockerLocal --knexfile knexfile.js migrate:make create_user_table
```

. To execute all migrations (migrations already executed will not be executed twice):

```console
~$ knex --env <env_name> --knexfile knexfile.js migrate:latest
```

### Nodemon installation

Install nodemon globally:

```console
~$ npm install nodemon -g
```

## References

### Docker compose (postgres case)

1. [Geshan](https://geshan.com.np/blog/2021/12/docker-postgres/)
2. [Hub Docker](https://hub.docker.com/_/postgres/)

**OBS**: use postgres full image (alpine version does not create database on docker compose up).

### Fastify

1. [Fastify official documentation](https://www.fastify.io/docs/latest/)

2. [Fastify REST API](https://progressivecoder.com/creating-a-fastify-rest-api/)

### Knex

1. [Knex official guide](https://knexjs.org/guide/)

2. [Migration CLI](https://knexjs.org/guide/migrations.html#migration-cli)

### Postgres

1. [Postgres official reference](https://www.postgresql.org/docs/)

2. [Fastify + Postgres](https://edisondevadoss.medium.com/node-fastify-with-postgresql-3e0e78692185)

### To install nvm and node

1. [NVM github](https://github.com/nvm-sh/nvm)

### To test Fastify connection with the database using curl

1. [Stack Overflow answer](https://stackoverflow.com/a/16870452)

### Auth (jwt token)

1. [Jwt authentication with Fastfy (simplified)](https://progressivecoder.com/fastify-jwt-authentication/)

2. [JWT official](https://jwt.io/)

# node_auth

## Table of Contents

- [About](#about)
<!-- - [Getting Started](#getting_started)
- [Usage](#usage)
- [Contributing](../CONTRIBUTING.md) -->

## About <a name = "about"></a>

Auth api with Node js, Typescript, Fastify and PostgreSQL.

### Set up postgres with docker

Get our Postgres container

```shell
docker run --name postgresql-container -p 5432:5432 -e POSTGRES_PASSWORD=<password> -d postgres
```

Run this command to run bash in our postgres container

```shell
docker exec -it b560c37eb491 bash
```

Then login

```shell
  psql -h localhost p- 5432 -U postgres -W
```

Create new database

```shell
  CREATE DATABASE <NAME>;
```

Check if it exists

```shell
\l
```

Exit from postgres

```shell
  \q
```

Exit from bash

```shell
  exit
```

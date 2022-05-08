# node_auth

## Table of Contents

- [About](#about)
- [Encryption](#encryption)
- [HTTP](#HTTP)
- [Access Token](#access-token)

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

### Encryption <a name = "encryption"></a>

Encryption,
Allows you to use a key to obfuscate and retrieve data

password

password X key

qbttxpse

qbttxpse / key

password

Hashing
A one way trip. Not meant to be reversed

password
password x hash function
hashed data

md4, md5, sha
Sha - security hashing algorithm
sha-256

Salt

adds additional data (salt)

passwordsalt
passwordsalt x hash function
creates a unique hash

---

### HTTPOnly Cookies <a name = "HTTP"></a>

Local Storage and normal cookies are both

- Stored in the browser
- Accessible by the client
- Able to be read / wrote by the browser
- Able to be accessed by any browser extension on your browser

HTTPOnly Cookies

- Only accessible via the server
- Only writeable via the server

---

### Access Token <a name = "access-token"></a>

- JWT
- Contains all of the info someone needs to be logged
- Says this user has access
- Only available current session

Refresh Token

- JWT
- Only contains session id
- Be used to generate new access token
- Used to refresh the access token

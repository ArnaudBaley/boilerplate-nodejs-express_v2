# url-shortener

## About

This application allow users to map URLs with a tiny string.  
A front-end can use it for redirections.  
See API doc for details.

## API doc

-http://localhost:3000/api-docs


## Setup (Ubuntu 20.04)

### prerequisite

- [NodeJS 18](https://nodejs.org/en/)
- [Docker](https://docs.docker.com/engine/install/ubuntu/)

### Install dependencies

back end :
```shell
npm i
```

database : 
```shell
cd deploy
./init_project.sh
```

Initialise DB with SQL commands :
```sql
CREATE TABLE public."mapping" (
	original_url text NOT NULL,
	short_url text NOT NULL,
	nb_clicks int4 NULL DEFAULT 0,
	id serial4 NOT NULL,
	CONSTRAINT mapping_pk PRIMARY KEY (id)
);
```


## Run & Debug

**Run :**
```shell
npm run start
```

**Debug :**
```shell
npm run dev
```


## Tests

**Unit tests :**
```shell
npm run test
```

**Unit tests with watcher and hot reload (TDD):**
```shell
npm run test:watch
```

## TODO

-Request validator  
-Linter  
-Improve openAPI doc  
-Add back-end to docker  
-Add integration tests  
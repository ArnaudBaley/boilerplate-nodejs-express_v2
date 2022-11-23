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
	id int4 NOT NULL,
	original_url text NOT NULL,
	short_url text NOT NULL,
	nb_clicks int4 NULL DEFAULT 0,
	CONSTRAINT mapping_pk PRIMARY KEY (id)
);
```

```sql
CREATE SEQUENCE tablename_colname_seq AS integer START 1 OWNED BY mapping.id;
```

```sql
ALTER TABLE mapping ALTER COLUMN id SET DEFAULT nextval('tablename_colname_seq');
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

-Linter
-Improve openAPI doc  
-Add back-end to docker
-Add integration tests
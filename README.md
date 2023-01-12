
# Sharebit

Menu Builder Application.

## Tech Stack


**Server:** Node, Express, MYSQL

### Pre-requisites:
node-js: 18.13.0 (lts version)
mysql




## Run Locally

#### Clone the project

```bash
  git clone git@github.com:MuhammadMurtza/sharebitetest.git
```

#### Go to the project directory

```bash
  cd sharebitetest
```

#### Install dependencies

```bash
  npm install
```

#### Migrate databse

Create a database with name: "sharebite"
and then run
```bash
  npm run  migrate:up
```

Start the server

```bash
  npm start
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`DB_HOST`

`DB_USER`

`DB_PASSWORD`

`DB_NAME`



## API Reference

#### Sections

```http
   /api/v1/sections
```

#### Items

```http
   /api/v1/items
```

#### Modifiers

```http
   /api/v1/modifiers
```

#### Map Items and modifiers

```http
   /api/v1/items-modifiers
```

#### Get Entire Menu

```http
  /api/v1/menu
```




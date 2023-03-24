# Movies

## Getting started

### Starting the server

First, you will need a working [mysql](https://www.mysql.com/) running server, so, if you are using [docker compose](https://docs.docker.com/compose/), you can get it by running this command:

`cd server`
`docker-compose up -d`

and after:

`npm install`

and create a .env file in root folder, copy the content of [.env.example](.env.example) from him and replace all required variables based on your system 

`docker inspect moviesdb | grep IPAddress`

copy the ip adress to the localhost alias in .env file and then:

`npx prisma generate`

and then: 
`npm run start`

and it's done! The server is now running

### Starting the web application

You need execute all server commands and leave an instance of it running

After this your can execute

`cd web`

after

`npm install`

and after

`npm run start`
// import json-server in index.js

const jsonServer = require('json-server')

//create a server for json file

const mediaplayerserver = jsonServer.create()

//set up a path for j-son file

const router = jsonServer.router('db.json')

//return a miidleware used by json server

const middlewares = jsonServer.defaults()

//set up port for running json server

const port = 4000 || process.env.port

// use middleware and router

mediaplayerserver.use(middlewares)
mediaplayerserver.use(router)

//to listen server for resolving request from server

mediaplayerserver.listen(port,()=>{
    console.log(`mediaplayer listening at port ${port},and waiting for the client request !!!`);
})  
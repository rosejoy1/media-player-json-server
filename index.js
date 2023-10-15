// import json-server

const jsonServer = require('json-server')

// creare json server using json-server library
const mediaPlayerServer = jsonServer.create()

//set up path/route for db.json file
const router = jsonServer.router("db.json")

// Return middlewares used by JSON Server
const middleware = jsonServer.defaults()

//set up port for server
const port = 4000 || process.env.PORT

// use middleware and router in server 
mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)

// Server listen for request from frontend
mediaPlayerServer.listen(port,()=>{
    console.log(`Media player server started at port ${port} and waiting from request!!!`)
})
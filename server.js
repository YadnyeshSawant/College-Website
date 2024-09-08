//import
let express = require('express');
const router = require('./routes');

//server
let server = express();
let PORT = 3000;
// let router = express.Router();

server.set("views","./views");
server.set("view engine","ejs");

server.use(express.static("public"));

// add routes to the app
server.use(router);

//port number
server.listen(PORT,()=>{
    console.log(`Sever is running on port ${PORT}`);
});
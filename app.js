//Require modules
let express = require('express');
let http = require('http');
let ejs = require('ejs');

//app
let app = express();

//View engine
app.set('view engine', 'ejs');

//assign port number
let port = 2100 | process.env.port;

//Using images
app.use("/i", express.static(__dirname + "/Public/Image"));

//Routers
app.use("/", require("./routes/mainroutes.js"));

//Start server
http.createServer(app).listen(port, () => {
    console.log("Port number = " + port);
})
// require("dotenv").config()
const express = require("express");
const http = require("http")
const socket = require("socket.io");
const port = 3001
const app = express();

const bodyParser = require("body-parser")
//get the body parser

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
// allows to process data from the url and json


const cors = require("cors")
app.use(cors())

// const server = http.createServer(app);
// const io = socket(server, {cors: {origin: '*'}});
// io.on("connection", (socket)=>{
//     console.log("socket has connected")
// });


//socket setup
const ContactForm = require("./ContactForm")

ContactForm(app)



app.listen(process.env.PORT || port, ()=> console.log(`listening to port ${port}`));



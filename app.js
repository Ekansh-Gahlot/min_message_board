const express = require('express');
const path = require('path');
const indexRouter = require('./Routes/indexRouter.js')
const messageRouter = require('./Routes/newMessageRouter.js')
const app = express();
const assetsPath = path.join(__dirname, "public");
const http = require('http');

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

const PORT = 3000;

app.use('/new',messageRouter)
app.use('/',indexRouter);


app.listen(PORT,()=>{
    console.log(`App running on port ${PORT}`)
})

http.createServer(function(req,res){
    req.send('Hello World')
}).listen(8080)
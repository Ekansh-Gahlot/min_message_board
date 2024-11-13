const express = require('express');
const messages = require('../db');
const messageRouter = express.Router();
console.log('hello');
messageRouter.get('/', (req,res)=>{
    res.render('form');
})

messageRouter.post('/',(req,res)=>{
    console.log(req.body.name)
    messages.push({ text: req.body.message, user: req.body.name, added: new Date() });
    // console.log('Hi');
    res.redirect("/")
})


module.exports = messageRouter;
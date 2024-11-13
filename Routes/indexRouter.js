const express = require('express');

const messages = require('../db');
const indexRouter = express.Router();

indexRouter.use('/',(req,res)=>{res.render('index',{title:'Mini MessageBoard', messages})})

module.exports = indexRouter;
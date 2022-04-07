"use strict"
const express = require('express');
const router = require('./router');
const config = require('./config');

const app = express();
router.setRequestUrl(app);

app.listen(config.setting.port, function (){
    console.log('start server');
})
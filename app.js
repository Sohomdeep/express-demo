const http = require('http');
const express = require('express');
const sequelize = require('./util/database');

const app = express();

const server = http.createServer();

sequelize
   //.sync({ force: true })
   .sync()
  .then(result => {
        console.log(result);
        app.listen(3000);
  })
  .catch(err => {
        console.log('DB Connection error');
        console.log(err);
  });
/**
 * Created by Tyler on 1/30/2018.
 */
//Importing modules
//const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('mongoose');


const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;//what port we choose to use

//CORS middleware
app.use(cors());

//body parser middleware
app.use(bodyParser.json());

const user = require('./routes/users');

//Manages users
app.use('/users',users);

//path from front to backend
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World sssss\n');
});

//listens on what port we choose
//function() is the same as () =>
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
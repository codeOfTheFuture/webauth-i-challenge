const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const registerRouter = require('./users/register-users-router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/register', registerRouter);
// server.use('/api/login');

server.get('/', (req, res) => {
  res.send('Webauth-i-challenge');
});

module.exports = server;

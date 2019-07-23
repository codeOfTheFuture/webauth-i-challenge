const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('./auth/auth-router');
const usersRouter = require('./users/users-router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/restricted/users', usersRouter);

server.get('/', (req, res) => {
  res.send('Webauth-i-challenge');
});

module.exports = server;

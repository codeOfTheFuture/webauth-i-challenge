const express = require('express');

const authRouter = require('./auth/auth-router');
const usersRouter = require('./users/users-router');
const globalMiddleware = require('./config/global-middleware');

const server = express();

globalMiddleware(server);

server.use('/api/auth', authRouter);
server.use('/api/restricted/users', usersRouter);

server.get('/', (req, res) => {
  res.send('Webauth-i-challenge');
});

module.exports = server;

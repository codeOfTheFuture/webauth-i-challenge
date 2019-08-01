const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');

module.exports = server => {
  const sessionConfig = {
    name: 'mordor',
    secret: 'keep it secret, keep it safe',
    cookie: {
      maxAge: 1000 * 60 * 10,
      secure: false,
      httpOnly: true,
    },
    resave: false,
    saveUninitialized: true,
  };

  server.use(helmet());
  server.use(express.json());
  server.use(cors());
  server.use(session(sessionConfig));
};

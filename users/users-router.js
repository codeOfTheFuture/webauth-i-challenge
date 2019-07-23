const express = require('express');
const bcrypt = require('bcryptjs');

const Users = require('./users-model');

const restricted = require('./restricted-middleware');

const router = express.Router();

router.get('/', restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router;

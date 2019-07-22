const express = require('express');
const bcrypt = require('bcryptjs');

const Users = require('./users-model');

const router = express.Router();

router.post('/', (req, res) => {
  const user = req.body;

  const hash = bcrypt.hashSync(user.password, 14);

  user.password = hash;
  Users.add(user).then(newUser => {
    res.status(201).json(newUser);
  });
});

module.exports = router;

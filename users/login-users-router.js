const express = require('express');
const bcrypt = require('bcryptjs');

const Users = require('./users-model');

const router = express.Router();

router.post('/', (req, res) => {
  const { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        res.status(200).json({ message: `Welcome ${user.username}` });
      } else {
        res.status(401).json({ message: 'You Shall Not Pass!!!' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;

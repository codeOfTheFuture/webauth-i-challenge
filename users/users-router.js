const express = require('express');
const bcrypt = require('bcryptjs');

const Users = require('./users-model');

const router = express.Router();

router.get('/', (req, res) => {
  const { username, password } = req.headers;

  Users.findBy({ username })
    .first()
    .then(user => {
      console.log('user: ', user);
      if (user && bcrypt.compareSync(password, user.password)) {
        Users.find()
          .then(users => {
            res.json(users);
          })
          .catch(err => res.send(err));
      } else {
        res.status(401).json({ message: 'You Shall Not Pass!!!' });
      }
    });
});

module.exports = router;

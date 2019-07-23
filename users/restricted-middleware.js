const Users = require('./users-model');
const bcrypt = require('bcryptjs');

module.exports = restricted;

function restricted(req, res, next) {
  const { username, password } = req.headers;

  Users.findBy({ username })
    .first()
    .then(user => {
      console.log('user: ', user);
      if (user && bcrypt.compareSync(password, user.password)) {
        next();
      } else {
        res.status(401).json({ message: 'You Shall Not Pass!!!' });
      }
    });
}

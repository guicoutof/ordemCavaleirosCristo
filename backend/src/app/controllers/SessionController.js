const jwt = require('jsonwebtoken');

const User = require('../models/User');

const auth = require('../../config/auth');

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) return res.status(401).json({ error: 'User not found!' });

    if (!(await user.checkPassword(password)))
      return res.status(401).json({ error: "Password doesn't match!" });

    const { id, name } = user;

    return res.json({
      user,
      token: jwt.sign({ id, name }, auth.secret_user, {
        expiresIn: auth.expires,
      }),
    });
  }
}

module.exports = new SessionController();

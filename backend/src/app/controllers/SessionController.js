import jwt from 'jsonwebtoken';

import User from '../models/User';

import auth from '../../config/auth';

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

export default new SessionController();

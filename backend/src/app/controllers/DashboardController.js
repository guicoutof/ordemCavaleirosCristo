const Yup = require('yup');
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');
const auth = require('../../config/auth');

class DashboardController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .required()
        .min(6),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json('Invalid data!');

    const { email, password } = req.body;

    const admin = await Admin.findOne({ where: { email } });

    if (!admin)
      return res.status(400).json({ error: 'This admin does not exist!' });

    const validPassword = await admin.checkPassword(password);

    if (!validPassword)
      return res.status(401).json({ error: 'Invalid email and password!' });

    const { id } = admin;

    return res.json({
      id,
      email,
      token: jwt.sign({ id }, auth.secret_admin, { expiresIn: auth.expires }),
    });
  }
}

module.exports = new DashboardController();

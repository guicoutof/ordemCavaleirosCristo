const Yup = require('yup');
const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const ForgotPassword = require('../jobs/ForgotPasswordMail');
const User = require('../models/User');
const auth = require('../../config/auth');

class ForgotPasswordController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Invalid data!' });

    const { email } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user)
      return res.status(400).json({ error: 'This e-mail is not registred!' });

    const { id } = user;

    const data = {
      ...req.body,
      code: jwt.sign({ id }, auth.secret_forgot_password, {
        expiresIn: 600,
      }),
    };

    await ForgotPassword.handle(data);

    return res.json({ msg: 'E-mail enviado com suceso' });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      code: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Invalid data!' });

    const { code } = req.body;

    try {
      const { id } = await promisify(jwt.verify)(
        code,
        auth.secret_forgot_password
      );
      return res.json(id);
    } catch (error) {
      return res.status(401).json({ error: 'Invalid code!' });
    }
  }
}

module.exports = new ForgotPasswordController();

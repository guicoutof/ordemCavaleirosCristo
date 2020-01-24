const Yup = require('yup');
const User = require('../models/User');

class ChangePasswordController {
  async store(req, res) {
    const schema = Yup.object().shape({
      password: Yup.string()
        .min(6)
        .required(),
      confirmPassword: Yup.string()
        .min(6)
        .required(),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Invalid data' });

    const { id } = req.params;
    const { password, confirmPassword } = req.body;

    const user = await User.findByPk(id);

    if (!user)
      return res.status(400).json({ error: 'This user does not exist!' });

    if (password !== confirmPassword)
      return res.status(401).json({ error: 'Password does not match!' });

    await user.update(req.body);

    return res.json({ msg: 'Password succesfully updated!' });
  }
}

module.exports = new ChangePasswordController();

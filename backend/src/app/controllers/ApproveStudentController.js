const Yup = require('yup');
const User = require('../models/User');

class UserController {
  async index(req, res) {
    const users = await User.findAll({
      where: { type: 1 },
    });

    return res.json(users);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      type: Yup.number()
        .required()
        .min(0)
        .max(2),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Invalid data' });

    const user_id = req.params.id;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: 'This user does not exist!' });
    }

    await user.update(req.body);

    return res.json(user);
  }
}

module.exports = new UserController();

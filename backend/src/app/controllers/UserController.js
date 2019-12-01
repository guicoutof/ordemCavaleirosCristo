import * as Yup from 'yup';
import User from '../models/User';

class UserController {
  async index(req, res) {
    const users = await User.findAll();

    res.json(users);
  }

  async show(req, res) {
    const user = await User.findByPk(req.userId);

    res.json(user);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .required()
        .min(6),
      name: Yup.string().required(),
      birth_date: Yup.date(),
      city: Yup.string(),
      state: Yup.string(),
      country: Yup.string(),
      phone_number: Yup.string(),
      module: Yup.number().required(),
      type: Yup.number().required(),
    });
    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Invalid data' });
    const { email, type } = req.body;
    const userExists = await User.findOne({ where: { email } });
    if (userExists)
      return res.status(400).json({ error: 'User already exists' });
    const possibleTypes = [0, 1, 2];
    if (!possibleTypes.includes(type))
      return res.status(400).json({ error: 'Type must be either 0,1 or 2!' });
    const user = await User.create(req.body);
    delete user.dataValues.password;
    return res.json(user);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      oldPassword: Yup.string(),
      password: Yup.string()
        .min(6)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmPassword: Yup.string()
        .min(6)
        .when('password', (password, field) =>
          password ? field.required().oneOf([Yup.ref('password')]) : field
        ),
      name: Yup.string().required(),
      birth_date: Yup.date(),
      city: Yup.string(),
      state: Yup.string(),
      country: Yup.string(),
      phone_number: Yup.string(),
      module: Yup.number(),
      type: Yup.number()
        .required()
        .min(0)
        .max(2),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Invalid data' });

    const { email, oldPassword } = req.body;

    const user = await User.findByPk(req.userId);

    if (user.email !== email) {
      const userExists = await User.findOne({ where: { email } });
      if (userExists)
        return res.status(400).json({ error: 'This email is already in use!' });
    }

    if (oldPassword && !user.checkPassword(oldPassword))
      return res.status(401).json({ error: 'Password does not match!' });

    const {
      id,
      name,
      birth_date,
      city,
      state,
      country,
      phone_number,
      module,
      type,
    } = await user.update(req.body);

    return res.json({
      id,
      email,
      name,
      birth_date,
      city,
      state,
      country,
      phone_number,
      module,
      type,
    });
  }

  async delete(req, res) {
    await User.destroy({
      where: { id: req.userId },
    });

    return res.json({ message: 'Usuário excluído com sucesso!' });
  }
}

export default new UserController();

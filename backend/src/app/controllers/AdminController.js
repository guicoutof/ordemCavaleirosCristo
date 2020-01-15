const Yup = require('yup');
const Admin = require('../models/Admin');

class AdminController {
  async index(req, res) {
    const admins = await Admin.findAll();

    return res.json(admins);
  }

  async show(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.params)))
      return res.status(400).json({ error: 'Invalid ID!' });

    const admin = await Admin.findByPk(req.params.id);

    return res.json(admin);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().required(),
      password: Yup.string()
        .required()
        .min(6),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Invalid data!' });

    const { email } = req.body;

    const admin = await Admin.findOne({ where: { email } });

    if (admin)
      return res.status(400).json({ error: 'This admin already exists!' });

    const newAdmin = await Admin.create(req.body);
    delete newAdmin.dataValues.password;
    return res.json(newAdmin);
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
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Invalid data' });

    const { email, oldPassword } = req.body;

    const admin = await Admin.findByPk(req.adminId);

    if (admin.email !== email) {
      const adminExists = await Admin.findOne({ where: { email } });
      if (adminExists)
        return res.status(400).json({ error: 'This email is already in use!' });
    }

    if (oldPassword && !admin.checkPassword(oldPassword))
      return res.status(401).json({ error: 'Passwords do not match!' });

    const { id, password_hash } = await admin.update(req.body);

    return res.json({ id, email, password_hash });
  }

  async delete(req, res) {
    Admin.destroy({ where: { id: req.adminId } });

    return res.json({ message: 'Administrador excluído com sucesso!' });
  }
}

module.exports = new AdminController();

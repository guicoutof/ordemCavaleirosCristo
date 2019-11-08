import * as Yup from 'yup';
import Admin from '../models/Admin';

class AdminController {
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
}

export default new AdminController();

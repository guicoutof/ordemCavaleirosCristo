import * as Yup from 'yup';
import jwt from 'jsonwebtoken';
import Admin from '../models/Admin';
import auth from '../../config/auth';

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

    const validPassword = await admin.checkPassword(password);

    if (!validPassword)
      return res.status(401).json('Invalid email and password!');

    const { id } = admin;

    return res.json({
      id,
      email,
      token: jwt.sign({ id }, auth.secret_admin, { expiresIn: auth.expires }),
    });
  }
}

export default new DashboardController();

import * as Yup from 'yup';
import ContactMail from '../jobs/ConctactMail';

class ClassController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().required(),
      subject: Yup.string().required(),
      message: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Invalid data!' });

    const data = {
      ...req.body,
      date: new Date(),
    };

    await ContactMail.handle(data);

    return res.json({ msg: 'E-mail enviado com suceso' });
  }
}

export default new ClassController();

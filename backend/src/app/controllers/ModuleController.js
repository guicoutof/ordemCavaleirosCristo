import * as Yup from 'yup';
import Module from '../models/Module';

class ModuleController {
  async index(req, res) {
    const modules = await Module.findAll();
    return res.json(modules);
  }

  async show(req, res) {
    const m = await Module.findByPk(req.params.id);

    return res.json(m);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Invalid data!' });

    const moduleExists = await Module.findOne({
      where: { name: req.body.name },
    });

    if (moduleExists)
      return res
        .status(400)
        .json({ error: 'This module already exists, try updating it!' });

    const m = await Module.create({
      ...req.body,
      courses_quantity: 0,
    });

    return res.json(m);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Invalid data!' });

    const m = await Module.findByPk(req.body.id);

    if (!m)
      return res.status(400).json({ error: 'This module does not exist!' });

    await m.update({ name: req.body.name });

    return res.json(m);
  }

  async delete(req, res) {
    await Module.destroy({
      where: { id: req.params.id },
    });

    return res.json({ msg: 'Module was deleted!' });
  }
}

export default new ModuleController();

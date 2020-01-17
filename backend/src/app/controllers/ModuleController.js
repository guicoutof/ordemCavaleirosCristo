/* eslint-disable no-await-in-loop */
const Yup = require('yup');
const Module = require('../models/Module');
const Course = require('../models/Course');

class ModuleController {
  async index(req, res) {
    const modules = await Module.findAll();
    const response = [];
    for (let i = 0; i < modules.length; i += 1) {
      const m = modules[i].get();
      const courses = await Course.findAll({ where: { module_id: m.id } });
      response.push({
        module: m,
        courses,
      });
    }
    return res.json(response);
  }

  async show(req, res) {
    const m = await Module.findByPk(req.params.id);
    const courses = await Course.findAll({ where: { module_id: m.id } });
    return res.json({ module: m, courses });
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

module.exports = new ModuleController();

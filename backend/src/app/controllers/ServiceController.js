const Yup = require('yup');
const fs = require('fs');
const { promisify } = require('util');
const { resolve } = require('path');
const Service = require('../models/Service');

const unlinkAsync = promisify(fs.unlink);

class ServiceController {
  async index(req, res) {
    const services = await Service.findAll();
    return res.json(services);
  }

  async show(req, res) {
    const service = await Service.findByPk(req.params.id);

    return res.json(service);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      description: Yup.string().required(),
      link: Yup.string().required(),
      price: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Invalid data!' });

    const serviceExists = await Service.findOne({
      where: { name: req.body.name },
    });

    if (serviceExists)
      return res
        .status(400)
        .json({ error: 'This service already exists, try updating it!' });

    const { filename: path } = req.file;

    const service = await Service.create({
      ...req.body,
      path,
    });

    return res.json(service);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number().required(),
      name: Yup.string(),
      description: Yup.string(),
      link: Yup.string(),
      price: Yup.number(),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Invalid data!' });

    const service = await Service.findByPk(req.body.id);

    if (!service)
      return res.status(400).json({ error: 'This service does not exist!' });

    await unlinkAsync(
      resolve(__dirname, '..', '..', 'temp', 'uploads', service.path)
    );

    let { path } = service;

    if (req.file) path = req.file.filename;

    await service.update({ ...req.body, path });

    return res.json(service);
  }

  async delete(req, res) {
    const service = await Service.findByPk(req.params.id);

    await unlinkAsync(
      resolve(__dirname, '..', '..', 'temp', 'uploads', service.path)
    );

    await Service.destroy({
      where: { id: req.params.id },
    });

    return res.json({ msg: 'Course was deleted!' });
  }
}

module.exports = new ServiceController();

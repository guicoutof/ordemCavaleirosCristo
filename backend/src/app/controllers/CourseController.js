const Yup = require('yup');
const fs = require('fs');
const { promisify } = require('util');
const { resolve } = require('path');
const Course = require('../models/Course');
const Module = require('../models/Module');

const unlinkAsync = promisify(fs.unlink);

class CourseController {
  async index(req, res) {
    const { page = 1 } = req.query;
    const courses = await Course.findAll({
      where: { module_id: req.params.id },
      limit: 3,
      offset: (page - 1) * 3,
      order: [['createdAt', 'ASC']],
    });
    return res.json(courses);
  }

  async show(req, res) {
    const course = await Course.findByPk(req.params.id);

    return res.json(course);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      description: Yup.string().required(),
      hours: Yup.number().required(),
      book: Yup.string().required(),
      assistance: Yup.string().required(),
      price: Yup.number().required(),
      module_id: Yup.number().required(),
      highlight: Yup.boolean().required(),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Invalid data!' });

    const courseExists = await Course.findOne({
      where: { name: req.body.name },
    });

    if (courseExists)
      return res
        .status(400)
        .json({ error: 'This course already exists, try updating it!' });

    const { filename: path } = req.file;

    const m = await Module.findByPk(req.body.module_id);

    if (!m) {
      return res.status(400).json({ error: 'This module does not exist!' });
    }

    await m.update({ courses_quantity: m.courses_quantity + 1 });

    const course = await Course.create({
      ...req.body,
      path,
    });

    return res.json(course);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number().required(),
      name: Yup.string(),
      description: Yup.string(),
      hours: Yup.number(),
      book: Yup.string(),
      assistance: Yup.string(),
      price: Yup.number(),
      module_id: Yup.number(),
      highlight: Yup.boolean(),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Invalid data!' });

    const course = await Course.findByPk(req.body.id);

    if (!course)
      return res.status(400).json({ error: 'This course does not exist!' });

    let { path } = course;

    if (req.file) {
      await unlinkAsync(
        resolve(__dirname, '..', '..', 'temp', 'uploads', course.path)
      );
      path = req.file.filename;
    }

    await course.update({ ...req.body, path });

    return res.json(course);
  }

  async delete(req, res) {
    const course = await Course.findByPk(req.params.id);

    const m = await Module.findByPk(course.module_id);

    await m.update({ courses_quantity: m.courses_quantity - 1 });

    await unlinkAsync(
      resolve(__dirname, '..', '..', 'temp', 'uploads', course.path)
    );

    await Course.destroy({
      where: { id: req.params.id },
    });

    return res.json({ msg: 'Course was deleted!' });
  }
}

module.exports = new CourseController();

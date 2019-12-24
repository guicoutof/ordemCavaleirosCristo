import * as Yup from 'yup';
import fs from 'fs';
import { promisify } from 'util';
import { resolve } from 'path';
import Course from '../models/Course';

const unlinkAsync = promisify(fs.unlink);

class CourseController {
  async index(req, res) {
    const courses = await Course.findAll();
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
      module: Yup.number().required(),
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

    const course = await Course.create({
      ...req.body,
      path,
    });

    return res.json(course);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      description: Yup.string(),
      hours: Yup.number(),
      book: Yup.string(),
      assistance: Yup.string(),
      price: Yup.number(),
      module: Yup.number(),
      highlight: Yup.boolean(),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Invalid data!' });

    const course = await Course.findOne({ where: { name: req.body.name } });

    if (!course)
      return res.status(400).json({ error: 'This course does not exist!' });

    await unlinkAsync(
      resolve(__dirname, '..', '..', 'temp', 'uploads', course.path)
    );

    const { filename: path } = req.file;

    await course.update({ ...req.body, path });

    return res.json({ msg: 'Course was updated!' });
  }

  async delete(req, res) {
    const course = await Course.findByPk(req.params.id);

    await unlinkAsync(
      resolve(__dirname, '..', '..', 'temp', 'uploads', course.path)
    );

    await Course.destroy({
      where: { id: req.params.id },
    });

    return res.json({ msg: 'Course was deleted!' });
  }
}

export default new CourseController();

import * as Yup from 'yup';
import Class from '../models/Class';
import Course from '../models/Course';

class ClassController {
  async index(req, res) {
    const classes = await Class.findAll({
      where: { course_id: req.params.id },
      include: {
        model: Course,
        as: 'course',
      },
      order: [['id', 'ASC']],
    });
    return res.json(classes);
  }

  async show(req, res) {
    const c = await Class.findOne({
      where: { id: req.params.id },
      include: {
        model: Course,
        as: 'course',
      },
    });

    return res.json(c);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      description: Yup.string().required(),
      link: Yup.string().required(),
      course_id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Invalid data!' });

    const classExists = await Class.findOne({
      where: { name: req.body.name, course_id: req.body.course_id },
    });

    if (classExists)
      return res
        .status(400)
        .json({ error: 'This class already exists, try updating it!' });

    const course = await Course.findByPk(req.body.course_id);

    if (!course) return res.status(400).json({ error: 'Invalid course id!' });

    const c = await Class.create(req.body);

    return res.json(c);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number().required(),
      name: Yup.string(),
      description: Yup.string(),
      link: Yup.string(),
      course_id: Yup.number(),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Invalid data!' });

    const c = await Class.findByPk(req.body.id);

    if (!c)
      return res.status(400).json({ error: 'This class does not exist!' });

    await c.update(req.body);

    return res.json(c);
  }

  async delete(req, res) {
    const c = await Class.findByPk(req.params.id);

    await c.destroy({
      where: { id: req.params.id },
    });

    return res.json({ msg: 'Class was deleted!' });
  }
}

export default new ClassController();

const Yup = require('yup');
const StudentCourse = require('../models/StudentCourse');
const User = require('../models/User');
const Course = require('../models/Course');

class StudentCoursesController {
  async show(req,res) {
    const { page = 1 } = req.query;
    const studentCourses = await StudentCourse.findAll({
      where: {
        user_id: req.params.id
      },
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['email','name']
        },
        {
          model: Course,
          as: 'course',
          attributes: ['name']
        }
      ],
      limit: 3,
      offset: (page - 1) * 3,
    })
    return res.json(studentCourses);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      user_id: Yup.number().required(),
      course_id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Invalid data!' });

    const { user_id, course_id } = req.body;

    const user = await User.findByPk(user_id);

    if (!user)
      return res.status(400).json({ error: 'This user does not exist!' });

    const course = await Course.findByPk(course_id);

    if (!course)
      return res.status(400).json({ error: 'This course does not exist!' });

    const studentAlreadyHasCourse = await StudentCourse.findOne({
      where: { user_id, course_id },
    });

    if (studentAlreadyHasCourse)
      return res
        .status(400)
        .json({ error: 'This user already bought this course!' });

    const studentCourse = await StudentCourse.create(req.body);

    return res.json(studentCourse);
  }
}

module.exports = new StudentCoursesController();

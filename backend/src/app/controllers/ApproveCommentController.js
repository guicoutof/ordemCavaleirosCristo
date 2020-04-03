const Yup = require('yup');
const Comment = require('../models/Comment');

const User = require('../models/User');

class ApproveCommentController {
  async index(req, res) {
    const comments = await Comment.findAll({
      where: { approved: true },
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['name'],
        },
      ],
    });

    return res.json(comments);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      approved: Yup.boolean().required(),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Invalid data' });

    const { id } = req.params;

    const comment = await Comment.findByPk(id);

    if (!comment) {
      return res.status(400).json({ error: 'This comment does not exist!' });
    }

    await comment.update(req.body);

    return res.json(comment);
  }
}

module.exports = new ApproveCommentController();

const Yup = require('yup');
const Comment = require('../models/Comment');
const User = require('../models/User');

class CommentController {
  async index(req, res) {
    const comments = await Comment.findAll({
      include: [
        {
          model: User,
          as: 'user',
        },
      ],
      order: [['created_at', 'ASC']],
    });
    return res.json(comments);
  }

  async show(req, res) {
    const comment = await Comment.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: User,
          as: 'user',
        },
      ],
    });

    return res.json(comment);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      content: Yup.string().required(),
      status: Yup.number().required(),
      user_id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Invalid data!' });

    const user = await User.findByPk(req.body.user_id);

    if (!user) return res.status(400).json({ error: 'Invalid user id!' });

    const comment = await Comment.create({ ...req.body, approved: false });

    return res.json(comment);
  }

  async delete(req, res) {
    await Comment.destroy({
      where: { id: req.params.id },
    });

    return res.json({ msg: 'Comment was deleted!' });
  }
}

module.exports = new CommentController();

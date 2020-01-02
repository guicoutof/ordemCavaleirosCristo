import * as Yup from 'yup';
import fs from 'fs';
import { promisify } from 'util';
import { resolve } from 'path';
import Publication from '../models/Publication';

const unlinkAsync = promisify(fs.unlink);

class PublicationController {
  async index(req, res) {
    const { page = 1 } = req.query;
    const publications = await Publication.findAll({
      limit: 5,
      offset: (page - 1) * 5,
      order: [['createdAt', 'DESC']],
    });
    return res.json(publications);
  }

  async show(req, res) {
    const publication = await Publication.findByPk(req.params.id);

    return res.json(publication);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      text: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Invalid data!' });

    const { filename: path } = req.file;

    const publication = await Publication.create({
      ...req.body,
      path,
    });

    return res.json(publication);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number().required(),
      title: Yup.string(),
      text: Yup.string(),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Invalid data!' });

    const publication = await Publication.findByPk(req.body.id);

    if (!publication)
      return res
        .status(400)
        .json({ error: 'This publication does not exist!' });

    await unlinkAsync(
      resolve(__dirname, '..', '..', 'temp', 'uploads', publication.path)
    );

    const { filename: path } = req.file;

    await publication.update({ ...req.body, path });

    return res.json(publication);
  }

  async delete(req, res) {
    const publication = await Publication.findByPk(req.params.id);

    await unlinkAsync(
      resolve(__dirname, '..', '..', 'temp', 'uploads', publication.path)
    );

    await Publication.destroy({
      where: { id: req.params.id },
    });

    return res.json({ msg: 'Publication was deleted!' });
  }
}

export default new PublicationController();
const Yup = require('yup');
const ServicePurchase = require('../models/ServicePurchase');
const User = require('../models/User');
const Service = require('../models/Service');
const ServiceMail = require('../jobs/ServiceMail');

class ServicePurchaseController {
  async index(req, res) {
    const purchases = await ServicePurchase.findAll({
      where: { paid: false },
    });

    res.json(purchases);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      user_id: Yup.number().required(),
      service_id: Yup.number().required(),
      paid: Yup.boolean().required(),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Invalid data!' });

    const { user_id, service_id } = req.body;

    const user = await User.findByPk(user_id);

    if (!user)
      return res.status(400).json({ error: 'This user does not exist!' });

    const service = await Service.findByPk(service_id);

    if (!service)
      return res.status(400).json({ error: 'This service does not exist!' });

    try {
      const studentAlreadyHasService = await ServicePurchase.findOne({
        where: { user_id, service_id },
      });

      if (studentAlreadyHasService)
        return res
          .status(400)
          .json({ error: 'This user already bought this service!' });

      const purchase = await ServicePurchase.create(req.body);

      return res.json(purchase);
    } catch (error) {
      console.log(error);
      return res.json({ error });
    }
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number().required(),
      paid: Yup.boolean().required(),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Invalid data!' });

    const { id } = req.body;

    const relation = await ServicePurchase.findByPk(id);

    if (!relation)
      return res.status(400).json({ error: 'This purchase was not made!' });

    const { user_id, service_id } = relation;

    await relation.update({ ...req.body, user_id, service_id });

    const user = await User.findByPk(user_id);
    const service = await Service.findByPk(service_id);

    const data = {
      email: user.email,
      name: service.name,
      link: service.link,
    };
    try {
      await ServiceMail.handle(data);
    } catch (error) {
      console.log(error);
      return res.json(error);
    }

    return res.json(relation);
  }

  async delete(req, res) {
    await ServicePurchase.destroy({
      where: {
        id: req.params.id,
      },
    });

    return res.json({ msg: 'Purchase undone!' });
  }
}

module.exports = new ServicePurchaseController();

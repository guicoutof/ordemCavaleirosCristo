/* eslint-disable consistent-return */
/* eslint-disable func-names */
const Yup = require('yup');
const mercadopago = require('mercadopago');
const Service = require('../models/Service');

class ServicePaymentController {
  async store(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.params)))
      return res.status(400).json({ error: 'Invalid data!' });

    const { id } = req.params;

    const service = await Service.findByPk(id);

    if (!service) return res.status(400).json({ error: 'Invalid service id!' });

    mercadopago.configure({
      access_token: process.env.ACCESS_TOKEN,
    });

    const preference = {
      items: [
        {
          title: service.name,
          unit_price: service.price,
          picture_url: service.url,
          quantity: 1,
        },
      ],
      back_urls: {
        success: `https://179.127.64.111:3000/servico/${id}/aprovado`,
        failure: 'https://179.127.64.111:3000/servico/reprovado',
        pending: `https://179.127.64.111:3000/servico/${id}/pendente`,
      },
      auto_return: 'approved',
      payment_methods: {
        excluded_payment_methods: [
          {
            id: 'pec',
          },
        ],
        installments: 1,
      },
    };

    mercadopago.preferences
      .create(preference)
      .then(function(response) {
        const { init_point } = response.body;
        return res.json(init_point);
      })
      .catch(function(error) {
        return res.json({ error });
      });
  }
}

module.exports = new ServicePaymentController();

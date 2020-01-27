/* eslint-disable consistent-return */
/* eslint-disable func-names */
const Yup = require('yup');
const mercadopago = require('mercadopago');

class DonationController {
  async store(req, res) {
    const schema = Yup.object().shape({
      value: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Invalid data!' });

    mercadopago.configure({
      access_token: process.env.ACCESS_TOKEN,
    });

    const { value } = req.body;

    const preference = {
      items: [
        {
          title: 'Doação para Ordem dos Cavaleiros de Cristo',
          unit_price: value,
          quantity: 1,
        },
      ],
      back_urls: {
        success: 'https://179.127.64.111:3000/doacoes/aprovado',
        failure: 'https://179.127.64.111:3000/doacoes/reprovado',
        pending: 'https://179.127.64.111:3000/doacoes/pendente',
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

module.exports = new DonationController();

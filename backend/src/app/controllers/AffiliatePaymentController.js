/* eslint-disable consistent-return */
/* eslint-disable func-names */
const Yup = require('yup');
const mercadopago = require('mercadopago');

class AffiliatePaymentController {
  async store(req, res) {
    const schema = Yup.object().shape({
      numberOfFees: Yup.number().required(),
      type: Yup.boolean().required(),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Invalid data!' });

    mercadopago.configure({
      access_token: process.env.ACCESS_TOKEN,
    });

    const { numberOfFees, type } = req.body;

    const return_url = type ? 'conta' : 'cadastro';

    let title = type ? 'Upgrade para ' : '';

    title = title.concat(`Conta Afiliada - ${numberOfFees} mensalidade(s)`);

    const preference = {
      items: [
        {
          title,
          unit_price: numberOfFees * 90,
          quantity: 1,
          description:
            'Após o registro como afiliado, o cadastrado terá uma consulta espiritual, para que ' +
            'possamos saber quais são as necessidades, o objetivo, ' +
            'e direcionarmos o seu estudo mensalmente, ' +
            'para que ele possa avançar na senda de mistérios da tradição',
        },
      ],
      back_urls: {
        success: `https://179.127.64.111:3000/${return_url}/aprovado`,
        failure: `https://179.127.64.111:3000/${return_url}/reprovado`,
        pending: `https://179.127.64.111:3000/${return_url}/pendente`,
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

module.exports = new AffiliatePaymentController();

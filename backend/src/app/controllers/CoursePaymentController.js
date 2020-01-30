/* eslint-disable consistent-return */
/* eslint-disable func-names */
const Yup = require('yup');
const mercadopago = require('mercadopago');
const Course = require('../models/Course');

class CoursePaymentController {
  async store(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.params)))
      return res.status(400).json({ error: 'Invalid data!' });

    const { id } = req.params;

    const course = await Course.findByPk(id);

    if (!course) return res.status(400).json({ error: 'Invalid course id!' });

    mercadopago.configure({
      access_token: process.env.ACCESS_TOKEN,
    });

    const preference = {
      items: [
        {
          title: course.name,
          unit_price: course.price,
          picture_url: course.url,
          quantity: 1,
        },
      ],
      back_urls: {
        success: `https://179.127.64.111:3000/curso/${id}/aprovado`,
        failure: 'https://179.127.64.111:3000/curso/reprovado',
        pending: `https://179.127.64.111:3000/curso/${id}/pendente`,
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
        console.log(error);
        return res.json({ error });
      });
  }
}

module.exports = new CoursePaymentController();

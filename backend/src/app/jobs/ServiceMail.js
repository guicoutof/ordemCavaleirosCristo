const Mail = require('../../lib/Mail');

class ServiceMail {
  get key() {
    return 'ServiceMail';
  }

  async handle(service) {
    await Mail.sendMail({
      from: process.env.MAIL_USER,
      to: service.email,
      subject: 'OCC - Aprovação de Pagamento de Serviço',
      template: 'service',
      context: {
        name: service.name,
        link: service.link,
      },
    });
  }
}

module.exports = new ServiceMail();

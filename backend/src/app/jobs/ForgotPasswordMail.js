const Mail = require('../../lib/Mail');

class ForgotPasswordMail {
  get key() {
    return 'ForgotPasswordMail';
  }

  async handle(contact) {
    await Mail.sendMail({
      from: process.env.MAIL_USER,
      to: contact.email,
      subject: 'OCC - Recuperação de senha',
      template: 'forgotPassword',
      context: {
        code: contact.code,
      },
    });
  }
}

module.exports = new ForgotPasswordMail();

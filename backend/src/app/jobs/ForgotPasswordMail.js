const Mail = require('../../lib/Mail');

class ForgotPasswordMail {
  get key() {
    return 'ForgotPasswordMail';
  }

  async handle(contact) {
    await Mail.sendMail({
      to: contact.email,
      subject: contact.subject,
      template: 'forgotPassword',
      context: {
        code: contact.code,
      },
    });
  }
}

module.exports = new ForgotPasswordMail();

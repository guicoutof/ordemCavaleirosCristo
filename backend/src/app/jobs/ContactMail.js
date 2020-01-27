const { format } = require('date-fns');
const pt = require('date-fns/locale/pt');
const Mail = require('../../lib/Mail');

class ContactMail {
  get key() {
    return 'ContactMail';
  }

  async handle(contact) {
    await Mail.sendMail({
      to: process.env.MAIL_USER,
      from: contact.email,
      subject: contact.subject,
      template: 'contact',
      context: {
        name: contact.name,
        email: contact.email,
        subject: contact.subject,
        message: contact.message,
        date: format(contact.date, "'dia 'dd' de 'MMMM' às 'HH:mm'hs'", {
          locale: pt,
        }),
      },
    });
  }
}

module.exports = new ContactMail();

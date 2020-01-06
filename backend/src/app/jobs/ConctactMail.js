import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Mail from '../../lib/Mail';

class ContactMail {
  get key() {
    return 'ContactMail';
  }

  async handle(contact) {
    await Mail.sendMail({
      to: `OCC Atendimento <atendimento@cavaleirosdecristo>`,
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

export default new ContactMail();

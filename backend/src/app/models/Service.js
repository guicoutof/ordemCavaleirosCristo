const Sequelize = require('sequelize');

class Service extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        path: Sequelize.STRING,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `${process.env.APP_URL}/files/${this.path}`;
          },
        },
        name: Sequelize.STRING,
        description: Sequelize.STRING,
        link: Sequelize.STRING,
        price: Sequelize.DOUBLE,
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = Service;

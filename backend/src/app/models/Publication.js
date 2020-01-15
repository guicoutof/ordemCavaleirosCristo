const Sequelize = require('sequelize');

class Publication extends Sequelize.Model {
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
        title: Sequelize.STRING,
        text: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = Publication;

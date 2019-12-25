import Sequelize, { Model } from 'sequelize';

class Publication extends Model {
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

export default Publication;

import Sequelize, { Model } from 'sequelize';

class Course extends Model {
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
        hours: Sequelize.DOUBLE,
        book: Sequelize.STRING,
        assistance: Sequelize.STRING,
        price: Sequelize.DOUBLE,
        module: Sequelize.INTEGER,
        highlight: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );
  }
}

export default Course;

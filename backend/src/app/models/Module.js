import Sequelize, { Model } from 'sequelize';

class Module extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        courses_quantity: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
  }
}

export default Module;

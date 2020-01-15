const Sequelize = require('sequelize');

class Module extends Sequelize.Model {
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

module.exports = Module;

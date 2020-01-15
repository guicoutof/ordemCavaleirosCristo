const Sequelize = require('sequelize');

class Class extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        description: Sequelize.STRING,
        link: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Course, { foreignKey: 'course_id', as: 'course' });
  }
}

module.exports = Class;

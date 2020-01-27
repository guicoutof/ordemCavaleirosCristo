const Sequelize = require('sequelize');

class StudentCourse extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        paid: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    this.belongsTo(models.Course, {
      foreignKey: 'course_id',
      as: 'course',
    });
  }
}

module.exports = StudentCourse;

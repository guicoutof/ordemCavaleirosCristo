const Sequelize = require('sequelize');

class Course extends Sequelize.Model {
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
        highlight: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Course, { foreignKey: 'module_id', as: 'module' });
  }
}

module.exports = Course;

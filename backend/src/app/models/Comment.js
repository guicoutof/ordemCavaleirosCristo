const Sequelize = require('sequelize');

class Comment extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        content: Sequelize.STRING,
        status: Sequelize.INTEGER,
        approved: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  }
}

module.exports = Comment;

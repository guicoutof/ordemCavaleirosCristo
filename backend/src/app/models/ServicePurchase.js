const Sequelize = require('sequelize');

class ServicePurchase extends Sequelize.Model {
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
    this.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user',
    });
    this.belongsTo(models.Service, {
      foreignKey: 'service_id',
      as: 'service',
    });
  }
}

module.exports = ServicePurchase;

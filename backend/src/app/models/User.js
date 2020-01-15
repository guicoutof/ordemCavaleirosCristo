const Sequelize = require('sequelize');

const bcrypt = require('bcryptjs');

class User extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        name: Sequelize.STRING,
        birth_date: Sequelize.DATE,
        city: Sequelize.STRING,
        state: Sequelize.STRING,
        country: Sequelize.STRING,
        phone_number: Sequelize.STRING,
        module: Sequelize.INTEGER,
        type: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    this.addHook('beforeSave', async user => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

module.exports = User;

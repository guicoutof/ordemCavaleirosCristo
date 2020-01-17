const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');

class Admin extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    this.addHook('beforeSave', async admin => {
      if (admin.password)
        admin.password_hash = await bcrypt.hash(admin.password, 8);
    });
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

module.exports = Admin;

import Sequelize from 'sequelize';

import User from '../app/models/User';
import Admin from '../app/models/Admin';
import Course from '../app/models/Course';

import DataBaseConfig from '../config/database';

const models = [User, Admin, Course];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(DataBaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();

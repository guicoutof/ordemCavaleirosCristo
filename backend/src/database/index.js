import Sequelize from 'sequelize';

import User from '../app/models/User';
import Admin from '../app/models/Admin';
import Course from '../app/models/Course';
import Class from '../app/models/Class';
import Module from '../app/models/Module';
import Publication from '../app/models/Publication';

import DataBaseConfig from '../config/database';

const models = [User, Admin, Course, Class, Module, Publication];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(DataBaseConfig);

    models.map(model => model.init(this.connection));
    models.map(
      model => model.associate && model.associate(this.connection.models)
    );
  }
}

export default new Database();

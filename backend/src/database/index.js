const Sequelize = require('sequelize');

const User = require('../app/models/User');
const Admin = require('../app/models/Admin');
const Course = require('../app/models/Course');
const Class = require('../app/models/Class');
const Module = require('../app/models/Module');
const Publication = require('../app/models/Publication');
const StudentCourse = require('../app/models/StudentCourse');
const Service = require('../app/models/Service');

const DataBaseConfig = require('../config/database');

const models = [
  User,
  Admin,
  Course,
  Class,
  Module,
  Publication,
  StudentCourse,
  Service,
];

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

module.exports = new Database();

const Sequelize = require('sequelize');

const User = require('../app/models/User');
const Admin = require('../app/models/Admin');
const Course = require('../app/models/Course');
const Class = require('../app/models/Class');
const Module = require('../app/models/Module');
const Publication = require('../app/models/Publication');
const StudentCourse = require('../app/models/StudentCourse');
const ServicePurchase = require('../app/models/ServicePurchase');
const Service = require('../app/models/Service');
const Comment = require('../app/models/Comment');

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
  ServicePurchase,
  Comment,
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

const express = require('express');
require('dotenv/config');
const path = require('path');
const cors = require('cors');
const routes = require('./routes');

require('./database');

class App {
  constructor() {
    this.server = express();

    this.server.use(cors());
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '.', 'temp', 'uploads'))
    );
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

exports.server = new App().server;

import express, { json } from 'express';
import 'dotenv/config';
import path from 'path';
import routes from './routes';

import './database';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '.', 'temp', 'uploads'))
    );
    this.server.use(json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;

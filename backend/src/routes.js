import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import DashboardController from './app/controllers/DashboardController';
import AdminController from './app/controllers/AdminController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/sessions', SessionController.store);

routes.post('/dashboard', DashboardController.store);
routes.post('/admin', AdminController.store);

routes.get('/getUsers', UserController.index);
routes.post('/users', UserController.store);

routes.use(authMiddleware);
routes.get('/getUser', UserController.show);
routes.put('/users', UserController.update);
routes.delete('/users', UserController.delete);

export default routes;

import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import DashboardController from './app/controllers/DashboardController';
import AdminController from './app/controllers/AdminController';

import authUserMiddleware from './app/middlewares/authUser';
import authAdminMiddleware from './app/middlewares/authAdmin';

const routes = new Router();

routes.post('/sessions', SessionController.store);

routes.post('/dashboard', DashboardController.store);

routes.get('/admins', authAdminMiddleware, AdminController.index);
routes.get('/admins/:id', authAdminMiddleware, AdminController.show);
routes.post('/admins', authAdminMiddleware, AdminController.store);
routes.put('/admins', authAdminMiddleware, AdminController.update);
routes.delete('/admins', authAdminMiddleware, AdminController.delete);

routes.get('/getUsers', authAdminMiddleware, UserController.index);
routes.post('/users', UserController.store);

routes.use(authUserMiddleware);
routes.get('/getUser', UserController.show);
routes.put('/users', UserController.update);
routes.delete('/users', UserController.delete);

export default routes;

import { Router } from 'express';
import multer from 'multer';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import DashboardController from './app/controllers/DashboardController';
import AdminController from './app/controllers/AdminController';

import CourseController from './app/controllers/CourseController';

import authUserMiddleware from './app/middlewares/authUser';
import authAdminMiddleware from './app/middlewares/authAdmin';

import multerConfig from './config/multer';

const upload = multer(multerConfig);
const routes = new Router();

routes.post('/sessions', SessionController.store);

routes.post('/dashboard', DashboardController.store);

routes.get('/admins', authAdminMiddleware, AdminController.index);
routes.get('/admins/:id', authAdminMiddleware, AdminController.show);
routes.post('/admins', authAdminMiddleware, AdminController.store);
routes.put('/admins', authAdminMiddleware, AdminController.update);
routes.delete('/admins', authAdminMiddleware, AdminController.delete);

routes.get('/courses', CourseController.index);
routes.get('/courses/:id', CourseController.show);
routes.post(
  '/courses',
  [upload.single('file'), authAdminMiddleware],
  CourseController.store
);
routes.put(
  '/courses',
  [upload.single('file'), authAdminMiddleware],
  CourseController.update
);
routes.delete('/courses/:id', CourseController.delete);

routes.get('/getUsers', authAdminMiddleware, UserController.index);
routes.post('/users', UserController.store);

routes.use(authUserMiddleware);
routes.get('/getUser', UserController.show);
routes.put('/users', UserController.update);
routes.delete('/users', UserController.delete);

export default routes;

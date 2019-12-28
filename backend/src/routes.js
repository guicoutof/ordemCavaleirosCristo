import { Router } from 'express';
import multer from 'multer';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import DashboardController from './app/controllers/DashboardController';
import AdminController from './app/controllers/AdminController';

import ModuleController from './app/controllers/ModuleController';
import CourseController from './app/controllers/CourseController';
import ClassController from './app/controllers/ClassController';

import PublicationController from './app/controllers/PublicationController';

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

routes.get('/modules', ModuleController.index);
routes.get('/modules/:id', ModuleController.show);
routes.post('/modules', authAdminMiddleware, ModuleController.store);
routes.put('/modules', authAdminMiddleware, ModuleController.update);
routes.delete('/modules/:id', authAdminMiddleware, ModuleController.delete);

routes.get('/courses/module/:id', CourseController.index);
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
routes.delete('/courses/:id', authAdminMiddleware, CourseController.delete);

routes.get('/classes/course/:id', ClassController.index);
routes.get('/classes/:id', ClassController.show);
routes.post('/classes', authAdminMiddleware, ClassController.store);
routes.put('/classes', authAdminMiddleware, ClassController.update);
routes.delete('/classes/:id', authAdminMiddleware, ClassController.delete);

routes.get('/publications', PublicationController.index);
routes.get('/publications/:id', PublicationController.show);
routes.post(
  '/publications',
  [upload.single('file'), authAdminMiddleware],
  PublicationController.store
);

routes.put(
  '/publications',
  [upload.single('file'), authAdminMiddleware],
  PublicationController.update
);
routes.delete(
  '/publications/:id',
  authAdminMiddleware,
  PublicationController.delete
);

routes.get('/getUsers', authAdminMiddleware, UserController.index);
routes.post('/users', UserController.store);

routes.use(authUserMiddleware);
routes.get('/getUser', UserController.show);
routes.put('/users', UserController.update);
routes.delete('/users', UserController.delete);

export default routes;

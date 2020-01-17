const { Router } = require('express');
const multer = require('multer');
const UserController = require('./app/controllers/UserController');
const SessionController = require('./app/controllers/SessionController');
const DashboardController = require('./app/controllers/DashboardController');
const AdminController = require('./app/controllers/AdminController');
const ApproveStudentController = require('./app/controllers/ApproveStudentController');

const ContactController = require('./app/controllers/ContactController');

const ModuleController = require('./app/controllers/ModuleController');
const CourseController = require('./app/controllers/CourseController');
const StudentCoursesController = require('./app/controllers/StudentCoursesController');
const ClassController = require('./app/controllers/ClassController');

const PublicationController = require('./app/controllers/PublicationController');

const authUserMiddleware = require('./app/middlewares/authUser');
const authAdminMiddleware = require('./app/middlewares/authAdmin');

const multerConfig = require('./config/multer');

const upload = multer(multerConfig);
const routes = new Router();

routes.post('/sessions', SessionController.store);

routes.post('/dashboard', DashboardController.store);

routes.post('/contact', ContactController.store);

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
routes.get(
  '/pendingStudents',
  authAdminMiddleware,
  ApproveStudentController.index
);
routes.post(
  '/approveStudent/:id',
  authAdminMiddleware,
  ApproveStudentController.store
);

routes.use(authUserMiddleware);
routes.get('/getUser', UserController.show);
routes.put('/users', UserController.update);
routes.delete('/users', UserController.delete);

routes.get('/student_courses/:id', StudentCoursesController.show);
routes.post('/student_courses', StudentCoursesController.store);

module.exports = routes;

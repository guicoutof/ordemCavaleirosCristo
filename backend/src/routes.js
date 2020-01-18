const { Router } = require('express');
const multer = require('multer');
const UserController = require('./app/controllers/UserController');
const SessionController = require('./app/controllers/SessionController');
const DashboardController = require('./app/controllers/DashboardController');
const AdminController = require('./app/controllers/AdminController');

const ApproveStudentController = require('./app/controllers/ApproveStudentController');
const CommentController = require('./app/controllers/CommentController');
const ApproveCommentController = require('./app/controllers/ApproveCommentController');

const ContactController = require('./app/controllers/ContactController');
const ForgotPasswordController = require('./app/controllers/ForgotPasswordController');
const ChangePasswordController = require('./app/controllers/ChangePasswordController');

const ServiceController = require('./app/controllers/ServiceController');
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
routes.post('/forgotPassword', ForgotPasswordController.store);
routes.post('/verifyCode', ForgotPasswordController.update);
routes.post('/changePassword/:id', ChangePasswordController.store);

routes.get('/admins', authAdminMiddleware, AdminController.index);
routes.get('/admins/:id', authAdminMiddleware, AdminController.show);
routes.post('/admins', authAdminMiddleware, AdminController.store);
routes.put('/admins', authAdminMiddleware, AdminController.update);
routes.delete('/admins', authAdminMiddleware, AdminController.delete);

routes.get('/services', ServiceController.index);
routes.get('/services/:id', ServiceController.show);
routes.post(
  '/services',
  [upload.single('file'), authAdminMiddleware],
  ServiceController.store
);
routes.put(
  '/services',
  [upload.single('file'), authAdminMiddleware],
  ServiceController.update
);
routes.delete('/services/:id', authAdminMiddleware, ServiceController.delete);

routes.get('/modules', ModuleController.index);
routes.get('/modules/:id', ModuleController.show);
routes.post('/modules', authAdminMiddleware, ModuleController.store);
routes.put('/modules', authAdminMiddleware, ModuleController.update);
routes.delete('/modules/:id', authAdminMiddleware, ModuleController.delete);

routes.get('/comments', authAdminMiddleware, CommentController.index);
routes.get('/comments/:id', authAdminMiddleware, CommentController.show);
routes.delete('/comments/:id', authAdminMiddleware, CommentController.delete);
routes.get('/approvedComments', ApproveCommentController.index);
routes.post(
  '/approveComment/:id',
  authAdminMiddleware,
  ApproveCommentController.store
);

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

routes.delete(
  '/deleteStudent/:id',
  authAdminMiddleware,
  ApproveStudentController.delete
);

routes.use(authUserMiddleware);
routes.get('/getUser', UserController.show);
routes.put('/users', UserController.update);
routes.delete('/users', UserController.delete);

routes.post('/comments', CommentController.store);

routes.get('/student_courses/:id', StudentCoursesController.show);
routes.post('/student_courses', StudentCoursesController.store);

module.exports = routes;

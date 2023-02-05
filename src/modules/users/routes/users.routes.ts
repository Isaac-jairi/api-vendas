import { Router } from 'express';
import UsersController from '../controllers/UsersController';
import { celebrate, Joi, Segments } from 'celebrate';
import isAuthenticated from '../../../shared/http/middlewares/isAuthenticated';
import UserAvatarController from '../controllers/UserAvatarController';
import multer from 'multer';
import uploadConfig from '@config/upload';

const usersRouter = Router();

const usersController = new UsersController();
const userAvatarController = new UserAvatarController();

const multerUpload = multer(uploadConfig);

usersRouter.get('/', isAuthenticated, usersController.index);

usersRouter.patch(
  '/avatar',
  isAuthenticated,
  multerUpload.single('avatar'),
  userAvatarController.update,
);

usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  usersController.create,
);

export default usersRouter;

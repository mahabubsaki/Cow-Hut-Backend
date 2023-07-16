import express from 'express';
import { deleteUserController, getAllUsersController, getSingleUserController, signUpController, updateUserController } from './user.controller';

const userRouter = express.Router();

userRouter.post('/auth/signup', signUpController);
userRouter.get('/', getAllUsersController);
userRouter.get('/:id', getSingleUserController);
userRouter.patch('/:id', updateUserController);
userRouter.delete('/:id', deleteUserController);
export default userRouter;
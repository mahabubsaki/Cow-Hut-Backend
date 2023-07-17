import express from 'express';
import { deleteUserController, getAllUsersController, getSingleUserController, signUpController, updateUserController } from './user.controller';
import { validateObjectId, validateSignedUpUser } from './user.middleware';

const userRouter = express.Router();

userRouter.post('/auth/signup', validateSignedUpUser, signUpController);
userRouter.get('/', getAllUsersController);
userRouter.get('/:id', validateObjectId, getSingleUserController);
userRouter.patch('/:id', validateObjectId, updateUserController);
userRouter.delete('/:id', validateObjectId, deleteUserController);
export default userRouter;
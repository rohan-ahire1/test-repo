
import express from 'express';
const router = express.Router();
import  userController  from './userController.js';

router.route('/').get(userController.getUsers);

export { router as userRouter };
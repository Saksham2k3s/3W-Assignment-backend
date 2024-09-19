const express = require('express');
const { userRegister, userLogin, getUserInfo, addRandomPoints, getUserProfile, getAllUsers } = require('../controllers/userController');
const { isAuthenticatedUser } = require('../middleware/auth');


const userRouter = express.Router();

userRouter.route('/register').post(userRegister);
userRouter.route('/login').post(userLogin);
userRouter.route('/addscore').put(addRandomPoints);
userRouter.route('/profile').get(getUserProfile);
userRouter.route('/users').get(getAllUsers);
userRouter.route('/addscore/:id').put(addRandomPoints);
userRouter.route('/:id').get(getUserInfo);



module.exports = userRouter
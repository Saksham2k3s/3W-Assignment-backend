const UserModel  = require('../models/userModel');
const catchAsyncError = require('./asyncErrorHandler');
const jwt = require('jsonwebtoken')
exports.isAuthenticatedUser = catchAsyncError(async (req, res, next) => {
    const { token } = req.cookies;
    if(!token){
        return res.status(401).json({
            success: false,
            message: "Login first to access this resource"
        })
    }

    const decodedData = jwt.verify(token, process.env.JWT_SECERET);
    req.id = decodedData.id
    req.user = await UserModel.findById(decodedData.id);

    next()
});
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    username: {
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true,
    },
    avatar: {
       type: String,
    },
    gender: {
       type: String,
       required: true,
    },
    role: {
        type: String,
        default: "user"
    },
    points: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const User = mongoose.model('user', userSchema);

module.exports = User;
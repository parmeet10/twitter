const mongoose = require('mongoose')
const schema = mongoose.Schema;
const userSchema = schema({
    firstname: {
        type: String,
        required: true,
        trim: true
    },
    lastname: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        format: email
    },
    password: {
        type: String,
        required: true,
    },
    profilePic: {
        type: String,
        required: true,
        defalut: "/images/profilePic.png"
    }
})
const User = mongoose.model('user', userSchema);
module.exports = User;
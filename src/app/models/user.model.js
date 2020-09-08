const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'why no name ?']
    },
    email: {
        type: String,
        required: [true, 'why no email ?'],
        unique: true,
        lowercase: true,
        trim: true
    },
    password: { 
        type: String,
        required: [true, 'why no password ?']
    }
}, {
    versionKey: false,
    timestamps: true
});

const User = mongoose.model('user', userSchema);

module.exports = {
    User
}
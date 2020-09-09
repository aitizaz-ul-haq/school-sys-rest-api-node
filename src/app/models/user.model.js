
/*include mongoose to establish connection with dB  */
const mongoose = require('mongoose');


/* Create user Schema 
 */
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

/* create modal and provide schema to the modal 
 */
const User = mongoose.model('user', userSchema);

/* 
export model  */
module.exports = {
    User
}
const mongoose = require('mongoose');   // any time you want to connect to the database, this is all you need
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true, // require first name
        trim: true      // remove space on sides of strng
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        unique: true,   // username must be uniue
        trim: true      
    },
    email: {
        type: String,
        required: true,
        unique: true, 
        trim: true      
    },
    password: {
        type: String,
        required: true,
    },
    profilePic: {
        type: String,
        default: "/images/profilePic.png"   // a default pic when they sign up
    }
}, { timestamps: true });   // setting timestamps to true will automatically insert timestamp when user is created
/* i.e:  
createdAt:2021-11-09T06:56:27.929+00:00
updatedAt:2021-11-09T06:56:27.929+00:00     // updated at will update anytime a user changes their info
*/

// Model will be singular and uppercase.
// collection will be lowercase and in plural.
const User = mongoose.model('User', UserSchema);
module.exports = User;
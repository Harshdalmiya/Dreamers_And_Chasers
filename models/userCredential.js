const mongoose = require("mongoose");
//making a schema for user details
const userDetail = new mongoose.Schema({
    role: {
        type: String,
        required: [true, 'role is required'],
        enum: ['admin', 'hospital', 'organisation', 'donor']

    },
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'email is required']

    },
    userName: {
        type: String,
        required: function () {
            if (this.role === 'donor' || this.role === 'admin') {
                return true
            }
            return false


        }

    },
    organisationName: {
        type: String,
        required: function () {
            if (this.role === 'organisation') {
                return true
            }
            return false


        }

    },
    hospitalName: {
        type: String,
        required: function () {
            if (this.role === 'hospital') {
                return true
            }
            return false


        }

    },
    address: {
        type: String,
        required: [true, 'address is required']
    },
    phone: {
        type: String,
        required: [true, 'phone number  is required']

    },

}, { timestamps: true });
module.exports = mongoose.model('UserDetail', userDetail);
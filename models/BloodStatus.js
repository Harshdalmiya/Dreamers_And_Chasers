const mongoose = require("mongoose");

const bloodStatusSchema = new mongoose.Schema({
    bloodStatus: {
        type: String,
        required: [true, "None of the options are selected"],
        enum: ['in', 'out']
    },

    bloodGroupType: {
        type: String,
        required: [true, "Blood group is required"],
        enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']

    },
    bloodQuantity: {
        type: Number,
        required: [true, "No quantity given"],

    },
    email: {
        type: String,
        required: [true, "Donor Email is required"],

    },
    organisation: {
        type: String,
        ref: "users",
        required: [false, 'organisation required']


    },
    hospital: {
        type: mongoose.Schema.Types.ObjectId,
        required: function () {
            return this.bloodStatus === 'out'
        },
        ref: 'users'

    },
    donor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: function () {
            return this.bloodStatus === 'in'
        },


    }
}, { timestamp: true });
module.exports = mongoose.model('bloodStatus', bloodStatusSchema);
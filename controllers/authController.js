const userModel = require("../models/userCredential");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
//checking if user is present or not
const registerController = async (req, res) => {
    try {
        const user = await userModel.findOne({
            email: req.body.email,
        });
        if (user) {
            return res.status(200).send({
                success: false,
                message: "User already registered"

            });
        }
        const saltRound = 10;
        const salt = await bcrypt.genSalt(saltRound);
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        req.body.password = hashedPassword;
        const newuser = new userModel(req.body)
        await newuser.save();
        return res.status(201).send({
            success: true,
            message: "User Registered",
            newuser,

        });


    }
    catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Registration not done',
        });
    };
};

const loginController = async (req, res) => {
    try {
        const user = await userModel.findOne({
            email: req.body.email
        })
        if (!user) {
            res.status(404).send({
                success: false,
                message: "You are not registered",
            });
        }
        if (user.role !== req.body.role) {
            res.status(500).send({
                success: false,
                message: "role dosent match",
            });

        }
        const password = user.password;
        const comparepassword = await bcrypt.compare(req.body.password, user.password)
        if (!comparepassword) {
            res.status(500).send({
                success: false,
                message: "Invalid password",

            });
        }
        //for encrypting
        const token = jwt.sign({
            userId: user._id
        }, process.env.JWT_SECRET, { expiresIn: '1d' });
        return res.status(200).send({
            success: true,
            message: "Successfully logged in..",
            token,
            user,
        });




    }
    catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error logging"
        });
    }
};
const currentUserController = async (req, res) => {
    try {
        const currentuser = await userModel.findOne({
            _id: req.body.userId
        });

        return res.status(200).send({
            success: true,
            message: "Current User Found",
            currentuser,

        });

    }
    catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: "Current user not found"
        })
    }
}
module.exports = { registerController, loginController, currentUserController };
const userModel = require("../models/userCredential");
const bycrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
//checking if user is present or not
const registerController = async (req, res) => {
    try {
        let olduser = await userModel.findOne({
            email: req.body.email,
        })
        if (olduser) {
            return res.status(200).send({
                message: "User already registered",
                success: false,
            })
        }
        const saltRound = 10;
        const salt = await bycrypt.genSalt(saltRound);
        const hashedPassword = await bycrypt.hash(req.body.password, salt)
        req.body.password = hashedPassword;
        const newuser = new userModel(req.body)
        await newuser.save();
        return res.status(201).send({
            success: true,
            message: "User Registered"

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
        let olduser = await userModel.findOne({
            email: req.body.email
        })
        if (!olduser) {
            res.status(404).send({
                success: false,
                message: "You are not registered",
            })
        }
        let password = olduser.password;
        let comparepassword = await bycrypt.compare(req.body.password, password)
        if (comparepassword) {
            //for encrypting
            let token = jwt.sign({
                userId: olduser._id
            }, process.env.JWT_SECRET, { expiresIn: '1d' })
            return res.status(200).send({
                success: true,
                message: "Successfully logged in..",
                token,
                olduser,
            });
        }
        else {
            res.status(500).send({
                success: false,
                message: "Invalid password",

            })
        }


    }
    catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error logging"
        })
    }
}
module.exports = { registerController, loginController };
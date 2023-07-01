const bloodModel = require("../models/BloodStatus");
const userModel = require("../models/userCredential");

//blood donation and status
const bloodController = async (req, res) => {
    try {
        let olduser = await userModel.findOne({
            email: req.body.email,
        })
        if (!olduser) {
            return res.status(500).send({
                success: false,
                message: 'User not found.Please Register! ',
            });
        }
        if (bloodModel.bloodStatus === 'in' && olduser.role !== 'donor') {
            return res.status(500).send({
                success: false,
                message: 'Not a donor account',
            });



        }
        if (bloodModel.bloodStatus === 'out' && olduser.role !== 'hospital') {
            return res.status(500).send({
                success: false,
                message: 'Not a hospital',
            });



        }
        const blood = new bloodModel(req.body)
        await blood.save();
        return res.status(201).send({
            success: true,
            message: 'Blood record saved',
        });




    }
    catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error in getting blood status',
        });

    }
};
// get all blood records
const bloodHistoryController = async (req, res) => {
    try {
        const organization_id = await bloodModel.find({ organization: req.body.userId })
        return res.status(200).send({
            success: true,
            message: 'BloodStatus is created',
            organization_id

        });
    }
    catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error in getting blood history',
        });


    }
}
module.exports = { bloodController, bloodHistoryController };
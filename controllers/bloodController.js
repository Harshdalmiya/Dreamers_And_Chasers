const bloodModel = require("../models/BloodStatus");
const userModel = require("../models/userCredential");
const mongoose = require("mongoose");

//blood donation and status
const bloodController = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await userModel.findOne({ email });


        if (!user) {
            return res.status(500).send({
                success: false,
                message: 'User not found.Please Register! ',
            });
        }
        if (req.body.bloodStatus == "out") {
            const requestedBloodGroup = req.body.bloodGroupType;
            const requestedQuantityOfBlood = req.body.bloodQuantity;
            const organisation = new mongoose.Types.ObjectId(req.body.userId);
            //calculate Blood Quanitity
            const totalInOfRequestedBlood = await bloodModel.aggregate([
                {
                    $match: {
                        organisation,
                        bloodStatus: "in",
                        bloodGroupType: requestedBloodGroup,
                    },
                },
                {
                    $group: {
                        _id: "$bloodGroupType",
                        total: { $sum: "$bloodQuantity" },
                    },
                },
            ]);
            console.log("Total In", totalInOfRequestedBlood);
            const totalIn = totalInOfRequestedBlood[0]?.total || 0;
            //calculate OUT Blood Quanitity

            const totalOutOfRequestedBloodGroup = await bloodModel.aggregate([
                {
                    $match: {
                        organisation,
                        bloodStatus: "out",
                        bloodGroupType: requestedBloodGroup,
                    },
                },
                {
                    $group: {
                        _id: "$bloodGroupType",
                        total: { $sum: "$bloodQuantity" },
                    },
                },
            ]);
            const totalOut = totalOutOfRequestedBloodGroup[0]?.total || 0;

            //in & Out Calc
            const availableQuanityOfBloodGroup = totalIn - totalOut;
            //quantity validation
            if (availableQuanityOfBloodGroup < requestedQuantityOfBlood) {
                return res.status(500).send({
                    success: false,
                    message: `Only ${availableQuanityOfBloodGroup}ML of ${requestedBloodGroup.toUpperCase()} is available`,
                });
            }
            req.body.hospital = user?._id;
        } else {
            req.body.donor = user?._id;
        }



        //save record
        const blood = new bloodModel(req.body);
        await blood.save();
        return res.status(201).send({
            success: true,
            message: "New Blood Reocrd Added",
            blood,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Errror In Create Blood Record",
            error,
        });
    }
};

// GET ALL BLOOD RECORS
const bloodHistoryController = async (req, res) => {
    try {
        const inventory = await bloodModel.find({
            organisation: req.body.organisationName,

        })


            .populate("donor")
            .populate("hospital")
            .sort({ createdAt: -1 });
        console.log("inventory", inventory);
        return res.status(200).send({
            success: true,
            message: "get all records successfully",
            inventory,
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Error In Getting blood record",
            error,
        });
    }
};

//Get donor records
const getDonorsController = async (req, res) => {
    try {
        const organisation = req.body.userId;
        console.log(organisation)
        const donorId = await bloodModel.distinct('donor', { organisation });


        console.log(donorId);
        const donors = await userModel.find({ _id: { $in: donorId } })
        return res.status(200).send({
            success: true,
            message: "Donor record fetched successfully",
            donors,
        })

    }
    catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: "Error In donor record",
            error,
        })
    }
};

module.exports = { bloodController, bloodHistoryController, getDonorsController };
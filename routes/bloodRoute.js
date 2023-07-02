const express = require("express");
const { bloodController, bloodHistoryController, getDonorsController } = require("../controllers/bloodController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/bloodStatus", authMiddleware, bloodController);
router.get('/bloodHistory', authMiddleware, bloodHistoryController)
router.get('/donor-record', authMiddleware, getDonorsController)
module.exports = router;
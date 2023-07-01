const express = require("express");
const { bloodController, bloodHistoryController } = require("../controllers/bloodController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/bloodStatus", authMiddleware, bloodController);
router.get('/bloodHistory', authMiddleware, bloodHistoryController)
module.exports = router;
const express = require('express');
const { registerController, loginController } = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

//register
router.post('/register', registerController);
//login 
router.post('/login', loginController);

//current user
// router.get('/current-user', authMiddleware, currentUserController);

module.exports = router
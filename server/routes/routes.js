const express = require('express');
const { signup, login, logout } = require('../controllers/AuthController');
const { getUser, authUser } = require('../controllers/UserController');
const { verifyToken } = require('../middlewares/VerifyToken');
const { refreshToken } = require('../middlewares/RefreshToken');
const { checkUser } = require('../middlewares/CheckUser');
const router = express.Router();

// authentication routes
router.post("/signup",signup);
router.post("/login",login);
router.get("logout",logout);

//user routes
router.get("/getUser", getUser);
router.get("/authUser", verifyToken, authUser);
router.get("/refresh", refreshToken,verifyToken,authUser);
router.get("/checkUser", checkUser );



module.exports = router;
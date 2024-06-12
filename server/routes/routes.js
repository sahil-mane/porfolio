const express = require('express');
const { signup, login, logout } = require('../controllers/AuthController');
const { getUser, authUser } = require('../controllers/UserController');
const { verifyToken } = require('../middlewares/VerifyToken');
const { refreshToken } = require('../middlewares/RefreshToken');
const { checkUser } = require('../middlewares/CheckUser');
const { getSkills, addSkill, removeSkill } = require('../controllers/SkillController');
const { getProjects, addProject, removeProject, updateProject } = require('../controllers/ProjectController');
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

// Skill routes
router.get("/getSkills",getSkills);
router.post("/addSkill",addSkill);
router.delete("/removeSkill/:id",removeSkill);

// Project routes
router.get("/getProjects",getProjects);
router.post("/addProject",addProject);
router.delete("/removeProject/:id",removeProject);
// router.get("/updateProject/:id",updateProject);
router.put("/updateProject/:id",updateProject);

//1:53:47 hrs:min:sec
module.exports = router;
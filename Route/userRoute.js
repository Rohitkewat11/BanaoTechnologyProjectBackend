
const express = require('express');
const router = express.Router();


const {getUser,addUser,userLogin,F_password} = require('../controller/userController');


router.route("/user").get(getUser);
router.route("/addUser").post(addUser);
router.route("/userLogin").post(userLogin);
router.route("/F_password").post(F_password);


module.exports = router;
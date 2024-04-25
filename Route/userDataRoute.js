const router = require("express").Router();

const {
  getU_data,
  addComment,
  removeComment,
  findComment,
  updateComment,
  updateLike,
} = require("../controller/userDataController");

router.route("/data").get(getU_data);
router.route("/addComment").post(addComment);
router.route("/removeComment").post(removeComment);
router.route("/findComment").post(findComment);
router.route("/updateComment").post(updateComment);
router.route("/updateLike").post(updateLike);

module.exports = router;

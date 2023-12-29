const router = require("express").Router();
const userControl = require("../controllers/userControl");

//Register user
router.post('/register',userControl.registerUser);

//Login user
router.post('/login',userControl.loginUser);

//token verification
router.get('/verify',userControl.verifiedToken)

module.exports = router;
const express = require("express");
const { singup, singin, signout } = require("../controller/user");
const router = express.Router();

// signup
// email password
// password - hash

router.post("/singup", singup);

router.post('/singin', singin);

router.get('/signout', signout);

module.exports = router;
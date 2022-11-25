const express = require("express");
const { singup } = require("../controller/user");
const router = express.Router();

// signup
// email password
// password - hash

router.get("/singup", singup);
//signin

// singout

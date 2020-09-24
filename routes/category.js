const express = require("express");
const router = express.Router();
const { userById } = require("../controllers/user");

const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const { create } = require("../controllers/category");

router.post("/category/create/:userId", requireSignin, isAdmin, isAuth, create);

router.param("userId", userById);

module.exports = router;
const express = require("express");
const router = express.Router();
const userController = require("../apps/controllers/UserController");

router.get("/", userController.getUser);

module.exports = router;

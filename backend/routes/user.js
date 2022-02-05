const express = require("express");
const route = express.Router();

const userController = require("../controller/user");

route.post("/login", userController.login);
route.post("/sign-up", userController.signUp);

const express = require("express");
const routes = express.Router();
const questionController = require("../controller/questions.js");

// routes.get('',)
routes.post("/question", questionController.saveQuestions);
routes.get("/question", questionController.getAnswers);

module.exports = routes;

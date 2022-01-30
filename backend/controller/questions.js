//functions that are going to be called by the router.
const userModel = require("../models/databaseuser");
const questionModel = require("../models/databasequestion");
const axios = require("axios").default;

const saveQuestions = async (req, res) => {
  const questionData = req.body;

  //  let question = new questionModel(questionData); // for every question answered,create a new instance of question
  try {
    const pyScriptRes = await axios.post(
      "http://127.0.0.1:5000/api/process",
      questionData
    );
    // question.personalityType = pyScriptRes.data['TM_type']
    // await question.save()
    res.json({
      message: "This is the result of post",
      pyScriptRes: pyScriptRes.data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
const getAnswers = (req, res) => {
  res.send("This is your answer");
};

module.exports = {
  saveQuestions,
  getAnswers,
};

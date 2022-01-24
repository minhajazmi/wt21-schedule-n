//functions that are going to be called by the router.
const userModel = require("../models/databaseuser");
const questionModel = require("../models/databasequestion");
const { spawn } = require("child_process");

const saveQuestions = (req, res) => {
  const questionData = req.body;
  console.log(questionData);

  const question = new questionModel(questionData); // for every question answered,create a new instance of question
  question.save().then((data) => {
    const python = spawn("python", [
      "get_TM_type.py",
      JSON.stringify([questionData]),
    ]); //call the python script
    let dataToSend;
    //collect dat from the script
    python.stdout.on("data", function (data) {
      console.log("Tmtype from the python script");
      dataToSend = data.toString();
    });
    //in close event we are sure that stream from child process is closed
    python.on("close", (code) => {
      console.log(`child process close all stdio with code ${code}`);
      res.json({
        message: "This is the result of post",
        data,
        dataToSend,
      });
    });
  });
};
const getAnswers = (req, res) => {
  res.send("This is your answer");
};

module.exports = {
  saveQuestions,
  getAnswers,
};

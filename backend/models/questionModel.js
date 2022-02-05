const mongoose = require("mongoose");
const questionSchema = new mongoose.Schema({
  enjoy: {
    type: String,
  },
  choice: {
    type: String,
  },
  thrilled: {
    type: String,
  },
  distraction: {
    type: String,
  },
  highStandard: {
    type: String,
  },
  switchTask: {
    type: String,
  },
  focus: {
    type: String,
  },
  concentrate: {
    type: String,
  },
  approval: {
    type: String,
  },
  plan: {
    type: String,
  },
  ideas: {
    type: String,
  },
  procrastinate: {
    type: String,
  },
  hard: {
    type: String,
  },
  spontaneous: {
    type: String,
  },
  finishing: {
    type: String,
  },
  period: {
    type: String,
  },
  priority: {
    type: String,
  },
  gratification: {
    type: String,
  },
  settled: {
    type: String,
  },
  appointment: {
    type: String,
  },
  productive: {
    type: String,
  },
  decision: {
    type: String,
  },
  biggerPicture: {
    type: String,
  },
  deadline: {
    type: String,
  },
  openQuestion1: {
    type: String,
  },
  openQuestion2: {
    type: String,
  },
  openQuestion3: {
    type: String,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    autopopulate: true,
  },
  personalityType: String,
});

const Question = mongoose.model("Question", questionSchema);
module.exports = Question;

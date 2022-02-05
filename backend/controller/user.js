const userModel = require("../models/userModel");
const { use } = require("../routes/questions");
const login = async (req, res) => {
  const loginData = req.body;
  try {
    const userData = await userModel.findOne({
      email: loginData.email,
      dob: loginData.dob,
    });
    res.json({ userData });
  } catch (error) {
    res.statusCode(404).send(error);
  }
};

const signUp = (req, res) => {
  const signUpData = req.body;
  const userData = new userModel(signUpData);
  userData.save();
  res.sender();
};
module.exports = {
  login,
  signUp,
};

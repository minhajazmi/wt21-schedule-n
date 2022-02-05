const userModel = require("../models/userModel");
const { use } = require("../routes/questions");
const login = async (req, res) => {
  const loginData = req.body;
  try {
    const userData = await userModel.findOne({
      email: loginData.email,
      dob: loginData.dob,
    });
    if (!userData) {
      return res.status(404).send({ message: "user not found" });
    }
    res.json({ userData });
  } catch (error) {
    res.status(404).send(error);
  }
};

const signUp = async (req, res) => {
  const signUpData = req.body;
  const userData = new userModel(signUpData);
  const newUserData = await userData.save();
  res.json(newUserData);
};
module.exports = {
  login,
  signUp,
};

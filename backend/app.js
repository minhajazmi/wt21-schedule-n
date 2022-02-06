const express = require("express");
const bodyParser = require("body-parser");
const questionRoutes = require("./routes/questions");
const userRoute = require("./routes/user");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use("/api", questionRoutes, userRoute);
// app.use("/api", userRoute);

//console.dir(app);

app.listen(4000, () => {
  console.log("Application start on port 4000");
});

const connectionStr = process.env.MONGODB_CONNECTION_STRING
  ? process.env.MONGODB_CONNECTION_STRING
  : "mongodb://127.0.0.1:27017/scheduleNApp";

console.log("Connection string ´---->", connectionStr);
mongoose
  .connect(connectionStr, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(() => {
    console.log("connection open!");
  })
  .catch((err) => {
    console.log("oh no,error!");
    console.log(err);
  });

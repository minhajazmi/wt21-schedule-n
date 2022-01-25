const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/questions");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use("/api", routes);

//console.dir(app);

app.listen(5000, () => {
  console.log("Application start on port 5000");
});

 mongoose
  .connect("mongodb://127.0.0.1/scheduleNApp", {
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

  app.post("/questions", (req, res) => {
    console.log("Testing the response", req.body);
    res.send("Hopper");
  });



  
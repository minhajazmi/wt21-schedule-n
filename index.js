const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//console.dir(app);

app.post("/cats", (req, res) => {
  console.log("Testing the response", req.body);
  res.send("Your form has been sucessfully submited");
});

app.listen(5000, () => {
  console.log("Application start on port 5000");
});

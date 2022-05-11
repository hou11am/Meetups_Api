const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

app.use(cors());
app.use(express.json());

//connect to mongoose
mongoose
  .connect(process.env.DB_CONNECTION)
  .then(() => console.log("MongoDB is connected..."))
  .catch((err) => console.log(err));

//require route
app.use("/", require("./routes/meetupRoute"));

app.listen(5001, function () {
  console.log("the server is open in localhost : 5001");
});

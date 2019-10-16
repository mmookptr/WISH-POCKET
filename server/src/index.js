// use for booting up the server
"use strict";
require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// line between pat file and library file
const routes = require("./routes");
const cors = require("./cors");
//databse stuff
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/wishpocket-server", {
  useNewUrlParser: true
});
mongoose.set("useFindAndModify", false);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

cors(app)
routes(app)

app.listen(port);
console.log("WI$H POCKET server is running at port " + port);

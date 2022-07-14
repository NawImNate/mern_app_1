// store express into a variable
const express = require("express");
// store express into a variable named app
const app = express();
// store cors into a variable
const cors = require("cors");
// require .env and state location
require("dotenv").config({ path: "./config.env" });
// specify a port
const port = process.env.PORT || 5000;
// telling app what to use
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
// get driver connection
const dbo = require("./db/conn");

app.listen(port, () => {
  // perform a db conncetion when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Server running port: ${port}`);
});



//Add dependencies to the project
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

//include dbconfig files and enviroment 
require("dotenv").config();
require('./src/config/db.config');

// import routes
require('./src/app/routes/user.route')(app);


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
// add cors to server.js
app.use(cors());


const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`app is live on ${port}`);
});



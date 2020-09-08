

//Add dependencies
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

//include dbconfig files
require("dotenv").config();
require('./src/config/db.config');



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(cors());


const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`app is live on ${port}`);
});


// import routes
require('./src/app/routes/user.route')(app);
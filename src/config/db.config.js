/*include mongoose  and configure it
*/
const mongoose = require("mongoose");

/* provide db url in enviroment */
const uri = process.env.DB_URL;

/* 
create mongoose options */
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
 
/* 
create connection with mongo db using mongoose 
 */
mongoose
  .connect(uri, options)
  .then(() => {
      console.log('db connection succeed')
  })
  .catch((err) => {
      console.log(err);
  });

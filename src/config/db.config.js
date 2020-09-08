const mongoose = require("mongoose");

const uri = process.env.DB_URL;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose
  .connect(uri, options)
  .then(() => {
      console.log('db connection succeed')
  })
  .catch((err) => {
      console.log(err);
  });

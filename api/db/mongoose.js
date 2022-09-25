const mongoose = require('mongoose');
require('dotenv').config();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_ATLAS, { useNewUrlParser: true }).then(() => {
  console.log("connected to MongoDB");
}).catch((e) => {
  console.log("Error while attempting to connect to MongoDB");
  console.log(e);
});

module.exports = {
  mongoose
};

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://micahbessolo:1Cdattcwsm.@contactfeed.s3sczr4.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true }).then(() => {
  console.log("connected to MongoDB");
}).catch((e) => {
  console.log("Error while attempting to connect to MongoDB");
  console.log(e);
});

module.exports = {
  mongoose
};

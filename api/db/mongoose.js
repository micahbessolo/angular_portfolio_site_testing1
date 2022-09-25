const mongoose = require('mongoose');



mongoose.Promise = global.Promise;
// accessed through IP address 0.0.0.0/0 meaning accessed from any IP address via MongoDB Atlas
mongoose.connect('mongodb+srv://micahbessolo:1Cdattcwsm.@contactfeed.s3sczr4.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true }).then(() => {
  console.log("connected to MongoDB");
}).catch((e) => {
  console.log("Error while attempting to connect to MongoDB");
  console.log(e);
});

module.exports = {
  mongoose
};

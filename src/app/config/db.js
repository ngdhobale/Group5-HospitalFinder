const mongose = require('mongoose');
mongose.connect('mongodb://localhost:27017/hs',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
db = mongose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});
module.exports = db;
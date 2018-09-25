const mongoose = require("mongoose");
const dbConfig = require("./config");
mongoose.Promise = global.Promise;
 mongoose.connect(dbConfig.url,{ useMongoClient: true });

module.exports = mongoose; 
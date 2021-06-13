const mongose =  require("mongoose")
mongose.set('useNewUrlParser', true);
mongose.set('useFindAndModify', false);
mongose.set('useCreateIndex', true);
mongose.connect("mongodb://localhost/MongoApi",{ useNewUrlParser: true , useUnifiedTopology: true })
mongose.Promise = global.Promise;

module.exports = mongose;
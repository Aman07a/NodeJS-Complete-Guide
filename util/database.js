const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

MongoClient.connect('')
  .then((result) => {
    console.log('Connected');
    callback(result);
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = MongoClient;

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  MongoClient.connect(
    'mongodb+srv://aman16aa17:mongodb-nodejs@cluster0.ogqbk9c.mongodb.net/?retryWrites=true&w=majority'
  )
    .then((client) => {
      console.log('Connected to MongoDB');
      callback(client); // Pass the client object to the callback
    })
    .catch((err) => {
      console.error('Error connecting to MongoDB:', err);
    });
};

module.exports = mongoConnect;

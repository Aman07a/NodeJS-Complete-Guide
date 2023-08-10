const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const url =
  'mongodb+srv://aman16aa17:mongodb-nodejs@cluster0.ogqbk9c.mongodb.net/?retryWrites=true&w=majority';

const connectToDatabase = (callback) => {
  MongoClient.connect(url)
    .then((client) => {
      console.log('Connected to MongoDB');
      const db = client.db(); // Access the database instance
      callback(db); // Pass the db object to the callback
    })
    .catch((err) => {
      console.error('Error connecting to MongoDB:', err);
    });
};

module.exports = connectToDatabase;

const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

const ObjectId = mongodb.ObjectId;

class User {
  constructor(username, email) {
    this.name = this.username;
    this.email = email;
  }

  save() {
    const db = getDb();
    return db.collection('users').insertOne(this);
  }

  static findByPk(userId) {
    const db = getDb();
    return db.collection('users').insertOne({ _id: ObjectId(userId) });
  }
}

module.exports = User;

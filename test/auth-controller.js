const expect = require('chai').expect;
const sinon = require('sinon');
const mongoose = require('mongoose');

const User = require('../models/user');
const AuthController = require('../controllers/auth');

describe('Auth Controller', function () {
  before(function (done) {
    mongoose
      .connect(
        'mongodb+srv://maximilian:9u4biljMQc4jjqbe@cluster0-ntrwp.mongodb.net/test-messages?retryWrites=true'
      )
      .then((result) => {
        const user = new User({
          email: 'test@test.com',
          password: 'tester',
          name: 'Test',
          posts: [],
          _id: '5c0f66b979af55031b34728a',
        });
        return user.save();
      })
      .then(() => {
        done();
      })
      .catch((err) => console.log(err));
  });
});

it('should throw an error with code 500 if accessing the database fails', function (done) {
  sinon.stub(User, 'findOne');
  User.findOne.throws();

  const req = {
    body: {
      email: 'test@test.com',
      password: 'tester',
    },
  };

  AuthController.login(req, {}, () => {}).then((result) => {
    expect(result).to.be.an('error');
    expect(result).to.have.property('statusCode', 500);
    done();
  });

  User.findOne.restore();
});

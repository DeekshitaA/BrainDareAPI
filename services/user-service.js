/**
 * User service
 */
/**
 * Load module dependencies
 */
var userModel = require('../models/user-model.js');

/**
 * Sign up a new user
 * @param user
 * @param callback
 * @param errback
 */
exports.signup = function (user, callback, errback) {
  userModel.create(user, function(err, user) {
    if (err) {
      errback(err);
      return;
    }

    callback(user);
  });
};

exports.list = function (callback, errback) {
  userModel.find(function(err, users) {
    if (err) {
      errback(err);
      return;
    }

    callback(users);
  });
};

/**
 * User router
 */
/**
 * Load module dependencies
 */
var express = require('express');
var userService = require('../services/user-service.js');
// Create Express router
var router = express.Router();
router.get('/', function (req, res) {
  userService.list(function(items) {
    res.json(items);
  }, function(err) {
    res.status(400).json(err);
  });
});
/**
 * Sign up a new user
 */
router.post('/signup', function (req, res) {
  userService.signup(req.body, function(user) {

    res.status(201).json(user);
  }, function(err) {
    res.status(400).json(err);
  });
});
// Export router to be re-used
module.exports = router;

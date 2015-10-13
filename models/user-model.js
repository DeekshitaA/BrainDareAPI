/**
 * User model
 */
/**
 * Load module dependencies
 */
var mongoose = require('mongoose');
// Define user mongoose schema
var userSchema = new mongoose.Schema({
  name: {type: String, required:true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  age: {type: Number, required: true},
  gender: {type: String, required: true}
});
// Define user mongoose model
var user = mongoose.model('user', userSchema);
// Export user model to be re-used
module.exports = user;

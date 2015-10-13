/**
 * Server starting up file
 */
/**
 * Load module dependencies
 */
var express = require('express');
var bodyParser = require('body-parser');
var settings = require('./config/settings.js');
var userRouter = require('./routes/user-route.js');
/**
 * Create our Express application
 */
var app = express();
/**
 * Connect to MongDB database
 */
require('./db/connect.js');
/**
 * Middlewares
 */
// Parse application/json
app.use(bodyParser.json());
/**
 * Map routes with routers
 */
app.use('/user', userRouter);

//app.use('/test', test);
/**
 * Make our application listen on a given port
 */
app.listen(settings.port, function(){
    console.log('Application listening on http://localhost:' + settings.port);
});
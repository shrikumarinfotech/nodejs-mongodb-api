/**
 * Name: Nodejs Mongodb API
 * Version: 1.0.0
 * Description: MEAN Stack API with CRUD operations
 * Author: Shrikumar Infotech
 * Author URL: shrikumarinfotech.com
 * Date: 29 October 2020
 * Plugin URL: https://github.com/shrikumarinfotech/nodejs-mongodb-api
 * License: GPLv2 or later
 * License URL: http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 */

// Express
const express = require('express');
const app = express();

// Mongoose
const mongoose = require('mongoose');

// Controllers
const setupController = require('./controllers/setupController'); // Run only one time
const apiControllers = require('./controllers/apiControllers');

// Define port
const port = process.env.PORT || 3000;

// Set static files path
app.use('/assets', express.static(__dirname + '/public'));

// Load template engine and define
app.set('view engine', 'ejs');

// Connect MongoDB
const config = require('./config');
mongoose.connect(config.todoDbUrlToConnect(), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

// Initiate the controllers
// setupController(app); // Run only one time
apiControllers(app);

// Respond to GET request
app.get('/', function(req, res){
    // res.send('Hello world');
    res.render('index');
});

// Respond to the POST request
app.post('/api', function(req, res){
    res.send('Got a POST request');
});

// Respond to the PUT request
app.put('/api/user', function(req, res){
    res.send('Got a PUT request at /api/user');
});

// Respond to a DELETE request
app.delete('/api/user', function(req, res){
    res.send('Got a DELETE request at /api/user');
});

// Listen to port
app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
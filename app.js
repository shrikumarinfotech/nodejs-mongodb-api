// Express
const express = require('express');
const app = express();

// Mongoose
const mongoose = require('mongoose');

// Controllers
const setupController = require('./controllers/setupController');
const apiControllers = require('./controllers/apiControllers');

// Define port
const port = process.env.PORT || 3000;

// Set static files path
app.use('/assets', express.static(__dirname + '/public'));

// Connect MongoDB
const config = require('./config');
mongoose.connect(config.todoDbUrlToConnect(), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

// Initiate the controllers
// setupController(app);
apiControllers(app);

// Respond to GET request
app.get('/', function(req, res){
    res.send('Hello world');
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
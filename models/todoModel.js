const mongoose = require('mongoose');

/**
 * Mongoose setup
 */
// Create a new Schema
const Schema = mongoose.Schema;
// Define the data/Schema structure
const todoSchema = new Schema({
    username: String,
    todo: String,
    isDone: Boolean,
    hasAttachment: Boolean
});

// Define a Model with defined data/Schema structure
const Todos = mongoose.model('Todos', todoSchema);

// Export the model to make it available to other resources of the API
module.exports = Todos;

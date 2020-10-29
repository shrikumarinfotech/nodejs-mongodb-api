const Todos = require('../models/todoModel');

module.exports = function(app){
    // define starter database
    const starterTodos = [
        {
            username: "test",
            todo: "Task 1",
            isDone: false,
            hasAttachment: false
        },
        {
            username: "test",
            todo: "Task 2",
            isDone: false,
            hasAttachment: false
        },
        {
            username: "test",
            todo: "Task 3",
            isDone: true,
            hasAttachment: false
        }
    ];

    Todos.create(starterTodos, function(err, results){
        if(err) throw err;
        console.log(results);
    });
}
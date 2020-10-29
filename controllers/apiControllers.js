// body-parser
const bodyParser = require('body-parser');
const Todos = require('../models/todoModel');

// Export the function
module.exports = function(app){

    // Use body-parser
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    // Use GET method/verb to retreive user data from database
    app.get('/api/todos/:username', function(req, res){
        Todos.find({
            username: req.params.username
        }, function(err, todos){
            if(err) throw err;
            res.send(todos);
        });
    });

    // Use GET method/verb to retreive single todo item by its id
    app.get('/api/todo/:id', function(req, res){
        Todos.findById({
            _id: req.params.id
        }, function(err, todo){
            if(err) throw err;
            res.send(todo);
        });
    });

    // Use POST method/verb to add/update data
    app.post('/api/todo', function(req, res){
        // Update data
        if(req.body.id){
            Todos.findByIdAndUpdate(req.body.id, {
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            }, function(err, todo){
                if(err) throw err;
                res.send(todo);
            });
        }
        else{
            // Add data
            const newTodo = Todos({
                username: 'test',
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            });
            // Save data
            newTodo.save(function(err){
                if(err) throw err;
                res.send('Success');
            });
        }
    });

    // Use DELETE method/verb
    app.delete('/api/todo', function(req, res){
        Todos.findByIdAndRemove(req.body.id, function(err){
            if(err) throw err;
            res.send('Success');
        });
    });
}
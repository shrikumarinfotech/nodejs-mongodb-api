// AngularJS
angular.module('TodoApp', []);

angular.module('TodoApp').controller('MainController', ctrlFunc);

function ctrlFunc(){
    this.message = 'Hello';

    this.todos = [
        {
            todo: "Task 1",
            isDone: false
        },
        {
            todo: "Task 2",
            isDone: true
        },
        {
            todo: "Task 3",
            isDone: false
        }
    ];
}
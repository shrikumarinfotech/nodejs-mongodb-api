// AngularJS
angular.module('TodoApp', []);

angular.module('TodoApp').controller('MainController', ctrlFunc);

function ctrlFunc(){
    this.message = 'Hello';

    this.todos = [
        {
            todo: "Task 1"
        },
        {
            todo: "Task 2"
        },
        {
            todo: "Task 3"
        }
    ];
}
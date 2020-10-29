const todoConfig = require('./config');

module.exports = {
    todoDbUrlToConnect: function(){
        return `mongodb+srv://nodeapp1:${todoConfig.pass}@cluster0.ayprn.mongodb.net/${todoConfig.dbname}?retryWrites=true&w=majority`;
    }
}
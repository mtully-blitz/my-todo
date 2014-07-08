define(function(require, exports, module) {

var backbone = require('backbone');
var localstorage = require('backbone/localstorage');

var Todo = require('app/todo/models/todo').Todo;

var TodoList = backbone.Collection.extend({
    model: Todo,
    localStorage: new localstorage("todo-list")
});

exports.TodoList = TodoList;

});

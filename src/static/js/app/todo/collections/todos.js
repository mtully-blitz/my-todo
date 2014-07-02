define(function(require, exports, module) {

var backbone = require('backbone');

var Todo = require('app/todo/models/todo').Todo;

var TodoList = backbone.Collection.extend({
    model: Todo,
});

exports.TodoList = TodoList;

});

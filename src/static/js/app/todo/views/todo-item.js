define(function(require, exports, module) {

var marionette = require('marionette');

var todoItemTemplate = require('hbs!app/todo/templates/todo-view');

var TodoItemView = marionette.ItemView.extend({
    template: todoItemTemplate,
});

exports.TodoItemView = TodoItemView;
});

define(function(require, exports, module) {

var marionette = require('marionette');

var todoItemView = require('app/todo/views/todo-item').TodoItemView;

var TodoCollectionView = marionette.CollectionView.extend({
    itemView: todoItemView,
    tagName: 'ul',
});

exports.TodoCollectionView = TodoCollectionView;
});

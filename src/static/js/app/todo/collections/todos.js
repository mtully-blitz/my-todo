define(function(require, exports, module) {

var backbone = require('backbone');
var localstorage = require('backbone/localstorage');

var Todo = require('app/todo/models/todo').Todo;

var Todos = backbone.Collection.extend({
    model: Todo,
    localStorage: new localstorage("todo-list"),

    getCompleted: function(){
        return this.filter(this._isComplete);
    },

    getActive: function(){
        return this.filter(this._isActive);
    },

    _isComplete: function(item){
        return item.get('completed');
    },

    _isActive: function(item){
        return !item.get('completed');
    }

});

exports.Todos = Todos;

});

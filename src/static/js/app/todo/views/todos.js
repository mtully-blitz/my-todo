define(function(require, exports, module) {

var marionette = require('marionette');

var todoTemplate = require('hbs!app/todo/templates/todo-collection-view');
var todoItemView = require('app/todo/views/todo-item').TodoItemView;


var TodoCollectionView = marionette.CompositeView.extend({
    template: todoTemplate,
    itemView: todoItemView,
    itemViewContainer: '#todo-list',

    ui: {
        input: '#new-todo-item',
        button: '#add-todo',
        filter: '.filters span'
    },

    events:{
        'keypress @ui.input': 'onSubmit',
        'click @ui.button': 'onSubmit',
        'click @ui.filter': 'filterItems'
    },

    // Required Method
    // Enables you to pass any information from this
    // modal view to the thing that cares about it.
    //
    // This is your bridge.
    /*getData: function(){
        return {foo: 'foo', bar: 'bar'};
    },*/

    onSubmit: function (e) {
        var text = this.ui.input.val().trim();
        if ((e.which === 13 || e.type == 'click') && text) {
            this.collection.create({
                title: text
            });
            this.ui.input.val('');
        }
    },

    filterItems: function(e){

        var filter = e.currentTarget.attributes['class'].value;
        var items;
        if(filter == 'completed'){
            items = this.collection.getCompleted();
        }else if(filter == 'active'){
            items = this.collection.getActive();
        }else{
            // get all
            items = this.collection.fetch();
        }
    }

});

exports.TodoCollectionView = TodoCollectionView;
});

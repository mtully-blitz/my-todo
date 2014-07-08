define(function(require, exports, module) {

var marionette = require('marionette');

var todoItemTemplate = require('hbs!app/todo/templates/todo-view');

var TodoItemView = marionette.ItemView.extend({
    template: todoItemTemplate,
    tagName: 'li',

    ui: {
        button: '.update'
    },

    events:{
        'click @ui.button': 'updateStatus',
    },

    onRender: function () {
        if (this.model.get('completed')) {
            this.$el.attr('class', 'completed');
        } else {
            this.$el.attr('class', 'active');
        }
    },

    serializeData: function() {
        var data = this.model.toJSON();
        if(data['completed']){
            data['isChecked'] = 'checked';
        }
        return data;
    },

    updateStatus: function (e) {
        var checkbox = e.currentTarget;

        this.model.set('completed', checkbox.checked).save();
        if(checkbox.checked){
            this.$el.attr('class', 'completed');
        }else{
            this.$el.attr('class', 'active');
        }
    }

});

exports.TodoItemView = TodoItemView;
});

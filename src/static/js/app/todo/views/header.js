define(function(require, exports, module) {

var marionette = require('marionette');

var headerTemplate = require('hbs!app/todo/templates/header-view');

var HeaderView = marionette.ItemView.extend({
    template: headerTemplate,

    ui: {
        input: '#new-todo-item',
        button: '#add-todo'
    },

    events:{
        'keypress @ui.input': 'onSubmit',
        'click @ui.button': 'onSubmit'
    },

    initialize: function(options){
        this.collection = options.collection;
    },

    onSubmit: function (e) {
        var text = this.ui.input.val().trim();
        if ((e.which === 13 || e.type == 'click') && text) {
            this.collection.create({
                title: text
            });
            this.ui.input.val('');
        }
    }

});

exports.HeaderView = HeaderView;
});

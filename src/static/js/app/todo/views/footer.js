define(function(require, exports, module) {

var marionette = require('marionette');

var footerTemplate = require('hbs!app/todo/templates/footer-view');

var FooterView = marionette.ItemView.extend({
    template: footerTemplate,

    ui: {
        completed: '.filters span.completed',
        active: '.filters span.active',
        all: '.filters span.all'
    },

    events:{
        'click @ui.completed': 'filterCompletedItems',
        'click @ui.active': 'filterActiveItems',
        'click @ui.all': 'showAll'
    },

    initialize: function(options){
        this.collection = options.collection;
        this.app = options.app;
    },

    showAll: function(e){
        this.trigger('todos:all');
    },

    filterActiveItems: function(e){
        this.trigger('todos:active');
    },

    filterCompletedItems: function(e){
        this.trigger('todos:completed');
    },

});

exports.FooterView = FooterView;
});

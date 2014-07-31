define(function(require, exports, module) {

var marionette = require('marionette');

var footerTemplate = require('hbs!app/todo/templates/footer-view');

var FooterView = marionette.ItemView.extend({
    template: footerTemplate,

    ui: {
        completed: '.filters span.completed',
        active: '.filters span.active',
        all: '.filters span.all',
        active_count: '.active-count'
    },

    events:{
        'click @ui.completed': 'filterCompletedItems',
        'click @ui.active': 'filterActiveItems',
        'click @ui.all': 'showAll'
    },

    initialize: function(options){
        this.collection = options.collection;

        this.listenTo(this.collection, 'change', this.updateCount);
    },

    onRender: function(){
        this.updateCount();
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

    updateCount: function(){
        this.ui.active_count.text(this.collection.getActiveCount());
    }

});

exports.FooterView = FooterView;
});

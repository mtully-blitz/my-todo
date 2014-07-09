define(function(require, exports, module) {

var $ = require('jquery');
var marionette = require('marionette');
var vent = require('built/app/vent').vent;
var activity = require('built/app/activity');
var keys = require('built/app/keys');
var app = require('app/app');

var TodoCollectionView  = require('app/todo/views/todos').TodoCollectionView;
var TodoList            = require('app/todo/collections/todos').TodoList;
var Todo                = require('app/todo/models/todo').Todo;



var AppController = marionette.Controller.extend({

    initialize: function(options){
        // This call is required to initialize the
        // BUILT App foundation. See below for what's done.
        // You can customize that as necessary.
        this.BUILT();
        this.app = app;

        this.todoList = new TodoList();
        this.todoList.fetch();
    },

    index: function(){

        /* Ready. Set. Go! */
        // Your Application's Regions are set in the app/app.js
        // everything else starts here. (or in another route :)

        // Not clear that I want to do this here.
        // Might want to separate show of composite from show of todos
        // In case fetching takes longer for long lists, slow connection, etc
        this.app.todos.show(new TodoCollectionView({collection: this.todoList}));
        /* ---------- */

    },

    BUILT: function(){

        // Key Management
        // If you are not using the modal system,
        // but are using the key system, you can omit
        // the dictionary passed here.
        keys.initialize();

        // The responder chain is a stack of views/controllers.
        // When a key event is detected, the stack is searched
        // from the bottom up. AKA Last in First Out (LIFO).
        // Views that participate in the chain can choose to implement
        // keyDown(e) or performKeyEquivalent(e).
        //
        // performKeyEquivalent is checked first then keyDown is checked.
        // If either of those returns 'true' the chain is no longer traversed.
        //
        // Note that we automatically add the ApplicationDelegate.
        // This ensures it will be the last one checked for key events.
        // Then we implement keyDown above to handle looking for
        // our desired key press.
        //
        // Any additional view or controller that would like
        // to participate in this chain is required to register
        // itself into the chain like we do here.
        keys.registerInResponderChain(this);

        // Activity Management
        // Like modal managerment, these handlers are present so you can define
        // how the network activity indicator is presented. AKA via animation
        // or some other means.
        //
        // You should NEVER call these directly.
        this.listenTo(vent, activity.events.PRESENT, this._presentNetworkActivityIndicator);
        this.listenTo(vent, activity.events.DISMISS, this._dismissNetworkActivityIndicator);
    },

    _presentNetworkActivityIndicator: function(){
        throw new Error('No Activity Indicator View Specified');
        //this.app.activity.show(new YourActivityView);
    },

    _dismissNetworkActivityIndicator: function(modalView){
        this.app.activity.close();
    },

});

exports.AppController = AppController;
});

define(function(require, exports, module) {
    var marionette = require('marionette');
    var app = new marionette.Application();

    app.addRegions({
        todos: '#todo-app'
    });

    app.addInitializer(function() {
        Backbone.history.start({
            pushState: false
        });
    });


    return app;
});

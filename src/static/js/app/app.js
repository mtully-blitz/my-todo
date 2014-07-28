define(function(require, exports, module) {
    var marionette = require('marionette');
    var app = new marionette.Application();

    app.addRegions({
        header: 'header',
        todos: '#todo-app',
        footer: 'footer'
    });

    app.addInitializer(function() {
        Backbone.history.start({
            pushState: false
        });
    });


    return app;
});

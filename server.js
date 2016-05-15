"use strict";
// Angular 2 Universal
require('angular2-universal/polyfills');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var angular2_universal_1 = require('angular2-universal');
//angular2 production mode
angular2_universal_1.enableProdMode();
// replace this line with your Angular 2 root component
var app_component_1 = require('./client/app/app.component');
//Lets require/import the HTTP module
var http = require('http');
var ROOT = path.join(path.resolve(__dirname, '..'));
var app = express();
app.use(express.static(__dirname));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(bodyParser.json());
//routes
// Get the controller functions
var controller = require('./server/controller.js');
//Define the routes
app.route('/').get(controller.index);
app.route('/game:id').get(controller.getGame);
app.route('/game').post(controller.createGame);
//app.route('/game:id').delete(controller.deleteGame);
//app.route('/game').put(controller.updateGame);
//app.route('/page:id').get(controller.displayGame);
//app.route('/page').get(controller.showList)
/*
 *  Angular Universal settings
 */
function ngApp(req, res) {
    var baseUrl = '/';
    var url = req.originalUrl || '/';
    var config = {
        directives: [app_component_1.AppComponent],
        // dependencies shared among all requests to server
        platformProviders: [
            angular2_universal_1.provide(angular2_universal_1.ORIGIN_URL, { useValue: 'http://localhost:8080' }),
            angular2_universal_1.provide(angular2_universal_1.BASE_URL, { useValue: baseUrl }),
        ],
        // dependencies re-created for each request
        providers: [
            angular2_universal_1.provide(angular2_universal_1.REQUEST_URL, { useValue: url }),
            angular2_universal_1.NODE_ROUTER_PROVIDERS,
            angular2_universal_1.NODE_HTTP_PROVIDERS,
        ],
        // if true, server will wait for all async to resolve before returning response
        async: true,
        // if you want preboot, you need to set selector for the app root
        // you can also include various preboot options here (explained in separate document)
        preboot: { appRoot: 'app' }
    };
    res.render('index', config);
}
// send all requests to Angular Universal
// if you want Express to handle certain routes (ex. for an API) make sure you adjust this
app.use('*', ngApp);
//Lets define a port we want to listen to
var PORT = 3000;
//Lets start our server
app.listen(process.env.PORT || PORT, function () {
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});
//# sourceMappingURL=server.js.map
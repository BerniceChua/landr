// Angular 2 Universal
import 'angular2-universal/polyfills';
import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';


import {
provide,
enableProdMode,
expressEngine,
REQUEST_URL,
ORIGIN_URL,
BASE_URL,
NODE_ROUTER_PROVIDERS,
NODE_HTTP_PROVIDERS,
ExpressEngineConfig
} from 'angular2-universal';

//angular2 production mode
enableProdMode();

// replace this line with your Angular 2 root component
import {AppComponent} from './client/app/app.component';

//Lets require/import the HTTP module
var http = require('http');
const ROOT = path.join(path.resolve(__dirname, '..'));

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
  let baseUrl = '/';
  let url = req.originalUrl || '/';

  let config: ExpressEngineConfig = {
    directives: [ AppComponent ],

    // dependencies shared among all requests to server
    platformProviders: [
      provide(ORIGIN_URL, {useValue: 'http://localhost:8080'}),
      provide(BASE_URL, {useValue: baseUrl}),
    ],

    // dependencies re-created for each request
    providers: [
      provide(REQUEST_URL, {useValue: url}),
      NODE_ROUTER_PROVIDERS,
      NODE_HTTP_PROVIDERS,
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
const PORT=8080;


//Lets start our server
app.listen(process.env.PORT || PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", process.env.PORT);
});

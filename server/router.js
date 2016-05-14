'use strict';

module.exports = function(app){
  // Get the controller functions
  var controller = require('./controller.js');

  //Define the routes
  app.route('/').get(controller.index);
  app.route('/game:id').get(controller.getGame);
  app.route('/game').post(controller.createGame);
  app.route('/game:id').delete(controller.deleteGame);
  app.route('/game').put(controller.updateGame);
  app.route('/page:id').get(controller.displayGame);
  app.route('/page').get(controller.showList)
}

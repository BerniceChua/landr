'use strict';

module.exports = function(app){
  // Get the controller functions
  var controller = require('./controller.js');

  //Define the routes
  app.route('/').get('controller.index');
}

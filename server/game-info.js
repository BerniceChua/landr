var dotenv = require('dotenv').config();
var mongoose = require('mongoose');

var mongooseURI = 'mongodb://' + dotenv.DB_USER + ':' + dotenv.DB_PASSWORD + '@ds036069.mlab.com:36069/LandrDB';
//mongoose.connect('mongodb://localhost:8080/my_database');
mongoose.connect(mongooseURI);

var Schema = mongoose.Schema;

// create a schema
var gameSchema = new Schema({
  title: { type: String },
  description: { type: String },
  pictures: [ { type: String } ],
  videos: [ { type: String } ],
  link_facebook: { type: String },
  link_twitter: { type: String },
  link_google_plus: { type: String },
  download: { type: String },
  version: { type: String },
  username: { type: String, unique: true },
  password: { type: String },
  admin: { type: Boolean },
  location: { type: String },
  created_at: { type: Date },
  updated_at: { type: Date }
});

// the schema is useless so far
// we need to create a model using it
var Game = mongoose.model('Game', gameSchema);

// make this available to our users in our Node applications
module.exports = Game;

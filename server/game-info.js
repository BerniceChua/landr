//require('dotenv').config();
var mongoose = require('mongoose');

let mongooseURI = 'mongodb://' + DB_USER + ':' + DB_PASSWORD + '@ds036069.mlab.com:36069/LandrDB';
mongoose.connect(mongooseURI);

var Schema = mongoose.Schema;

// create a schema
var gameSchema = new Schema({
  title: { type: String },
  subtitle : { type : String },
  description: { type: String },
  mainImage : {type : String},
  pictures: [ { type: String } ],
  video: { type: String },
  facebook: { type: String },
  twitter: { type: String },
  username: { type: String, unique: true },
  password: { type: String },
  created_at: { type: Date },
  updated_at: { type: Date }
});

// the schema is useless so far
// we need to create a model using it
var Game = mongoose.model('Game', gameSchema);

// make this available to our users in our Node applications
module.exports = Game;

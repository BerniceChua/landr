var Game = require('./game-info.js');

'use stricts';

/*
 *  Render th first page
 */
 exports.index = function(req, res){
   res.render('index');
 }

 exports.getGame = function(req, res){
   var id = req.params.id;
   Game.findOne({_id:id},function(game,err){
     if (err){res.send(err);}
     else{res.jsonp(game);}
   });
 }

 exports.createGame = function(req, res){
   var game = new Game(req.body.game);

   game.save(function(newGame, err){
     if(err){res.jsonp(err);}
     else{res.jsonp(newGame);}
   });
 }
/*
 exports.deleteGame = function(req, res){
   var id = req.params.id
   Game.delete({_id:id},function(game,err){
     if (err){res.send(err);}
     else{res.jsonp(game);}
   });
 }

 exports.updateGame = function(req, res){
   res.render('game'{
     user : req.user || null
   });
 }

 exports.displayGame = function(req, res){
   var id = req.params.id
   Game.findOne({_id:id},function(game,err){
     if (err){res.send(err);}
     else{res.jsonp(game);}
   });
 }

 exports.showList = function(req, res){
   res.render('page'{
     user : req.user || null
   });
 }
*/

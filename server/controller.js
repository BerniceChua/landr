'use stricts';

/*
 *  Render th first page
 */
 exports.index = function(req, res){
   res.render('index'{
     user : req.user || null
   });
 }

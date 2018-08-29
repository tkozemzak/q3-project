//Update the name of the controller below and rename the file.
module.exports = function(app){

const comments = require("../controllers/comments.js")


  app.get('/comments', comments.index);
  app.post('/comments', comments.create);

app.use(authenticateUser)

}

function authenticateUser(req, res, next){
  if(!req.session.user){
    res.redirect('/');
  } else {
    next();
  }
}

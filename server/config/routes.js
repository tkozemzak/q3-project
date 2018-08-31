//Update the name of the controller below and rename the file.
module.exports = function(app){

const comments = require("../controllers/comments.js")
const register = require("../controllers/register.js")
const login = require("../controllers/login.js")

//comments
  app.get('/comments', comments.index);
  app.post('/comments', comments.create);
  app.delete('/comments/:id', comments.delete);

  //register
  app.post('/signup', register.register)

  //login
  app.post('/login', login.login)




}

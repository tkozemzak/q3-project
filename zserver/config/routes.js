//Update the name of the controller below and rename the file.
module.exports = function(app){

const bookingPage = require("../controllers/bookingPage.js")


  //booking
  app.get('/', bookingPage.index);
  app.post('/bookingPage/:id', bookingPage.create);

app.use(authenticateUser)

}

function authenticateUser(req, res, next){
  if(!req.session.user){
    res.redirect('/');
  } else {
    next();
  }
}

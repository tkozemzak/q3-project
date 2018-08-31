const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION

login: function(req, res){
    knex('user').where('email', req.body.email).then((results)=>{
      let user = results[0];
console.log(user);
      if(user && user.password === req.body.password){
        res.json(user)
      } else {
        res.sendStatus(400);
      }
    })
  }
}

const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION

  register: function(req, res)  {
    const newUser = knex('user').insert({
      "first_name": req.body.first_name,
      "last_name": req.body.last_name,
      "email" : req.body.email,
      "password": req.body.password || "hello"
    })
    console.log(newUser);
    res.json(newUser)
  }

}

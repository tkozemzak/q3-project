const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  index: function(req, res) {
    knex("comment").then((results)=>{
      res.send({results: results});

    })
  },

  create: function(req, res) {
    console.log('req', req.body);
    knex("comment").insert({
      "content": req.body.content,
      "comment_name": req.body.comment_name,
      "movie_id": req.body.movie_id
    }).then((results)=>{
      res.send({results: results})
    })
  }

}

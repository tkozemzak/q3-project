
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comment').del()
    .then(function () {
      // Inserts seed entries
      return knex('comment').insert([
        {content: 'love it', comment_name: 'Tim', movie_id: '400'},
        {content: 'ehh', comment_name: 'Bob', movie_id: '399'},
      ]);
    });
};

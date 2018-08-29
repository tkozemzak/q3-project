
exports.up = function(knex, Promise) {
  return knex.schema.createTable("comment", function(table){
    table.increments();
    table.text("content");
    table.string("comment_name");
    table.integer("movie_id");
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("comment")
};

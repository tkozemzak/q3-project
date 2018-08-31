
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {first_name: 'Tim', last_name: 'Kozemzak', email: 'tim@tim.tim', password: 'test'}

      ]);
    });
};

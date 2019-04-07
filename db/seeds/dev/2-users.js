
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {name: "Stephanie Dyer", email: "stephanie.knopp.dyer@gmail.com"},
        {name: "Marissa Pels", email: "marissapels@gmail.com"},
        {name: "Landon Roberts", email: "landonmarkroberts@gmail.com"},
        {name: "Fred Smith", email: "fredsmith@gmail.com"},
        {name: "Snow White", email: "snowwhite@gmail.com"},
      ]);
    });
};

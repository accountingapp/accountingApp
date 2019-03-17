
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: "1", name: "Stephanie Dyer", email: "stephanie.knopp.dyer@gmail.com"},
        {id: "2", name: "Marissa Pels", email: "marissapels@gmail.com"},
        {id: "3", name: "Landon Roberts", email: "landonmarkroberts@gmail.com"},
        {id: "4", name: "Fred Smith", email: "fredsmith@gmail.com"},
        {id: "5", name: "Snow White", email: "snowwhite@gmail.com"},
      ]);
    });
};

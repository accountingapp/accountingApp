
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {firstName: "Stephanie", lastName: "Dyer", email: "stephanie.knopp.dyer@gmail.com"},
        {firstName: "Marissa", lastName: "Pels", email: "marissapels@gmail.com"},
        {firstName: "Landon", lastName: "Roberts", email: "landonmarkroberts@gmail.com"},
        {firstName: "Fred", lastName: "Smith", email: "fredsmith@gmail.com"},
        {firstName: "Snow", lastName: "White", email: "snowwhite@gmail.com"},
      ]);
    });
};

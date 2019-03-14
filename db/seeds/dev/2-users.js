
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: "1", firstName: "Stephanie", lastName: "Dyer", email: "stephanie.knopp.dyer@gmail.com"},
        {id: "2", firstName: "Marissa", lastName: "Pels", email: "marissapels@gmail.com"},
        {id: "3", firstName: "Landon", lastName: "Roberts", email: "landonmarkroberts@gmail.com"},
        {id: "4", firstName: "Fred", lastName: "Smith", email: "fredsmith@gmail.com"},
        {id: "5", firstName: "Snow", lastName: "White", email: "snowwhite@gmail.com"},
      ]);
    });
};

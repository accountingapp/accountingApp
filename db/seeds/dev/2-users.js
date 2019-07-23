/* eslint-disable */
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: "45745c60-7b1a-11e8-9c9c-2d42b21b1a3e",
          name: "Stephanie Dyer",
          email: "stephanie.knopp.dyer@gmail.com"
        },
        {
          id: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
          name: "Marissa Pels",
          email: "marissapels@gmail.com"
        },
        {
          id: "45745c60-7b1a-11e8-9c9c-2d42b21b7a3e",
          name: "Fred Smith",
          email: "fredsmith@gmail.com"
        },
        {
          id: "91227fdc-52ee-365b-a5aa-81b0b3681cf6",
          name: "Snow White",
          email: "snowwhite@gmail.com"
        },
        {
          id: "45745c60-7b1a-11e8-9c9c-2d26b21b1a3e",
          name: "Angela Murphy",
          email: "amurph@gmail.com"
        }
      ]);
    });
};

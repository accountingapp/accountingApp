
exports.up = function(knex, Promise) {
  return Promise.all([
      knex.schema.createTable('accounts', table =>{
        table.increments('id').primary();
        table.string('description').notNullable();
        table.string('natural').notNullable();
        table.string('module').notNullable();
      })
    ])
};

exports.down = function(knex, Promise) {
  return Promse.all([
    knex.schema.dropTableIfExists('accounts')
  ]);
};

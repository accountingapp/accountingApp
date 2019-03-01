
exports.up = function(knex, Promise) {
  return Promise.all([
      knex.schema.createTable('users', table =>{
        table.increments('id').primary();
        table.string('firstName').notNullable();
        table.string('lastName').notNullable();
        table.string('email').unique();
      }),
      knex.schema.createTable('accounts', table =>{
        table.increments('id').primary();
        table.string('description').notNullable();
        table.string('natural').notNullable();
        table.string('module').notNullable();
        table.integer('owner').notNullable();

        table.foreign('owner').references('id').inTable('users').onUpdate('CASCADE');
      }),
      knex.schema.createTable('processes', table =>{
        table.increments('id').primary();
        table.string('title').notNullable();
        table.text('procedure');
        table.integer('owner').notNullable();

        table.foreign('owner').references('id').inTable('users').onUpdate('CASCADE');
      })
    ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('users'),
    knex.schema.dropTableIfExists('accounts'),
    knex.schema.dropTableIfExists('processes')
  ]);
};

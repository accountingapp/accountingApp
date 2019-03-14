
exports.up = function(knex, Promise) {
  return Promise.all([
      knex.schema.createTable('modules', table =>{
        table.increments('id').primary();
        table.string('module').notNullable();
      }),
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
        table.integer('moduleId').notNullable();
        table.integer('ownerId').notNullable();
        table.specificType('contributors', 'text[]');

        table.foreign('moduleId').references('id').inTable('modules').onDelete('CASCADE');
        table.foreign('ownerId').references('id').inTable('users').onDelete('CASCADE');
        
      }),
      knex.schema.createTable('processes', table =>{
        table.increments('id').primary();
        table.string('title').notNullable();
        table.text('procedure');
        table.integer('ownerId').notNullable();

        table.foreign('ownerId').references('id').inTable('users').onDelete('CASCADE');
      })
    ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    
    knex.schema.dropTableIfExists('accounts'),
    knex.schema.dropTableIfExists('processes'),
    knex.schema.dropTableIfExists('users'),
    knex.schema.dropTableIfExists('modules')
  ]);
};

/*eslint-disable*/
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("modules", table => {
      table.increments("id").primary();
      table.string("module").notNullable();
    }),
    knex.schema.createTable("users", table => {
      table.uuid("id").primary();
      table.string("name").notNullable();
      table.string("email").unique();
      table.string("password");
      table.string("company");

      table.index("email");
    }),
    knex.schema.createTable("accounts", table => {
      table.increments("id").primary();
      table.string("description").notNullable();
      table.string("natural").notNullable();
      table.integer("moduleId").notNullable();
      table.uuid("ownerId");
      table.specificType("processes", "text[]");
      table.specificType("contributors", "text[]");

      table
        .foreign("moduleId")
        .references("id")
        .inTable("modules")
        .onDelete("CASCADE");
      table
        .foreign("ownerId")
        .references("id")
        .inTable("users")
        .onDelete("CASCADE");
    }),
    knex.schema.createTable("processes", table => {
      table.increments("id").primary();
      table.string("title").notNullable();
      table.specificType("process", "json[]");
      table.uuid("ownerId").notNullable();

      table
        .foreign("ownerId")
        .references("id")
        .inTable("users")
        .onDelete("CASCADE");
    }),
    knex.schema.createTable("resources", table => {
      table.increments("id").primary();
      table.string("description").notNullable();
      table.string("link");
      table.text("article");
      table.text("notes");
    }),
    knex.schema.createTable("events", table => {
      table.increments("id").primary();
      table.string("title").notNullable();
      table.string("description").notNullable();
      // table.string("user");
      table.string("company");
      table.string("date");
      table.string("documentNumber");
      table.string("customer");
      table.string("vendor");
      table.string("invoice");
      table.string("localCurrency");
      table.specificType("stages", "json[]");
      table.timestamps();

      // table
      //   .foreign("user")
      //   .references("email")
      //   .inTable("users")
      //   .onDelete("CASCADE");
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists("resources"),
    knex.schema.dropTableIfExists("accounts"),
    knex.schema.dropTableIfExists("processes"),
    knex.schema.dropTableIfExists("modules"),
    knex.schema.dropTableIfExists("events"),
    knex.schema.dropTableIfExists("users")
  ]);
};

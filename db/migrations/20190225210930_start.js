/*eslint-disable*/
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("modules", table => {
      table.increments("id").primary();
      table.string("module").notNullable();
    })
    .createTable("users", table => {
      table.uuid("id").primary();
      table.string("name").notNullable();
      table.string("email").unique();
      table.string("password");
      table.string("company");

      table.index("email");
    })
    .createTable("accounts", table => {
      table.increments("id").primary();
      table.string("description").notNullable();
      table.string("natural").notNullable();
      table.integer("moduleId").notNullable();
      table.string("email");
      table.specificType("processes", "text[]");
      table.specificType("contributors", "text[]");

      table
        .foreign("moduleId")
        .references("id")
        .inTable("modules")
        .onDelete("CASCADE");
      table
        .foreign("email")
        .references("email")
        .inTable("users")
        .onDelete("CASCADE");
    })
    .createTable("processes", table => {
      table.increments("id").primary();
      table.string("title").notNullable();
      table.specificType("process", "json[]");
      table.uuid("ownerId").notNullable();

      table
        .foreign("ownerId")
        .references("id")
        .inTable("users")
        .onDelete("CASCADE");
    })
    .createTable("resources", table => {
      table.increments("id").primary();
      table.string("description").notNullable();
      table.string("link");
      table.text("article");
      table.text("notes");
    })
    .createTable("events", table => {
      table.increments("id").primary();
      table.string("title").notNullable();
      table.string("description").notNullable();
      table.string("user").unique();
      table.string("company");
      table.string("date");
      table.string("documentNumber");
      table.string("customer");
      table.string("vendor");
      table.string("invoice");
      table.string("localCurrency");
      table.specificType("stages", "json[]");
      table.timestamps();

      table
        .foreign("user")
        .references("email")
        .inTable("users")
        .onDelete("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("resources")
    .dropTableIfExists("accounts")
    .dropTableIfExists("processes")
    .dropTableIfExists("modules")
    .dropTableIfExists("events")
    .dropTableIfExists("users");
};

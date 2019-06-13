module.exports = {
  dev: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'accountingapp',
      user: 'postgres',
      password: 'dev',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './db/migrations',
    },
    seeds: {
      directory: './db/seeds/dev',
    }
  },

  production: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'accountingapp',
      user: 'postgres',
      password: 'dev',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './db/migrations',
    },
    seeds: {
      directory: './db/seeds',
    }
  }
};
const config = require('../knexfile');
const env = process.env.NODE_ENV || 'dev';
const knex = require('knex')(config[env]);

module.exports = {
  knex
};
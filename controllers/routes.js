const routeFunctions = require('./routeFunctions');

module.exports = (server) => {
  server.post('/account', routeFunctions.getAccount);
}
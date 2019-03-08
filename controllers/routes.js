const routeFunctions = require('./routeFunctions');

module.exports = (server) => {
  server.post('/account', routeFunctions.getAccount);
  server.get('/ownerDependencies/:ownerId', routeFunctions.getDependenciesByOwner);
  server.get('/ownerDetails/:ownerId', routeFunctions.getOwner);
}
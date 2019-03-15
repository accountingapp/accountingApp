const routeFunctions = require('./routeFunctions');

module.exports = (server) => {
  server.post('/account', routeFunctions.getAccountByDescription);
  // server.get('/account/:accountId', routeFunctions.getAccount);
  server.get('/ownerDependencies/:ownerId', routeFunctions.getDependenciesByOwner);
  server.get('/ownerDetails/:ownerId', routeFunctions.getOwner);
  server.get('/accountDependencies/:accountId', routeFunctions.getDependenciesByAccount);
  server.get('/processDetails/:processId', routeFunctions.getProcess);

  server.post('/contributors', routeFunctions.getContributors);
  server.post('/processes', routeFunctions.getProcesses);
}
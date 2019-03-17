const routeFunctions = require('./routeFunctions');
const ownerFunctions = require('./routeFunctions/ownerFunctions');
const processFunctions = require('./routeFunctions/processFunctions');
const accountFunctions = require('./routeFunctions/accountFunctions');

module.exports = (server) => {
  server.get('/ownerDependencies/:ownerId', routeFunctions.getDependenciesByOwner);
  server.get('/ownerDetails/:ownerId', routeFunctions.getOwner);
  server.get('/accountDependencies/:accountId', routeFunctions.getDependenciesByAccount);
  server.get('/processDetails/:processId', routeFunctions.getProcess);

  server.post('/contributors', routeFunctions.getContributors);
  server.post('/processes', routeFunctions.getProcesses);

  // Users
  server.get('/userName/:name', ownerFunctions.getOwnerByName);

  // Processes
  server.get('/processTitle/:title', processFunctions.getProcessByTitle);

  // Accounts
  server.get('/accountDescription/:description', accountFunctions.getAccountByDescription);
}
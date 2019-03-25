const routeFunctions = require('./routeFunctions');
const ownerFunctions = require('./routeFunctions/ownerFunctions');
const processFunctions = require('./routeFunctions/processFunctions');
const accountFunctions = require('./routeFunctions/accountFunctions');

module.exports = (server) => {
  server.get('/ownerDependencies/:ownerId', routeFunctions.getDependenciesByOwner);
  server.get('/ownerDetails/:ownerId', routeFunctions.getOwner);
  server.get('/accountDependencies/:accountId', routeFunctions.getDependenciesByAccount);
  

  server.post('/contributors', routeFunctions.getContributors);
  

  // Users
  server.get('/userName/:name', ownerFunctions.getOwnerByName);

  // Processes
  server.get('/processTitle/:title', processFunctions.getProcessByTitle);
  server.get('/processDetails/:processId', processFunctions.getProcess);
  server.post('/processes', processFunctions.getProcesses);
  server.patch('/processDetails/:processId', processFunctions.addProcessStep)
  

  // Accounts
  server.get('/accountDescription/:description', accountFunctions.getAccountByDescription);
}
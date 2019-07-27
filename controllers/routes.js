const routeFunctions = require("./routeFunctions");
const ownerFunctions = require("./routeFunctions/ownerFunctions");
const processFunctions = require("./routeFunctions/processFunctions");
const accountFunctions = require("./routeFunctions/accountFunctions");
const moduleFunctions = require("./routeFunctions/moduleFunctions");
const resourceFunctions = require("./routeFunctions/resourceFunctions");
const chartFunctions = require("./routeFunctions/chartFunctions");
const eventFunctions = require("./routeFunctions/eventFunctions");

module.exports = server => {
  server.get(
    "/ownerDependencies/:ownerId",
    routeFunctions.getDependenciesByOwner
  );
  server.get("/ownerDetails/:ownerId", routeFunctions.getOwner);
  server.get(
    "/accountDependencies/:accountId",
    routeFunctions.getDependenciesByAccount
  );

  server.post("/contributors", routeFunctions.getContributors);

  // Users
  server.get("/userName/:name", ownerFunctions.getOwnerByName);
  server.get("/users", ownerFunctions.getAllUsers);
  server.post("/registerUser", ownerFunctions.registerUser);
  server.post("/loginUser", ownerFunctions.loginUser);
  server.post("/forgotPassword", ownerFunctions.forgotPassword);

  // Processes
  server.get("/processTitle/:title", processFunctions.getProcessByTitle);
  server.get("/processDetails/:processId", processFunctions.getProcess);
  server.get("/processOwner/:ownerId", processFunctions.getProcessByOwner);
  server.post("/processes", processFunctions.getProcesses);
  server.patch(
    "/processDetails/:processId/:field",
    processFunctions.updateProcess
  );

  // Accounts
  server.get("/accounts", accountFunctions.getAllAccounts);
  server.get(
    "/accountDescription/:description",
    accountFunctions.getAccountByDescription
  );
  server.get(
    "/accounts/process/:processId",
    accountFunctions.getAccountsByProcess
  );
  server.post("/account", accountFunctions.createNewAccount);

  //Modules
  server.get("/modules", moduleFunctions.getAllModules);
  server.post("/createModule", moduleFunctions.createModule);

  //Resources
  server.get("/resources", resourceFunctions.getAllResources);
  server.get("/resourceDetails/:resourceId", resourceFunctions.getResource);
  server.post("/resource", resourceFunctions.createResource);
  server.put("/resource", resourceFunctions.updateResource);

  //Events
  server.post("/event", eventFunctions.createEvent);
  server.get("/events", eventFunctions.getEvents);
  server.get("/event/:eventId", eventFunctions.getEvent);

  //Charts
  server.post("/charts", chartFunctions.saveToS3);
  // server.get('/createExcelWorkbook', chartFunctions.createExcelWorkbook);
};

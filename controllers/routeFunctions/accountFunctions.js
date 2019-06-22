const db = require("../../db/connection").knex;

function getAccountByDescription(req, res) {
  db("accounts")
    .where("description", "ilike", `%${req.params.description}%`)
    .then(results => {
      if (results) {
        console.log(`Successfully retrieved accounts by description`);
        res.status(200).send(results);
      } else {
        console.log(`No account found`);
      }
    })
    .catch(error => {
      console.log(`ERROR: ${error}`);
    });
}

function getAccountsByProcess(req, res) {
  const processId = req.params.processId;
  db("accounts")
    .where(db.raw(`${processId}=ANY(processes::int[])`))
    .then(results => {
      if (results) {
        console.log("Successfully retrieved accounts");
        res.status(200).send(results);
      } else {
        console.log(`No accounts for process ${processID} found`);
      }
    })
    .catch(error => {
      console.log("ERROR: ", error);
    });
}

function getAllAccounts(req, res) {
  db("accounts")
    .select("accounts.id", "description", "natural", "module", "name")
    .innerJoin("users", "accounts.ownerId", "users.id")
    .leftJoin("modules", "accounts.ownerId", "modules.id")
    .then(results => {
      if (results) {
        console.log("Successfully retrieved all accounts");
        res.status(200).send(results);
      } else {
        console.log("No accounts found");
      }
    })
    .catch(error => {
      console.log("Error retrieving accounts");
    });
}

function createNewAccount(req, res) {
  let moduleId, ownerId;
  let moduleName = req.body.module;
  let ownerName = req.body.owner;
  if (!moduleName || !ownerName) {
    console.log(
      "ERROR: A module name and owner name must be specified when creating a new account"
    );
    res
      .status(400)
      .send({
        error:
          "A module name and owner name must be specified when creating a new account"
      });
  }
  Promise.all([
    db("modules").where({ module: moduleName }),
    db("users").where({ name: ownerName })
  ])
    .then(results => {
      console.log("LOOKUP RESULTS: ", results);
      moduleId = results[0][0].id;
      ownerId = results[1][0].id;

      let newAccount = {
        description: req.body.description,
        natural: req.body.natural,
        moduleId: moduleId,
        ownerId: ownerId
      };

      db("accounts")
        .insert(newAccount)
        .then(results => {
          res.status(200).send(results);
        })
        .catch(error => {
          console.log("Error creating new account: ", error);
          res.status(400).send({ error });
        });
    })
    .catch(error => {
      console.log("Error creating new account: ", error);
      res.status(400).send({ error });
    });
}

module.exports = {
  getAccountByDescription,
  getAccountsByProcess,
  getAllAccounts,
  createNewAccount
};

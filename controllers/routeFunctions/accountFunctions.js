const db = require('../../db/connection').knex

function getAccountByDescription(req, res) {
  db('accounts')
    .where('description', 'ilike', `%${req.params.description}%`)
    .then(results => {
      if (results) {
        console.log(`Successfully retrieved results`);
        
      } else {
        console.log(`No account found`);
      }
    })
    .catch(error => {
      console.log(`ERROR: ${error}`)
    });
}

function getAccountsByProcess(req, res) {
  const processId=req.params.processId;
  db('accounts')
    .where(db.raw(`${processId}=ANY(processes::int[])`))
    .then(results => {
      if (results) {
        console.log('Successfully retrieved accounts');
        res.status(200).send(results);
      } else {
        console.log(`No accounts for process ${processID} found`)
      }
    })
    .catch(error => {
      console.log("ERROR: ", error);
    })
}

function getAllAccounts(req, res) {
  db('accounts')
  .select('accounts.id', 'description', 'natural', 'module', 'name')
  .innerJoin('users', 'accounts.ownerId', 'users.id')
  .leftJoin('modules', 'accounts.ownerId', 'modules.id')
  .then(results => {
    if(results) {
      console.log('Successfully retrieved all accounts');
      res.status(200).send(results);
    }
    else {
      console.log('No accounts found');
    }
  })
  .catch(error => {
    console.log("Error retrieving accounts");
  })
}

module.exports = {
  getAccountByDescription,
  getAccountsByProcess,
  getAllAccounts
}
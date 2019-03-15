const db = require('../db/connection').knex

function getAccountByDescription(req, res) {
  db('accounts')
    .innerJoin('users', 'accounts.ownerId', 'users.id')
    .where('description', 'like', `%${req.body.description}%`)
    // .orWhere('firstName', 'like', `%${req.body.description}%`)
    .then(results => {
      console.log("RESULTS: ", results)
      if (results) {
        console.log(`Successfully retrieved results`);
        res.send({
          status: 1,
          data: results
        })
      } else {
        console.log(`No account found`);
      }
    })
    .catch(error => {
      console.log(`ERROR: ${error}`)
    });
}

// function getAccount(req, res) {
//   db('accounts')
//     .where('description', 'like', `%${req.body.description}%`)
//     // .orWhere('firstName', 'like', `%${req.body.description}%`)
//     .then(results => {
//       console.log("RESULTS: ", results)
//       if (results) {
//         console.log(`Successfully retrieved results`);
//         res.send({
//           status: 1,
//           data: results
//         })
//       } else {
//         console.log(`No account found`);
//       }
//     })
//     .catch(error => {
//       console.log(`ERROR: ${error}`)
//     });
// }

function getDependenciesByAccount(req, res) {
  db('accounts')
    .select('description', 'natural', 'moduleId', 'ownerId', 'firstName', 'lastName', 'processes', 'contributors')
    .innerJoin('users', 'accounts.ownerId', 'users.id')
    .leftJoin('modules', 'accounts.ownerId', 'modules.id')
    .where('accounts.id', `${req.params.accountId}`)
    .then(results => {
      if (results) {
        console.log(`Successfully retrieved results`);
        res.send({
          status: 1,
          data: results
        })
      } else {
        console.log(`No account found`);
      }
    })
    .catch(error => {
      console.log(`ERROR: ${error}`)
    });
}

function getDependenciesByOwner(req, res) {
  db('accounts')
    .select('id', 'description', 'natural', 'moduleId', 'ownerId')
    .where('ownerId', `${req.params.ownerId}`)
    .then(results => {
      if (results) {
        console.log(`Successfully retrieved results`);
        res.send({
          status: 1,
          data: results
        })
      } else {
        console.log(`No account found`);
      }
    })
    .catch(error => {
      console.log(`ERROR: ${error}`)
    });
}

function getOwner(req, res) {
  db('users')
    .where('id', `${req.params.ownerId}`)
    .then(results => {
      if (results) {
        console.log(`Successfully retrieved results`);
        res.send({
          status: 1,
          data: results
        })
      } else {
        console.log(`No owner found`);
      }
    })
    .catch(error => {
      console.log(`ERROR: ${error}`)
    });
}

function getContributors(req, res) {
  db('users')
  .whereIn('id', req.body.contributors)
  .then(results => {
    if (results) {
      console.log(`Successfully retrieved results`);
      res.send({
        status: 1,
        data: results
      })
    } else {
      console.log(`No contributors found`);
    }
  })
  .catch(error => {
    console.log(`ERROR: ${error}`)
  });
}

function getProcesses(req, res) {
  db('processes')
  .whereIn('id', req.body.processes)
  .then(results => {
    if (results) {
      console.log(`Successfully retrieved results`);
      res.send({
        status: 1,
        data: results
      })
    } else {
      console.log(`No contributors found`);
    }
  })
  .catch(error => {
    console.log(`ERROR: ${error}`)
  });
}

function getProcess(req, res) {
  db('processes')

  .leftJoin('users', 'processes.ownerId', 'users.id')
  .where('processes.id', req.params.processId)
  .then(results => {
    if (results) {
      console.log(`Successfully retrieved results`);
      res.send({
        status: 1,
        data: results
      })
    } else {
      console.log(`No contributors found`);
    }
  })
  .catch(error => {
    console.log(`ERROR: ${error}`)
  });
}

module.exports = {
  getAccountByDescription,
  getDependenciesByAccount,
  getDependenciesByOwner,
  getOwner,
  getContributors,
  getProcesses,
  getProcess
}
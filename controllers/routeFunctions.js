const db = require('../db/connection').knex
// function getAccount(req, res) {
//   console.log("TEST: ", req.body);
//   db('accounts')
//     .select()
//     .where('description', 'like', `%${req.body.description}%`)
//     .then(account => {
//       if (account) {
//         console.log(`Successfully retrieved account`);
//         res.send({
//           status: 1,
//           data: account
//         })
//       } else {
//         console.log(`No account found`);
//       }
//     })
//     .catch(error => {
//       console.log(`ERROR: ${error}`)
//     });
// }

function getAccount(req, res) {
  db('accounts')
    .innerJoin('users', 'accounts.owner', 'users.id')
    .where('description', 'like', `%${req.body.description}%`)
    .orWhere('firstName', 'like', `%${req.body.description}%`)
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


function getDependenciesByOwner(req, res) {
  db('accounts')
    .select('description', 'natural', 'module', 'owner')
    .where('owner', `${req.params.ownerId}`)
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
module.exports = {
  getAccount,
  getDependenciesByOwner,
  getOwner
}
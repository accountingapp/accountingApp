const db = require('../db/connection').knex
function getAccount(req, res) {
  db('accounts')
    .select()
    .where({
      description: req.body.description
    })
    .then(account => {
      if (account) {
        console.log(`Successfully retrieved account`);
        res.send({
          status: 1,
          data: account
        })
      } else {
        console.log(`No account found`);
      }
    })
    .catch(error => {
      console.log(`ERROR: ${error}`)
    });
}

module.exports = {
  getAccount
}
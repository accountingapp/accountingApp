const db = require('../../db/connection').knex

function getAccountByDescription(req, res) {
  db('accounts')
    .where('description', 'ilike', `%${req.params.description}%`)
    .then(results => {
      console.log("RESULTS: ", results)
      if (results) {
        console.log(`Successfully retrieved results`);
        res.status(200).send(results);
      } else {
        console.log(`No account found`);
      }
    })
    .catch(error => {
      console.log(`ERROR: ${error}`)
    });
}

module.exports = {
  getAccountByDescription
}
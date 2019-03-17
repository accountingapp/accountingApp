const db = require('../../db/connection').knex

function getProcessByTitle(req, res) {
  db('processes')
  .where('title', 'ilike', `%${req.params.title}%`)
  .then(results => {
    console.log("RESULTS: ", results)
    if (results) {
      console.log(`Successfully retrieved results`);
      res.status(200).send(results);
    } else {
      console.log(`No user found`);
    }
  })
  .catch(error => {
    console.log(`ERROR: ${error}`)
  });
}

module.exports = {
  getProcessByTitle
}
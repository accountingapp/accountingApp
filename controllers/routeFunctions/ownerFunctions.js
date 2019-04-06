const db = require('../../db/connection').knex

function getOwnerByName(req, res) {
  db('users')
  .where('name', 'ilike', `%${req.params.name}%`)
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

function getAllUsers(req, res) {
  db('users')
  .then(results => {
    if (results) {
      console.log(`Successfully retrieved users`);
      res.status(200).send(results);
    } else {
      console.log(`No users found`);
    }
  })
  .catch(error => {
    console.log("Error retrieving users: ", error);
  })
}
module.exports = {
  getOwnerByName,
  getAllUsers
}
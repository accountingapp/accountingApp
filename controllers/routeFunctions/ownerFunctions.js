const db = require('../../db/connection').knex
const { createPassword, encryptPassword, emailUser } = require('../authUtils/passwordUtils');

function getOwnerByName(req, res) {
  db('users')
  .where('name', 'ilike', `%${req.params.name}%`)
  .then(results => {
    console.log("RESULTS: ", results)
    if (results) {
      console.log(`Successfully retrieved owner by name`);
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

function createUser(req, res) {
  const { user } = req.body;
  const password = createPassword();
  user.password = encryptPassword(password);

  db('users')
  .insert(user)
  .then(() => {
    user.password = password;
    // fire and forget as of now
   emailUser(user);
  })
  .then(() => {
    res.status(200).send('New User Created');
  })
  .catch(e => {
    res.status(400).send(e);
  })
}

module.exports = {
  getOwnerByName,
  getAllUsers,
  createUser
}
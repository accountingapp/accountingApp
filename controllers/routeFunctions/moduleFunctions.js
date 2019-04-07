const db = require('../../db/connection').knex

function getAllModules(req, res) {
  db('modules')
  .then(results => {
    if(results) {
      res.status(200).send(results)
    } else {
      console.log("No modules were found")
    }
  })
  .catch(error => {
    console.log("Error retrieving modules");
  })
}

function createModule(req, res) {
  db('modules')
  .insert(req.body)
  .then(() => {
    res.status(200).send("Successfully created new module")
  })
  .catch(error => {
    console.log("Error creating module: ", error);
    res.status(400).send({error: "Error creating module: ", error})
  })
}

module.exports= {
  getAllModules,
  createModule
}
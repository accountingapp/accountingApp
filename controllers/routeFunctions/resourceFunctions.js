const db = require('../../db/connection').knex

function getAllResources(req, res) {
  db('resources')
  .then(results => {
    if(results) {
      res.status(200).send(results)
    } else {
      console.log("No resources were found")
    }
  })
  .catch(error => {
    console.log("Error retrieving resources");
  })
}

function getResource(req, res) {
  db('resources')
  .where('resources.id', req.params.resourceId)
  .then(results => {
    if (results) {
      console.log(`Successfully retrieved resource`);
      res.status(200).send(results)
    } else {
      console.log(`No resource found`);
    }
  })
  .catch(error => {
    console.log(`ERROR: ${error}`)
  });
}

module.exports= {
  getAllResources,
  getResource
}
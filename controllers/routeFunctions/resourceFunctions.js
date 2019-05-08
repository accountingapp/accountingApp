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

function createResource(req, res) {
  db('resources')
  .insert(req.body)
  .then(()=>{
    console.log("Successfully created a new resource");
    res.status(200).send("Successfully created a new resource")
  })
  .catch(error => {
    console.log("ERROR: ", error);
    res.status(400).send({error})
  })
}

function updateResource(req, res) {
  db('resources')
  .where('id', req.params.resourceId)
  .update(req.body)
  .then(results => {
    console.log("Successfully updated resource")
    res.status(200).send({data: results});
  })
  .catch(error => {
    console.log("ERROR: ", error);
  })
}

module.exports= {
  getAllResources,
  getResource,
  createResource,
  updateResource
}
const db = require('../../db/connection').knex

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

function addProcessStep(req, res) {
  db('processes')
  .where('id', req.params.processId)
  .update('process', req.body)
  .then(results => {
    console.log("Successfully updated process")
    res.status(200).send({data: results});
  })
  .catch(error => {
    console.log("ERROR: ", error);
  })
}

module.exports = {
  getProcessByTitle,
  getProcesses,
  getProcess,
  addProcessStep
} 
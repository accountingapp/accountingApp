const db = require('../../db/connection').knex

function getProcesses(req, res) {
  db('processes')
  .whereIn('id', req.body.processes)
  .then(results => {
    if (results) {
      console.log(`Successfully retrieved processes`);
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
      console.log(`Successfully retrieved process`);
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
      console.log(`Successfully retrieved process by title`);
      res.status(200).send(results);
    } else {
      console.log(`No process found`);
    }
  })
  .catch(error => {
    console.log(`ERROR: ${error}`)
  });
}

function getProcessByOwner(req, res) {
  db('processes')
  .where('ownerId',`${req.params.ownerId}`)
  .then(results => {
    if (results) {
      console.log(`Successfully retrieved owner processes`);
      res.status(200).send(results);
    } else {
      console.log(`No processes found`);
    }
  })
  .catch(error => {
    console.log(`ERROR: ${error}`)
  });
}

function updateProcess(req, res) {
  db('processes')
  .where('id', req.params.processId)
  .update(req.params.field, req.body)
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
  updateProcess,
  getProcessByOwner
} 
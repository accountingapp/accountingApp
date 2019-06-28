const db = require("../../db/connection").knex;
function createEvent(req, res) {
  const event = req.body;
  if (!event || !event.title || !event.description) {
    res.status(400).send("Make sure your event has a title and description");
  }

  db("events")
    .insert(event)
    .then(() => {
      res.status(200).send("New Event Created");
    })
    .catch(e => {
      res.status(400).send(e);
    });
}

module.exports = {
  createEvent
};

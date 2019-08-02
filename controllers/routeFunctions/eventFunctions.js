const db = require("../../db/connection").knex;
function createEvent(req, res) {
  const event = req.body;
  console.log("EVENT: ", event);
  if (!event || !event.title || !event.description) {
    res.status(400).send("Make sure your event has a title and description");
  }

  db("events")
    .insert(event)
    .then(() => {
      res.status(200).send("New Event Created");
    })
    .catch(e => {
      console.log("Error creating event: ", e);
      res.status(400).send(e);
    });
}

function getEvents(req, res) {
  db("events")
    .then(results => {
      if (results) {
        console.log(`Successfully retrieved events`);
        res.status(200).send(results);
      } else {
        console.log(`No events found`);
      }
    })
    .catch(error => {
      console.log("Error retrieving events: ", error);
    });
}

function getEvent(req, res) {
  db("events")
    .where("id", req.params.eventId)
    .then(results => {
      if (results) {
        console.log(`Successfully retrieved event`, results);
        res.status(200).send(results[0]);
      } else {
        console.log(`No event found`);
      }
    })
    .catch(error => {
      console.log("Error retrieving events: ", error);
    });
}
module.exports = {
  createEvent,
  getEvents,
  getEvent
};

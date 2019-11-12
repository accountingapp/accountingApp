const db = require("../../db/connection").knex;

function createEvent(req, res) {
  const event = req.body;
  console.log("EVENT: ", event);
  if (!event || !event.title || !event.description) {
    res.status(400).send("Make sure your event has a title and description");
  }

  let newEvent = {
    title: event.title,
    description: event.description,
    company: event.company,
    date: event.date || new Date(),
    documentNumber: event.documentNumber,
    customer: event.customer,
    vendor: event.vendor,
    invoice: event.invoice,
    localCurrency: event.localCurrency,
    stages: event.stages
  };

  db("events")
    .insert(newEvent)
    .then(response => {
      console.log("NEW EVENT RESPONSE: ", response);
      res.status(200).send("New Event Created");
    })
    .catch(e => {
      console.log("Error creating event: ", e);
      res.status(400).send(e);
    });
}

function updateEvent(req, res) {
  const event = req.body;
  const id = req.params.eventId;
  if (!event || !event.title || !event.description) {
    res.status(400).send("Make sure your event has a title and description");
  }

  let newEvent = {
    title: event.title,
    description: event.description,
    company: event.company,
    date: event.date || new Date(),
    documentNumber: event.documentNumber,
    customer: event.customer,
    vendor: event.vendor,
    invoice: event.invoice,
    localCurrency: event.localCurrency,
    stages: event.stages
  };

  db("events")
    .update(newEvent)
    .where("id", event.id)
    .then(response => {
      console.log("UPDATED EVENT RESPONSE: ", response);
      res.status(200).send("Updated event successfully");
    })
    .catch(e => {
      console.log("Error updating event: ", e);
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
  getEvent,
  updateEvent
};

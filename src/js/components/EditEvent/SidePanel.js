import React, { Component } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import axios from "axios";

const translate = {
  event: {
    title: "*Title",
    description: "*Description",
    company: "Company",
    date: "Date",
    documentNumber: "Document Number",
    customer: "Customer",
    vendor: "Vendor",
    invoice: "Invoice",
    localCurrency: "Local Currency"
  },
  stages: {
    stageDescription: "Stage Description",
    financialImpact: "Financial Impact",
    owner: "Owner",
    department: "Department",
    application: "Application",
    issues: ""
  }
};
const SidePanel = ({
  sectionType,
  event,
  stages,
  handleChange,
  handleStageChange,
  createEvent,
  updateEvent
}) => {
  let stageIndex =
    sectionType && sectionType.slice(0, 5) === "stage"
      ? parseInt(sectionType.slice(6))
      : 0;

  console.log("EVENT: ", event.id);
  return (
    <div className="SidePanel">
      {sectionType === "event" ? (
        <div className="SidePanel__Event">
          <h3 className="SidePanel__Heading">Event Details</h3>
          <div className="SidePanel__Body">
            {Object.keys(translate.event).map((eventKey, i) => (
              <div key={eventKey} className="formGroup">
                <label className="SidePanel__label">
                  {translate.event[eventKey]}
                </label>
                <input
                  id={eventKey}
                  value={event[eventKey]}
                  onChange={e => handleChange(e)}
                  className="inputField sidePanelInput"
                />
              </div>
            ))}
          </div>
        </div>
      ) : sectionType.slice(0, 5) === "stage" ? (
        <div className="SidePanel__Stage">
          <h3 className="SidePanel__Heading">{`Stage ${stageIndex +
            1} Details`}</h3>
          <div className="SidePanel__Body">
            {Object.keys(translate.stages).map((eventKey, i) => (
              <div key={eventKey}>
                {translate.stages[eventKey] && (
                  <div className="formGroup">
                    <label className="SidePanel__label">
                      {translate.stages[eventKey]}
                    </label>
                    <input
                      id={eventKey}
                      value={stages[stageIndex][eventKey]}
                      onChange={e => handleStageChange(e, stageIndex)}
                      className="inputField sidePanelInput"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {event && event.id ? (
        <Button className="SidePanel__button" onClick={() => updateEvent()}>
          Update Event
        </Button>
      ) : (
        <Button className="SidePanel__button" onClick={() => createEvent()}>
          Create Event
        </Button>
      )}
    </div>
  );
};

export default SidePanel;

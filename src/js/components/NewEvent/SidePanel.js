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
  title: "*Title",
  description: "*Description",
  company: "Company",
  date: "Date",
  documentNumber: "Document Number",
  customer: "Customer",
  vendor: "Vendor",
  invoice: "Invoice",
  localCurrency: "Local Currency"
};

const SidePanel = ({ sectionType, event, handleChange }) => (
  <div>
    {sectionType === "event" ? (
      <div>
        {Object.keys(event).map((eventKey, i) => (
          <div key={eventKey} className="formGroup">
            <label>{translate[eventKey]}</label>
            <input
              id={eventKey}
              value={event[eventKey]}
              onChange={e => handleChange(e)}
              className="inputField sidePanelInput"
            />
          </div>
        ))}
      </div>
    ) : sectionType === "stage" ? (
      <div>Side panel for editing stage!</div>
    ) : null}
  </div>
);

export default SidePanel;
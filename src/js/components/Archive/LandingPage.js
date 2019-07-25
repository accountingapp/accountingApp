import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import paperwork from "../../assets/paperwork.jpg";
import animatedComptuer from "../../assets/accountant-1794122_1280.png";
import search from "../../assets/searchImage.png";
import money from "../../assets/money.jpg";

const LandingPage = () => (
  <div>
    <div className="section mainSection text-center">
      <Row>
        <Col md={{ span: 5, offset: 6 }} className="mainSectionText">
          <p>
            Financially Stated offers a repository, documentation tool, and
            knowledge hub to streamline corporate accounting processes and
            empower accountants.
          </p>
          <Button
            size="lg"
            type="submit"
            href="/login/google"
            className=" loginButton text-center"
          >
            <i className="glyphicon glyphicon-log-in" />
            Login
          </Button>
        </Col>
        <Col md={6} />
      </Row>
    </div>
    <div className="section section1">
      <Container>
        <Row>
          <Col md={6}>
            <Image className="paperworkImage" src={animatedComptuer} />
          </Col>
          <Col md={6}>
            <p>
              Financially Stated allows your accounting team to realize
              efficiencies, cross-train with ease, and add value to the team
              beyond recurring deliverables. Accounting managers can identify
              top players through the individual contribution dashboards,
              prioritize process pain points through your team's wishlists, and
              track the close process within the calendar board.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
    <div className="section section2 text-center">
      <p>
        Simply search for a GL account, application, process, contributor,
        module, or guidance, and all of your organization's accounting knowledge
        regarding that element can be found.
      </p>
      <Image src={search} className="searchImage" />
    </div>
    <div className="section section3">
      <Container>
        <Row>
          <Col md={6}>
            <Image className="moneyImage" src={money} />
          </Col>
          <Col md={6}>
            <p>
              A single source of truth and integrated with excel, accounting
              close reconciliations and workpapers can be locked down once
              approved, updating your close checklist in real-time creating an
              audit trail and visibility into bottlenecks.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  </div>
);

export default LandingPage;

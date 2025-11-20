
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import '../App.css';
import EnquireNow from "../components/EnquiryForm";

const CampusSection = () => {
  return (
    <section className="campus-section">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} md={10} sm={12}>
            <div className="campus-box text-center">
              <h2>Find the Perfect Campus for You</h2>
              <p>
                Visit any of our branches to experience our facilities firsthand and meet our expert faculty.
              </p>
              <EnquireNow />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CampusSection;

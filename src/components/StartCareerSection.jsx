
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import '../App.css';

const StartCareerSection = () => {
  return (
    <section className="start-career-section">
      <Container>
        <Row className="align-items-center justify-content-between">
          <Col lg={8} md={12} sm={12}>
            <h2>Ready to Start Your <br></br> <span className="highlight">Animation Career?</span></h2>
          </Col>
          <Col lg={4} md={12} sm={12} className=" text-center mt-3 ">
            <Button className="start-btn" id="start-now-button">
              Enquire now
            </Button>
          </Col>
        </Row>
      </Container>
      
    </section>
  );
};
 
export default StartCareerSection;

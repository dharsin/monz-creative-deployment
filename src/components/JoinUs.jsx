
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import '../App.css';
import EnquireNow from "../components/EnquiryForm";

const JoinUs = () => {
  return (
    <section className="join-us-section py-5">
    <Container>
      <Row className="align-items-center">
        
        <Col lg={6} className="mb-4 mb-lg-0">
          <div className="video-wrapper rounded-4 overflow-hidden shadow">
            <video
              src="/videos/joinus.mp4" 
              className="w-100"
              autoPlay
              muted
              loop
              playsInline
            ></video>
          </div>
        </Col>
  
        <Col lg={6} className="text-center text-lg-start">
          <h2 className="fw-bold mb-3">
            Ready to Join{" "}
            <span className="highlight text-danger">8500+ Successful Students?</span>
          </h2>
          <p className="mb-4 fs-5 text-muted">
            Start your animation journey today and transform your creative passion
            into a rewarding career.
          </p>
          <EnquireNow />
        </Col>
      </Row>
    </Container>
  </section>
  
  );
};

export default JoinUs;

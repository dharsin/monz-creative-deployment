import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import '../App.css';

const BannerSection = () => {
  return (
    <section className="banner-section">
      <Container>
        <Row>
          
          <Col lg={6} md={12} className="text-col">
            <h1>
              Unleash Your <br />
              <span className="highlight">Creativity</span> <br />
              with <span className="highlight">#MonzCreativeSchool</span>
            </h1>
            <p>
              Transform your passion into profession with India's leading
              animation training institute. Master 2D/3D Animation, VFX, Motion
              Graphics, and Game Design.
            </p>
          </Col>

          
          <Col lg={6} md={12} className="form-col">
            <div className="enquiry-form">
              <h2>Enquire Now</h2>
              <form>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="form-control mb-3 enquiry-form-ip"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="form-control mb-3"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="form-control mb-3"
                  required
                />
                <textarea
                  rows="3"
                  placeholder="Your Message"
                  className="form-control mb-3"
                ></textarea>

                <Button type="submit" className="submit-btn" variant="danger">
                  Submit
                </Button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BannerSection;

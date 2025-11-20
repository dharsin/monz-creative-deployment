import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../components/css/ContactPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const ContactPage = () => {
  return (
    <>

<section className="navbar-section shadow-sm py-3">
        <Container>
          <Row className="align-items-center">
            <Col xs={6} md={3}>
              <Link
                to="/"
                className="navbar-logo d-flex align-items-center text-decoration-none"
              >
                <img
                  src="https://monzcreativeschool.com/assets/images/logo/monz-creative-school.png"
                  alt="Logo"
                  className="logo img-fluid"
                  style={{ maxHeight: "60px" }}
                />
              </Link>
            </Col>

            <Col xs={6} md={9}>
              <ul className="nav justify-content-end align-items-center">

              <li>
  <Link className="dropdown-item" to="/">
    Home
  </Link>
</li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle fw-semibold"
                    href="#courses"
                    id="coursesDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Courses
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="coursesDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="/vfx-course">
                        VFX
                      </Link>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#graphic-design">
                        Graphic Design
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#game-design">
                        Game Design
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#digital-marketing">
                        Digital Marketing
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#sap">
                        SAP
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#arvr">
                        AR / VR
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                <Link className="nav-link fw-semibold" to="/placement">
  Placement
</Link>

                </li>
                <li className="nav-item">
                  <a className="nav-link fw-semibold" href="#work">
                    Work
                  </a>
                </li>
                <li className="nav-item">
                <Link className="nav-link fw-semibold" to="/about">
                 About
                </Link>
                </li>
                <li className="nav-item">
  <Link className="nav-link fw-semibold" to="/contact">
    Contact
  </Link>
</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

    
      <section className="creative-hero">
       
        <div className="floating-triangle"></div>
        <div className="floating-circle"></div>
        <div className="floating-square"></div>

        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={6} md={8}>
              <div className="floating-box mb-4">
                <img
                  src="https://monzcreativeschool.com/assets/images/logo/monz-creative-school.png"
                  alt="floating cubes"
                  className="img-fluid"
                />
              </div>

              <div className="creative-hero-content">
                <h1>
                  <span className="highlight">Let's Create Something</span>
                  <br />
                  <span className="bold">Extraordinary Together</span>
                </h1>
                <p>
                  Join <strong>Monz Creative School</strong> and transform your
                  passion into mastery with futuristic design and creative
                  learning experiences.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

     
      <section className="contact-section py-5">
        <Container>
          <Row className="gy-4 align-items-start">
           
            <Col lg={5} md={6}>
              <div className="contact-info">
                <h2 className="contact-title">Get In Touch</h2>
                <p className="contact-desc">
                  Join a community of creators and bring your vision to life.
                  We're here to help you start your creative journey.
                </p>

                <div className="info-box">
                  <div className="info-item">
                    <span className="icon"></span>
                    <div>
                      <h4>Address</h4>
                      <p>123 Creative Boulevard, Design District, NY 10001</p>
                    </div>
                  </div>

                  <div className="info-item">
                    <span className="icon"></span>
                    <div>
                      <h4>Email</h4>
                      <p>hello@monzcreative.school</p>
                    </div>
                  </div>

                  <div className="info-item">
                    <span className="icon"></span>
                    <div>
                      <h4>Phone</h4>
                      <p>+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>

               
              </div>
            </Col>

         
            <Col lg={7} md={6}>
              <div className="contact-form">
                <form>
                <h2 className="form-head">ENQUIRY FORM</h2>
                  <Row className="g-3">
                    <Col md={6}>
                   
                      <div className="form-group">
                        <label>Name *</label>
                        <input type="text" placeholder="Your name" required />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="form-group">
                        <label>Email *</label>
                        <input type="email" placeholder="your@email.com" required />
                      </div>
                    </Col>

                    <Col md={6}>
                      <div className="form-group">
                        <label>Phone *</label>
                        <input type="text" placeholder="+1 (555) 000-0000" required />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="form-group">
                        <label>Course Interested *</label>
                        <select required>
                          <option value="">Select a course</option>
                          <option value="vfx">VFX</option>
                          <option value="animation">Animation</option>
                          <option value="graphic-design">Graphic Design</option>
                          <option value="film-editing">Film Editing</option>
                        </select>
                      </div>
                    </Col>

                    <Col md={12}>
                      <div className="form-group">
                        <label>Message *</label>
                        <textarea
                          placeholder="Tell us about your creative goals..."
                          required
                        ></textarea>
                      </div>
                    </Col>

                    <Col md={12}>
                      <button type="submit" className="submit-btn">
                        Send Message
                      </button>
                    </Col>
                  </Row>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="creative-showcase-section">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-10">
        <div className="showcase-wrapper">
          <img
            src="https://media.istockphoto.com/id/1322783086/vector/crowd.jpg?s=612x612&w=0&k=20&c=IKM4kPVkZafEKGOUVq9BrgVilxeSpIO6-hLrv8DeSVo="
            alt="Creative Team"
            className="showcase-image"
          />
          <div className="showcase-badge top-right">
            <h3>95%</h3>
            <p>Success Rate</p>
          </div>
          <div className="showcase-badge bottom-left">
            <h3>500+</h3>
            <p>Creative Minds</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
 <Footer />

    </>
  );
};

export default ContactPage;

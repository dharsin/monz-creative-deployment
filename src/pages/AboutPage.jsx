import React, { useEffect } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "../components/css/About.css";
import { XCircleFill, CheckCircleFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import EnquireNow from "../components/EnquiryForm";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className="about-page">
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

      <section className="about-hero-section d-flex align-items-center text-center text-light">
        <Container>
          
          <h1 className="display-4 fw-bold" data-aos="fade-up">
            About <span className="text-danger">Monz Creative School</span>
          </h1>
          <p
            className="lead mt-3 mx-auto about-hero-text"
            style={{ maxWidth: "750px" }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Empowering creativity and innovation through world-class training in
            Animation, Design, and Emerging Technologies.
          </p>
          <div data-aos="zoom-in" data-aos-delay="400">
            <EnquireNow />
          </div>
        </Container>
        <div className="hero-overlay"></div>
      </section>

      <section className="who-we-are-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6} data-aos="fade-right">
              <img
                src="https://monzcreativeschool.com/assets/images/logo/monz-creative-school.png"
                alt="Creative Team"
                className="who-we-are-image     "
              />
            </Col>
            <Col md={6} data-aos="fade-left">
              <h2 className="fw-bold mb-3 text-danger who-we-are-title">
                Who We Are
              </h2>
              <p className="who-we-are-text">
                Monz Creative School is where imagination meets industry. Since
                our founding, we’ve shaped the next generation of artists,
                designers, and innovators by merging technology with creativity.
              </p>
              <p className="who-we-are-text">
                Our mentors, industry professionals, and creators ensure
                students gain real-world skills through workshops, studio
                projects, and internships.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="core-values-section py-5  text-light">
        <Container>
          <div className="text-center mb-5">
            <h2
              className="fw-bold text-danger mb-4 core-values-title"
              data-aos="fade-up"
            >
              Our Core Values
            </h2>
          </div>
          <Row className="text-center g-4">
            <Col md={4} data-aos="zoom-in" data-aos-delay="0">
              <Card className="core-values-card shadow-lg border-0">
                <Card.Body>
                  <h5 className="fw-bold text-danger">Creativity</h5>
                  <p>
                    We foster originality and artistic expression that inspire
                    innovation.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} data-aos="zoom-in" data-aos-delay="200">
              <Card className="core-values-card shadow-lg border-0">
                <Card.Body>
                  <h5 className="fw-bold text-danger">Excellence</h5>
                  <p>
                    We maintain quality in education and mentorship to create
                    world-class talent.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} data-aos="zoom-in" data-aos-delay="400">
              <Card className="core-values-card shadow-lg border-0">
                <Card.Body>
                  <h5 className="fw-bold text-danger">Innovation</h5>
                  <p>
                    We blend design, art, and technology to shape future
                    creative leaders.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="vision-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="mb-4 mb-md-0">
              <div className="vision-content text-white">
                <h2 className="fw-bold mb-3">
                  Our <span className="text-warning">Vision</span>
                </h2>
                <p className="lead text-light mb-4">
                  At Monz Creative School, our vision is to reshape creative
                  education in India by combining imagination with innovation.
                  We aim to nurture artists and designers who are not only
                  industry-ready but also purpose-driven and ethically grounded.
                </p>

                <div className="vision-tags d-flex flex-wrap gap-3">
                  <span className="tag highlight">Creative Thinking</span>
                  <span className="tag">Career Growth</span>
                  <span className="tag">Future Ready</span>
                  <span className="tag">Tech Empowered</span>
                  <span className="tag">Passion Driven</span>
                </div>
              </div>
            </Col>

            <Col md={6} className="text-center">
              <div className="vision-image position-relative">
                <img
                  src="https://monzcreativeschool.com/assets/images/why-choose/1.webp"
                  alt="Monz Creative Achievement"
                  className="img-fluid rounded-4 shadow-lg"
                />
                <div className="vision-star position-absolute bottom-0 end-0"></div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="mission-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6} data-aos="fade-right">
              <h2 className="fw-bold text-danger mb-3 mission-title">
                Our Mission
              </h2>
              <p className="mission-text">
                To transform passion into profession through training that fuses
                creativity, design, and innovation — empowering students to
                become industry-ready professionals.
              </p>
              <Button
                variant="danger"
                className="mt-3 rounded-pill px-4 mission-btn"
              >
                Join Our Journey
              </Button>
            </Col>
            <Col md={6} data-aos="fade-left">
              <img
                src="https://addmissiongyan.wordpress.com/wp-content/uploads/2018/06/misyon.jpg"
                alt="Students"
                className="mission-image "
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="achievements-section py-5 text-light">
        <Container>
          <div className="text-center mb-5">
            <h2 className="fw-bold achievements-title" data-aos="fade-up">
              Our Achievements & Placements
            </h2>
            <p
              className="text-muted mx-auto achievements-subtext"
              style={{ maxWidth: "700px" }}
              data-aos="fade-up"
              data-aos-delay="150"
            >
              Over the years, Monz Creative School has nurtured thousands of
              talents who now shape the creative world — from top animation
              studios to world-class design agencies.
            </p>
          </div>

          <Row className="gy-4 text-center">
            <Col md={3} sm={6} data-aos="zoom-in" data-aos-delay="100">
              <Card className="achievement-card border-0   shadow-lg">
                <Card.Body>
                  <h2 className="fw-bold text-danger">7500+</h2>
                  <p className="mb-0">Students Trained</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} sm={6} data-aos="zoom-in" data-aos-delay="200">
              <Card className="achievement-card border-0   shadow-lg">
                <Card.Body>
                  <h2 className="fw-bold text-danger">5000+</h2>
                  <p className="mb-0">Successful Placements</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} sm={6} data-aos="zoom-in" data-aos-delay="300">
              <Card className="achievement-card border-0  shadow-lg">
                <Card.Body>
                  <h2 className="fw-bold text-danger">100+</h2>
                  <p className="mb-0">Industry Partners</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} sm={6} data-aos="zoom-in" data-aos-delay="400">
              <Card className="achievement-card border-0   shadow-lg">
                <Card.Body>
                  <h2 className="fw-bold text-danger">10+</h2>
                  <p className="mb-0">Years of Excellence</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <div
            className="text-center mt-5"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <Button
              variant="outline-danger"
              size="lg"
              className="rounded-pill px-5 mt-3 achievements-btn"
            >
              Explore Student Works
            </Button>
          </div>
        </Container>
      </section>

      <section className="training-section py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="fw-bold text-dark training-title">
              We Go Beyond Just Teaching{" "}
              <span className="text-danger">Creative Skills</span>
            </h2>
            <p className="text-muted mt-2">
              At Monz Creative School, we build future-ready creators — through
              innovation, mentorship, and real-world learning experiences.
            </p>
          </div>

          <Row className="justify-content-center g-5">
            {/* LEFT SIDE - What We Avoid */}
            <Col md={5} className="refuse-col">
              <div className="training-card refuse-card shadow-sm">
                <h5 className="fw-bold text-danger mb-4">What We Avoid</h5>

                <ul className="list-unstyled">
                  <li>
                    <XCircleFill className="icon text-danger" />{" "}
                    <strong>Outdated Teaching</strong>
                    <p>We keep up with modern creative tools and trends.</p>
                  </li>
                  <li>
                    <XCircleFill className="icon text-danger" />{" "}
                    <strong>One-Way Learning</strong>
                    <p>Our classrooms encourage creativity, not repetition.</p>
                  </li>
                  <li>
                    <XCircleFill className="icon text-danger" />{" "}
                    <strong>No Industry Connection</strong>
                    <p>
                      Every course is connected to real creative opportunities.
                    </p>
                  </li>
                  <li>
                    <XCircleFill className="icon text-danger" />{" "}
                    <strong>Generic Curriculum</strong>
                    <p>
                      Each module is tailored for actual creative industries.
                    </p>
                  </li>
                  <li>
                    <XCircleFill className="icon text-danger" />{" "}
                    <strong>Limited Growth Vision</strong>
                    <p>We shape careers, not just skillsets.</p>
                  </li>
                </ul>
              </div>
            </Col>

            {/* RIGHT SIDE - What We Deliver */}
            <Col md={5} className="deliver-col">
              <div className="training-card deliver-card shadow-sm position-relative">
                <h5 className="fw-bold text-success mb-4">What We Deliver</h5>

                <ul className="list-unstyled">
                  <li>
                    <CheckCircleFill className="icon text-success" />{" "}
                    <strong>Creative Strategy & Thinking</strong>
                    <p>
                      Our programs train students to think like designers,
                      artists, and innovators.
                    </p>
                  </li>
                  <li>
                    <CheckCircleFill className="icon text-success" />{" "}
                    <strong>Industry Mentorship</strong>
                    <p>
                      Learn directly from professionals working in top studios.
                    </p>
                  </li>
                  <li>
                    <CheckCircleFill className="icon text-success" />{" "}
                    <strong>Portfolio-Driven Learning</strong>
                    <p>
                      Build real projects that showcase your creative identity.
                    </p>
                  </li>
                  <li>
                    <CheckCircleFill className="icon text-success" />{" "}
                    <strong>Masterclasses & Guest Talks</strong>
                    <p>Regular insights from leading creative minds.</p>
                  </li>
                  <li>
                    <CheckCircleFill className="icon text-success" />{" "}
                    <strong>Lifetime Career Guidance</strong>
                    <p>Continued mentorship even after you graduate.</p>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="difference-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="mb-4 mb-md-0">
              <div className="difference-content">
                <small className="text-danger fw-semibold">
                  — Experience the Difference
                </small>
                <h2 className="fw-bold mt-2 mb-4">
                  Why it feels different at{" "}
                  <span className="text-danger">Monz Creative School</span>
                </h2>
                <p className="text-muted">
                  At Monz Creative School, we don’t just train designers or
                  animators — we craft creative thinkers. We’re powered by
                  passion, not profit, and that’s what makes every student’s
                  journey unique.
                </p>

                <ul className="mt-4 text-muted">
                  <li>
                    {" "}
                    No mass teaching — every student gets personal attention.
                  </li>
                  <li>
                    {" "}
                    We focus on creativity and storytelling, not just tools.
                  </li>
                  <li> Industry mentors guide you through real projects.</li>
                  <li>
                    {" "}
                    We nurture ideas, helping students grow with confidence.
                  </li>
                  <li>
                    {" "}
                    No sales talk — just pure learning and transformation.
                  </li>
                </ul>

                <p className="mt-4 fw-semibold text-secondary">
                  Because at Monz, creativity isn’t taught — it’s built, one
                  student at a time.
                </p>
              </div>
            </Col>

            <Col md={6} className="text-center">
              <div className="difference-image position-relative">
                <img
                  src="https://monzcreativeschool.com/assets/images/why-choose/2.webp"
                  alt="Monz Creative Students"
                  className="img-fluid rounded shadow-lg"
                />
                <div className="orange-block position-absolute top-0 end-0"></div>
                <div className="dots position-absolute bottom-0 start-0"></div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </section>
  );
};

export default About;

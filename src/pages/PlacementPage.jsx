import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import EnquireNow from "../components/EnquiryForm";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../components/css/PlacementPage.css";
import Footer from "../components/Footer";

import {
  Briefcase,
  Users,
  Lightbulb,
  GraduationCap,
  BookOpen,
  Rocket,
  Trophy,
} from "lucide-react";

const topLogos = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
  "https://via.placeholder.com/120x60?text=Logo+2",
  "https://via.placeholder.com/120x60?text=Logo+3",
  "https://via.placeholder.com/120x60?text=Logo+4",
  "https://via.placeholder.com/120x60?text=Logo+2",
  "https://via.placeholder.com/120x60?text=Logo+3",
  "https://via.placeholder.com/120x60?text=Logo+4",
  "https://via.placeholder.com/120x60?text=Logo+5",
];

const bottomLogos = [
  "https://via.placeholder.com/120x60?text=Logo+6",
  "https://via.placeholder.com/120x60?text=Logo+7",
  "https://via.placeholder.com/120x60?text=Logo+Logo+8",
  "https://via.placeholder.com/120x60?text=Logo+9",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
  "https://via.placeholder.com/120x60?text=Logo+2",
  "https://via.placeholder.com/120x60?text=Logo+3",
  "https://via.placeholder.com/120x60?text=Logo+4",
  "https://via.placeholder.com/120x60?text=Logo+2",
  "https://via.placeholder.com/120x60?text=Logo+3",
  "https://via.placeholder.com/120x60?text=Logo+4",
  "https://via.placeholder.com/120x60?text=Logo+10",
];

function PlacementPage() {
  return (
    <div className="placement-page">
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

      <section className="placement-hero-section text-center">
        <div className="placement-hero-bg"></div>
        <Container>
          <Row>
            <Col>
              <div className="placement-hero-content">
                <h1>
                  Where Creativity <br /> <span>Meets Career Success</span>
                </h1>
                <p>
                  Our students don't just graduate — they get hired by industry
                  leaders.
                </p>

                <Row className="stats-row justify-content-center">
                  <Col md={3} sm={6} className="stat-card">
                    <div className="stat-icon">📈</div>
                    <h3>95%</h3>
                    <p>Placement Rate</p>
                  </Col>
                  <Col md={3} sm={6} className="stat-card">
                    <div className="stat-icon">👥</div>
                    <h3>500+</h3>
                    <p>Students Placed</p>
                  </Col>
                  <Col md={3} sm={6} className="stat-card">
                    <div className="stat-icon">🏢</div>
                    <h3>200+</h3>
                    <p>Partner Companies</p>
                  </Col>
                  <Col md={3} sm={6} className="stat-card">
                    <div className="stat-icon">🏅</div>
                    <h3>98%</h3>
                    <p>Satisfaction Rate</p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="why-placement-section">
        <div className="why-placement-bg"></div>
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2>
                Why Choose <span>Monz</span> for <span>Placement</span>
              </h2>
              <p>
                We don’t just teach you design — we prepare you for a successful
                creative career.
              </p>
            </Col>
          </Row>

          <Row className="g-4 justify-content-center">
            <Col xl={3} lg={4} md={6} sm={10}>
              <div className="why-card">
                <Users className="why-icon" />
                <h4>Dedicated Career Cell</h4>
                <p>
                  Personal career advisors guide you from portfolio building to
                  job offers.
                </p>
              </div>
            </Col>
            <Col xl={3} lg={4} md={6} sm={10}>
              <div className="why-card">
                <Briefcase className="why-icon" />
                <h4>Industry Projects & Internships</h4>
                <p>
                  Work on real client projects and gain hands-on experience
                  before graduation.
                </p>
              </div>
            </Col>
            <Col xl={3} lg={4} md={6} sm={10}>
              <div className="why-card">
                <Lightbulb className="why-icon" />
                <h4>1-on-1 Portfolio Mentoring</h4>
                <p>
                  Expert mentors help you create a portfolio that stands out to
                  recruiters.
                </p>
              </div>
            </Col>
            <Col xl={3} lg={4} md={6} sm={10}>
              <div className="why-card">
                <GraduationCap className="why-icon" />
                <h4>Mock Interviews & Resume Building</h4>
                <p>
                  Practice with industry professionals and perfect your
                  interview skills.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="placement-journey-section">
        <Container>
          <h2 className="placement-journey-title">Your Journey</h2>
          <p className="placement-journey-subtitle">
            From your first day to your dream job — we're with you every step of
            the way.
          </p>

          <Row className="journey-cards-row justify-content-center">
            <Col xs={12} sm={6} md={4} lg={2}>
              <div className="journey-card d-flex flex-column">
                <BookOpen className="journey-icon" size={64} />
                <h5 className="journey-card-title">Learning</h5>
                <p className="journey-card-text">
                  Master industry-standard tools and techniques
                </p>
              </div>
            </Col>

            <Col xs={12} sm={6} md={4} lg={2}>
              <div className="journey-card d-flex flex-column">
                <Rocket className="journey-icon" size={64} />
                <h5 className="journey-card-title">Project Work</h5>
                <p className="journey-card-text">
                  Build real-world projects for your portfolio
                </p>
              </div>
            </Col>

            <Col xs={12} sm={6} md={4} lg={2}>
              <div className="journey-card d-flex flex-column">
                <Users className="journey-icon" size={64} />
                <h5 className="journey-card-title">Mentoring</h5>
                <p className="journey-card-text">
                  Get personalized guidance from experts
                </p>
              </div>
            </Col>

            <Col xs={12} sm={6} md={4} lg={2}>
              <div className="journey-card d-flex flex-column">
                <BookOpen className="journey-icon" size={64} />
                <h5 className="journey-card-title">Internship</h5>
                <p className="journey-card-text">
                  Gain hands-on industry experience
                </p>
              </div>
            </Col>

            <Col xs={12} sm={6} md={4} lg={2}>
              <div className="journey-card d-flex flex-column">
                <Trophy className="journey-icon" size={64} />
                <h5 className="journey-card-title">Placement</h5>
                <p className="journey-card-text">
                  Land your dream creative career
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="students-work-parallax-section">
        <div className="students-work-bg"></div>
        <Container className="text-center">
          <h2 className="students-work-heading">Where Our Students Work</h2>
        </Container>

        <Row className="students-work-marquee-row">
          <div className="students-work-marquee">
            <div className="students-work-marquee-group">
              {topLogos.map((src, index) => (
                <div className="students-work-logo-card" key={index}>
                  <img src={src} alt={`Company ${index + 1}`} />
                </div>
              ))}
            </div>
            <div className="students-work-marquee-group" aria-hidden="true">
              {topLogos.map((src, index) => (
                <div className="students-work-logo-card" key={index + 20}>
                  <img src={src} alt={`Company ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </Row>

        <Row className="students-work-marquee-row reverse">
          <div className="students-work-marquee reverse">
            <div className="students-work-marquee-group reverse">
              {bottomLogos.map((src, index) => (
                <div className="students-work-logo-card" key={index + 40}>
                  <img src={src} alt={`Company ${index + 1}`} />
                </div>
              ))}
            </div>
            <div
              className="students-work-marquee-group reverse"
              aria-hidden="true"
            >
              {bottomLogos.map((src, index) => (
                <div className="students-work-logo-card" key={index + 60}>
                  <img src={src} alt={`Company ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </Row>
      </section>

      <section className="placement-image-section">
        <Container>
          <h2 className="placement-section-title text-center mb-4">
            Our Placed Students Feedback
          </h2>
          <h2 className="placement-section-location">Coimbatore</h2>

          <Row>
            <Col>
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                spaceBetween={20}
                slidesPerView={3}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  576: { slidesPerView: 2 },
                  992: { slidesPerView: 3 },
                }}
                className="placement-swiper"
              >
                <SwiperSlide>
                  <div className="placement-card">
                    <img
                      src="https://pumotechnovation.com/assets/images/placement/4.webp"
                      alt="VFX"
                      className="placement-image"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="placement-card">
                    <img
                      src="https://pumotechnovation.com/assets/images/placement/4.webp"
                      alt="Graphic Design"
                      className="placement-image"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="placement-card">
                    <img
                      src="https://pumotechnovation.com/assets/images/placement/4.webp"
                      alt="UI/UX"
                      className="placement-image"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="placement-card">
                    <img
                      src="https://pumotechnovation.com/assets/images/placement/4.webp"
                      alt="Motion Graphics"
                      className="placement-image"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="placement-card">
                    <img
                      src="https://pumotechnovation.com/assets/images/placement/4.webp"
                      alt="Game Design"
                      className="placement-image"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="placement-card">
                    <img
                      src="https://pumotechnovation.com/assets/images/placement/4.webp"
                      alt="Digital Marketing"
                      className="placement-image"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="placement-card">
                    <img
                      src="https://pumotechnovation.com/assets/images/placement/4.webp"
                      alt="SAP"
                      className="placement-image"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="placement-card">
                    <img
                      src="https://pumotechnovation.com/assets/images/placement/4.webp"
                      alt="VR Architectural Design"
                      className="placement-image"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="service-section">
        <Container fluid>
          <Row className="align-items-center">
            <Col lg={4} md={12} className="service-left">
              <div className="service-text">
                <h2>
                  Service we are <br /> offering
                </h2>
                <p>
                  We develop an individual integrated solution for your business
                  and select a unique set of services for it, combining them
                  with a single strategy and goal.
                </p>
              </div>
            </Col>

            <Col lg={8} md={12} className="service-right">
              <Row className="g-0">
                <Col lg={4} md={6} sm={12}>
                  <div className="service-card">
                    <img
                      src="https://img.freepik.com/free-photo/smiling-female-office-worker-glasses-using-laptop_1262-20654.jpg"
                      alt="Job"
                      className="service-img"
                    />
                    <div className="service-overlay">
                      <h3>Job</h3>
                      <button className="apply-btn">Apply Now →</button>
                    </div>
                  </div>
                </Col>

                <Col lg={4} md={6} sm={12}>
                  <div className="service-card">
                    <img
                      src="https://img.freepik.com/free-photo/team-business-people-collaborating-office-project_23-2148899435.jpg"
                      alt="Internship"
                      className="service-img"
                    />
                    <div className="service-overlay">
                      <h3>Internship</h3>
                      <button className="apply-btn">Apply Now →</button>
                    </div>
                  </div>
                </Col>

                <Col lg={4} md={6} sm={12}>
                  <div className="service-card">
                    <img
                      src="https://img.freepik.com/free-photo/portrait-young-woman-wearing-headphones-sitting-desk_23-2148320120.jpg"
                      alt="Online Exam"
                      className="service-img"
                    />
                    <div className="service-overlay">
                      <h3>Online Exam</h3>
                      <button className="apply-btn">Apply Now →</button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="placement-section py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="placement-title">Our Successful Placements</h2>
            <p className="placement-description">
              We are proud of our students who have secured positions in top
              companies across design, development, and marketing fields.
            </p>
          </div>

          <Row className="g-4">
            <Col xs={6} md={4} lg={2} xl={2}>
              <Card className="placement-card text-center">
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/150"
                  className="placement-img"
                />
                <Card.Body>
                  <Card.Title>Hari Prasath</Card.Title>
                  <Card.Text>Visual Designer</Card.Text>
                  <img
                    src="/assets/company/zoho.png"
                    alt="Zoho"
                    className="company-logo"
                  />
                </Card.Body>
              </Card>
            </Col>

            <Col xs={6} md={4} lg={2} xl={2}>
              <Card className="placement-card text-center">
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/150"
                  className="placement-img"
                />
                <Card.Body>
                  <Card.Title>Akshata Jain</Card.Title>
                  <Card.Text>Associate Marketing</Card.Text>
                  <img
                    src="/assets/company/amazon.png"
                    alt="Amazon"
                    className="company-logo"
                  />
                </Card.Body>
              </Card>
            </Col>

            <Col xs={6} md={4} lg={2} xl={2}>
              <Card className="placement-card text-center">
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/150"
                  className="placement-img"
                />
                <Card.Body>
                  <Card.Title>Nandaprakash</Card.Title>
                  <Card.Text>UX UI Designer</Card.Text>
                  <img
                    src="/assets/company/zoho.png"
                    alt="Zoho"
                    className="company-logo"
                  />
                </Card.Body>
              </Card>
            </Col>

            <Col xs={6} md={4} lg={2} xl={2}>
              <Card className="placement-card text-center">
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/150"
                  className="placement-img"
                />
                <Card.Body>
                  <Card.Title>Sasmitha</Card.Title>
                  <Card.Text>R & D</Card.Text>
                  <img
                    src="/assets/company/accenture.png"
                    alt="Accenture"
                    className="company-logo"
                  />
                </Card.Body>
              </Card>
            </Col>

            <Col xs={6} md={4} lg={2} xl={2}>
              <Card className="placement-card text-center">
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/150"
                  className="placement-img"
                />
                <Card.Body>
                  <Card.Title>Ramesh</Card.Title>
                  <Card.Text>Graphic Designer</Card.Text>
                  <img
                    src="/assets/company/zoho.png"
                    alt="Zoho"
                    className="company-logo"
                  />
                </Card.Body>
              </Card>
            </Col>

            <Col xs={6} md={4} lg={2} xl={2}>
              <Card className="placement-card text-center">
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/150"
                  className="placement-img"
                />
                <Card.Body>
                  <Card.Title>Ramesh</Card.Title>
                  <Card.Text>Graphic Designer</Card.Text>
                  <img
                    src="/assets/company/zoho.png"
                    alt="Zoho"
                    className="company-logo"
                  />
                </Card.Body>
              </Card>
            </Col>

            <Col xs={6} md={4} lg={2} xl={2}>
              <Card className="placement-card text-center">
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/150"
                  className="placement-img"
                />
                <Card.Body>
                  <Card.Title>Ramesh</Card.Title>
                  <Card.Text>Graphic Designer</Card.Text>
                  <img
                    src="/assets/company/zoho.png"
                    alt="Zoho"
                    className="company-logo"
                  />
                </Card.Body>
              </Card>
            </Col>

            <Col xs={6} md={4} lg={2} xl={2}>
              <Card className="placement-card text-center">
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/150"
                  className="placement-img"
                />
                <Card.Body>
                  <Card.Title>Ramesh</Card.Title>
                  <Card.Text>Graphic Designer</Card.Text>
                  <img
                    src="/assets/company/zoho.png"
                    alt="Zoho"
                    className="company-logo"
                  />
                </Card.Body>
              </Card>
            </Col>

            <Col xs={6} md={4} lg={2} xl={2}>
              <Card className="placement-card text-center">
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/150"
                  className="placement-img"
                />
                <Card.Body>
                  <Card.Title>Ramesh</Card.Title>
                  <Card.Text>Graphic Designer</Card.Text>
                  <img
                    src="/assets/company/zoho.png"
                    alt="Zoho"
                    className="company-logo"
                  />
                </Card.Body>
              </Card>
            </Col>

            <Col xs={6} md={4} lg={2} xl={2}>
              <Card className="placement-card text-center">
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/150"
                  className="placement-img"
                />
                <Card.Body>
                  <Card.Title>Ramesh</Card.Title>
                  <Card.Text>Graphic Designer</Card.Text>
                  <img
                    src="/assets/company/zoho.png"
                    alt="Zoho"
                    className="company-logo"
                  />
                </Card.Body>
              </Card>
            </Col>

            <Col xs={6} md={4} lg={2} xl={2}>
              <Card className="placement-card text-center">
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/150"
                  className="placement-img"
                />
                <Card.Body>
                  <Card.Title>Ramesh</Card.Title>
                  <Card.Text>Graphic Designer</Card.Text>
                  <img
                    src="/assets/company/zoho.png"
                    alt="Zoho"
                    className="company-logo"
                  />
                </Card.Body>
              </Card>
            </Col>

            <Col xs={6} md={4} lg={2} xl={2}>
              <Card className="placement-card text-center">
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/150"
                  className="placement-img"
                />
                <Card.Body>
                  <Card.Title>Ramesh</Card.Title>
                  <Card.Text>Graphic Designer</Card.Text>
                  <img
                    src="/assets/company/zoho.png"
                    alt="Zoho"
                    className="company-logo"
                  />
                </Card.Body>
              </Card>
            </Col>

            <Col xs={6} md={4} lg={2} xl={2}>
              <Card className="placement-card text-center">
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/150"
                  className="placement-img"
                />
                <Card.Body>
                  <Card.Title>Ramesh</Card.Title>
                  <Card.Text>Graphic Designer</Card.Text>
                  <img
                    src="/assets/company/zoho.png"
                    alt="Zoho"
                    className="company-logo"
                  />
                </Card.Body>
              </Card>
            </Col>

            <Col xs={6} md={4} lg={2} xl={2}>
              <Card className="placement-card text-center">
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/150"
                  className="placement-img"
                />
                <Card.Body>
                  <Card.Title>Ramesh</Card.Title>
                  <Card.Text>Graphic Designer</Card.Text>
                  <img
                    src="/assets/company/zoho.png"
                    alt="Zoho"
                    className="company-logo"
                  />
                </Card.Body>
              </Card>
            </Col>

            <Col xs={6} md={4} lg={2} xl={2}>
              <Card className="placement-card text-center">
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/150"
                  className="placement-img"
                />
                <Card.Body>
                  <Card.Title>Ramesh</Card.Title>
                  <Card.Text>Graphic Designer</Card.Text>
                  <img
                    src="/assets/company/zoho.png"
                    alt="Zoho"
                    className="company-logo"
                  />
                </Card.Body>
              </Card>
            </Col>

            <Col xs={6} md={4} lg={2} xl={2}>
              <Card className="placement-card text-center">
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/150"
                  className="placement-img"
                />
                <Card.Body>
                  <Card.Title>Ramesh</Card.Title>
                  <Card.Text>Graphic Designer</Card.Text>
                  <img
                    src="/assets/company/zoho.png"
                    alt="Zoho"
                    className="company-logo"
                  />
                </Card.Body>
              </Card>
            </Col>

            <Col xs={6} md={4} lg={2} xl={2}>
              <Card className="placement-card text-center">
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/150"
                  className="placement-img"
                />
                <Card.Body>
                  <Card.Title>Ramesh</Card.Title>
                  <Card.Text>Graphic Designer</Card.Text>
                  <img
                    src="/assets/company/zoho.png"
                    alt="Zoho"
                    className="company-logo"
                  />
                </Card.Body>
              </Card>
            </Col>

            <Col xs={6} md={4} lg={2} xl={2}>
              <Card className="placement-card text-center">
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/150"
                  className="placement-img"
                />
                <Card.Body>
                  <Card.Title>Ramesh</Card.Title>
                  <Card.Text>Graphic Designer</Card.Text>
                  <img
                    src="/assets/company/zoho.png"
                    alt="Zoho"
                    className="company-logo"
                  />
                </Card.Body>
              </Card>
            </Col>

            <Col xs={6} md={4} lg={2} xl={2}>
              <Card className="placement-card text-center">
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/150"
                  className="placement-img"
                />
                <Card.Body>
                  <Card.Title>Ramesh</Card.Title>
                  <Card.Text>Graphic Designer</Card.Text>
                  <img
                    src="/assets/company/zoho.png"
                    alt="Zoho"
                    className="company-logo"
                  />
                </Card.Body>
              </Card>
            </Col>

            <Col xs={6} md={4} lg={2} xl={2}>
              <Card className="placement-card text-center">
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/150"
                  className="placement-img"
                />
                <Card.Body>
                  <Card.Title>Ramesh</Card.Title>
                  <Card.Text>Graphic Designer</Card.Text>
                  <img
                    src="/assets/company/zoho.png"
                    alt="Zoho"
                    className="company-logo"
                  />
                </Card.Body>
              </Card>
            </Col>

            <Col xs={6} md={4} lg={2} xl={2}>
              <Card className="placement-card text-center">
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/150"
                  className="placement-img"
                />
                <Card.Body>
                  <Card.Title>Ramesh</Card.Title>
                  <Card.Text>Graphic Designer</Card.Text>
                  <img
                    src="/assets/company/zoho.png"
                    alt="Zoho"
                    className="company-logo"
                  />
                </Card.Body>
              </Card>
            </Col>

            <Col xs={6} md={4} lg={2} xl={2}>
              <Card className="placement-card text-center">
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/150"
                  className="placement-img"
                />
                <Card.Body>
                  <Card.Title>Ramesh</Card.Title>
                  <Card.Text>Graphic Designer</Card.Text>
                  <img
                    src="/assets/company/zoho.png"
                    alt="Zoho"
                    className="company-logo"
                  />
                </Card.Body>
              </Card>
            </Col>

            <Col xs={6} md={4} lg={2} xl={2}>
              <Card className="placement-card text-center">
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/150"
                  className="placement-img"
                />
                <Card.Body>
                  <Card.Title>Ramesh</Card.Title>
                  <Card.Text>Graphic Designer</Card.Text>
                  <img
                    src="/assets/company/zoho.png"
                    alt="Zoho"
                    className="company-logo"
                  />
                </Card.Body>
              </Card>
            </Col>

            <Col xs={6} md={4} lg={2} xl={2}>
              <Card className="placement-card text-center">
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/150"
                  className="placement-img"
                />
                <Card.Body>
                  <Card.Title>Ramesh</Card.Title>
                  <Card.Text>Graphic Designer</Card.Text>
                  <img
                    src="/assets/company/zoho.png"
                    alt="Zoho"
                    className="company-logo"
                  />
                </Card.Body>
              </Card>
            </Col>

            <Col xs={6} md={4} lg={2} xl={2}>
              <Card className="placement-card text-center">
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/150"
                  className="placement-img"
                />
                <Card.Body>
                  <Card.Title>Ramesh</Card.Title>
                  <Card.Text>Graphic Designer</Card.Text>
                  <img
                    src="/assets/company/zoho.png"
                    alt="Zoho"
                    className="company-logo"
                  />
                </Card.Body>
              </Card>
            </Col>

            <Col xs={6} md={4} lg={2} xl={2}>
              <Card className="placement-card text-center">
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/150"
                  className="placement-img"
                />
                <Card.Body>
                  <Card.Title>Ramesh</Card.Title>
                  <Card.Text>Graphic Designer</Card.Text>
                  <img
                    src="/assets/company/zoho.png"
                    alt="Zoho"
                    className="company-logo"
                  />
                </Card.Body>
              </Card>
            </Col>

            <Col xs={6} md={4} lg={2} xl={2}>
              <Card className="placement-card text-center">
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/150"
                  className="placement-img"
                />
                <Card.Body>
                  <Card.Title>Ramesh</Card.Title>
                  <Card.Text>Graphic Designer</Card.Text>
                  <img
                    src="/assets/company/zoho.png"
                    alt="Zoho"
                    className="company-logo"
                  />
                </Card.Body>
              </Card>
            </Col>

            <Col xs={6} md={4} lg={2} xl={2}>
              <Card className="placement-card text-center">
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/150"
                  className="placement-img"
                />
                <Card.Body>
                  <Card.Title>Ramesh</Card.Title>
                  <Card.Text>Graphic Designer</Card.Text>
                  <img
                    src="/assets/company/zoho.png"
                    alt="Zoho"
                    className="company-logo"
                  />
                </Card.Body>
              </Card>
            </Col>

            <Col xs={6} md={4} lg={2} xl={2}>
              <Card className="placement-card text-center">
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/150"
                  className="placement-img"
                />
                <Card.Body>
                  <Card.Title>Ramesh</Card.Title>
                  <Card.Text>Graphic Designer</Card.Text>
                  <img
                    src="/assets/company/zoho.png"
                    alt="Zoho"
                    className="company-logo"
                  />
                </Card.Body>
              </Card>
            </Col>

            <Col xs={6} md={4} lg={2} xl={2}>
              <Card className="placement-card text-center">
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/150"
                  className="placement-img"
                />
                <Card.Body>
                  <Card.Title>Ramesh</Card.Title>
                  <Card.Text>Graphic Designer</Card.Text>
                  <img
                    src="/assets/company/zoho.png"
                    alt="Zoho"
                    className="company-logo"
                  />
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="g-4 mt-4"></Row>
        </Container>
      </section>

      <Footer />
    </div>
  );
}

export default PlacementPage;

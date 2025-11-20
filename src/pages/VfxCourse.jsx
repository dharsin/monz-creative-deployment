import React from "react";
import "./CoursesPageStyle.css";
import StudentsWork from "../components/StudentsWork";
import PlacementMarquee from "../components/PlacementMarquee";
import { Container, Row, Col, Card } from "react-bootstrap"; 
import "bootstrap/dist/css/bootstrap.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";


const VfxCourse = () => {
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
      <section className="vfx-hero">
        <p className="vfx-tagline">— Film + 3D + Motion Design</p>
        <h1>
          <span className="highlight">VFX</span> Course
        </h1>
        <p className="vfx-subtitle">
          Master the Art of Visual Storytelling — from Compositing, CGI, and
          Motion Design to Cinematic Editing using industry-standard tools.
          Learn end-to-end production workflows in just <b>4 Months!</b>
        </p>

        <div className="vfx-buttons">
          <button className="btn brochure-btn">Download Brochure</button>
          <button className="btn enroll-btn">Enroll Now</button>
        </div>

        <div className="vfx-cards">
          <div className="vfx-card ">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2920/2920365.png"
              alt="Compositing"
            />
            <h4>Compositing</h4>
          </div>

          <div className="vfx-card center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2933/2933829.png"
              alt="3D Simulation"
            />
            <h4>3D Simulation</h4>
          </div>

          <div className="vfx-card ">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3917/3917523.png"
              alt="Motion Graphics"
            />
            <h4>Motion Graphics</h4>
          </div>
        </div>
      </section>

      
      <section className="why-section py-5">
        <div className="container">
          <div className="row align-items-start">
          
            <div className="col-lg-6 mb-4">
              <h2 className="why-heading">
                Why <span>#Monz Creative School?</span>
              </h2>
              <p className="why-text">
                We’re committed to helping every student build a meaningful,
                successful career. We don’t just teach — we guide you every step
                of the way, from your first creative idea to your professional
                journey.
              </p>

              <div className="row g-3 mt-4">
                <div className="col-6">
                  <div className="why-card">
                    <h4>10+</h4>
                    <p>Years of Excellence</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="why-card">
                    <h4>5000+</h4>
                    <p>Students Trained</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="why-card">
                    <h4>200+</h4>
                    <p>Hiring Partners</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="why-card">
                    <h4>350+</h4>
                    <p>Active Learners</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="enquiry-box p-4">
                <h5 className="enquiry-title">
                  Enquire <span>Now</span>
                </h5>

                <form>
                  <input type="text" placeholder="Enter Name *" required />
                  <input
                    type="email"
                    placeholder="Enter Email Address *"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Enter Phone Number *"
                    required
                  />
                  <textarea
                    placeholder="Your Message *"
                    rows="4"
                    required
                  ></textarea>

                  <button type="submit" className="btn-submit w-100">
                    SUBMIT
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StudentsWork />
      <PlacementMarquee />

      <section className="container my-5 py-5">
  <div className="row align-items-center">
    <div className="col-md-6">
      <div className="row g-3">
        <div className="col-6">
          <img
            src="https://www.animationcoursesahmedabad.com/images/course/image/1666244567.jpg"
            alt="Studio Training"
            className="img-fluid rounded-4 shadow-sm"
          />
        </div>
        <div className="col-6">
          <img
            src="https://www.arena-multimedia.com/assets/c1-Buw03uS4.jpeg"
            alt="Online Class"
            className="img-fluid rounded-4 shadow-sm"
          />
        </div>
        <div className="col-12 mt-3">
          
        </div>
      </div>
    </div>

    <div className="col-md-6 ps-md-5 mt-4 mt-md-0">
      <h2 className="fw-bold mb-3">
        Become a{" "}
        <span className="head-highlight" >Job-Ready Graphic Designer.</span>
      </h2>
      <p className="text-muted mb-4">
        Master Adobe Tools, Build a Stunning Portfolio & Launch Your Creative
        Career from anywhere. Learn graphic design online with hands-on projects
        and industry insights.
      </p>

      <ul className="list-unstyled fs-5">
        <li className="mb-2">
          <i
            className="bi bi-check-circle-fill me-2"
            style={{ color: "#f7941d" }}
          ></i>
          AI-Integrated Curriculum
        </li>
        <li className="mb-2">
          <i
            className="bi bi-check-circle-fill me-2"
            style={{ color: "#f7941d" }}
          ></i>
          Real-World Studio Training (Vinci Studio)
        </li>
        <li className="mb-2">
          <i
            className="bi bi-check-circle-fill me-2"
            style={{ color: "#f7941d" }}
          ></i>
          Live Classes with Mentorship
        </li>
        <li>
          <i
            className="bi bi-check-circle-fill me-2"
            style={{ color: "#f7941d" }}
          ></i>
          Build 20+ Real Projects
        </li>
      </ul>
    </div>
  </div>
</section>

<section className="course-coverage-section container my-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold">
          <span className="head-highlight">Course Coverage</span> – Tools & Skills
          You'll Master.
        </h2>
        <p className="text-muted">
          Master Photoshop, Illustrator, InDesign, Canva & AI tools to build
          strong design skills and a job-ready portfolio.
        </p>
      </div>

      <div className="course-coverage-card rounded-4 shadow-sm p-4">
        <div className="row align-items-center">
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img
              src="https://assets.seamedu.com/uploads/posts/feature_The-Verdict-Game-Design_-Animation-_-VFX-Careers-in-India--375-by1801678865040.jpg"
              alt="Graphic Design Course"
              className="img-fluid rounded-4 course-image"
            />
          </div>

          <div className="col-md-6">
            <h4 className="fw-bold mb-2">Online VFX Course (3 Months)</h4>
            <p className="fw-semibold text-secondary mb-3">
              Learn the core tools used by every professional designer:
            </p>

            <div className="d-flex flex-wrap gap-3 mb-4">
              <div className="tool-box text-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg"
                  alt="Photoshop"
                  width="40"
                  height="40"
                />
                <p className="fw-semibold mt-2 mb-0">Photoshop</p>
              </div>

              <div className="tool-box text-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg"
                  alt="Illustrator"
                  width="40"
                  height="40"
                />
                <p className="fw-semibold mt-2 mb-0">Illustrator</p>
              </div>

              <div className="tool-box text-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/20/Adobe_InDesign_CC_icon.svg"
                  alt="InDesign"
                  width="40"
                  height="40"
                />
                <p className="fw-semibold mt-2 mb-0">InDesign</p>
              </div>

              <div className="tool-box text-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg"
                  alt="Canva"
                  width="40"
                  height="40"
                />
                <p className="fw-semibold mt-2 mb-0">Canva</p>
              </div>

              <div className="tool-box text-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/8/8f/Adobe_Firefly_icon.svg"
                  alt="Firefly"
                  width="40"
                  height="40"
                />
                <p className="fw-semibold mt-2 mb-0">Firefly</p>
              </div>

              <div className="tool-box text-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Midjourney_Logo.svg"
                  alt="Midjourney"
                  width="40"
                  height="40"
                />
                <p className="fw-semibold mt-2 mb-0">Midjourney</p>
              </div>
            </div>

            <p className="text-secondary">
              Perfect for beginners who want to build strong design skills and a
              job-ready portfolio.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="course-coverage-section container my-5">
      <div className="text-center mb-4">
       
      </div>

      <div className="course-coverage-card rounded-4 shadow-sm p-4">
        <div className="row align-items-center">
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img
              src="https://p.productioncrate.com/stock-hd/archives/categories/GROUND_EXPLOSIONS_NO_TEXT.jpg"
              alt="Graphic Design Course"
              className="img-fluid rounded-4 course-image"
            />
          </div>

          <div className="col-md-6">
            <h4 className="fw-bold mb-2">Advance Online VFX Course (5 Months)</h4>
            <p className="fw-semibold text-secondary mb-3">
              Learn the core tools used by every professional designer:
            </p>

            <div className="d-flex flex-wrap gap-3 mb-4">
              <div className="tool-box text-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg"
                  alt="Photoshop"
                  width="40"
                  height="40"
                />
                <p className="fw-semibold mt-2 mb-0">Photoshop</p>
              </div>

              <div className="tool-box text-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg"
                  alt="Illustrator"
                  width="40"
                  height="40"
                />
                <p className="fw-semibold mt-2 mb-0">Illustrator</p>
              </div>

              <div className="tool-box text-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/20/Adobe_InDesign_CC_icon.svg"
                  alt="InDesign"
                  width="40"
                  height="40"
                />
                <p className="fw-semibold mt-2 mb-0">InDesign</p>
              </div>

              <div className="tool-box text-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg"
                  alt="Canva"
                  width="40"
                  height="40"
                />
                <p className="fw-semibold mt-2 mb-0">Canva</p>
              </div>

              <div className="tool-box text-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/8/8f/Adobe_Firefly_icon.svg"
                  alt="Firefly"
                  width="40"
                  height="40"
                />
                <p className="fw-semibold mt-2 mb-0">Firefly</p>
              </div>

              <div className="tool-box text-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Midjourney_Logo.svg"
                  alt="Midjourney"
                  width="40"
                  height="40"
                />
                <p className="fw-semibold mt-2 mb-0">Midjourney</p>
              </div>
            </div>

            <p className="text-secondary">
              Perfect for beginners who want to build strong design skills and a
              job-ready portfolio.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="tools-section py-5">
      <div className="container text-center">
        <h2 className="tools-heading mb-3">Tools Covered</h2>
        <p className="tools-description mb-4">
          Master industry-standard tools used by professional designers to create stunning graphics, animations, and visual content.
        </p>

        <div className="row justify-content-center">
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
            <div className="tool-card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg" alt="Photoshop" />
              <p>Photoshop</p>
            </div>
          </div>

          <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
            <div className="tool-card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg" alt="Illustrator" />
              <p>Illustrator</p>
            </div>
          </div>

          <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
            <div className="tool-card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg" alt="Illustrator" />
              <p>Illustrator</p>
            </div>
          </div>

          <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
            <div className="tool-card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg" alt="Illustrator" />
              <p>Illustrator</p>
            </div>
          </div>

          <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
            <div className="tool-card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/48/Adobe_InDesign_CC_icon.svg" alt="InDesign" />
              <p>InDesign</p>
            </div>
          </div>

          <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
            <div className="tool-card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/48/Adobe_InDesign_CC_icon.svg" alt="InDesign" />
              <p>InDesign</p>
            </div>
          </div>
          <div className="row justify-content-center">
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
            <div className="tool-card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg" alt="Photoshop" />
              <p>Photoshop</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>

    <section className="testimonials-section py-5">
        <Container>
          <div className="text-center mb-5">
            <h2>What Our Students Say</h2>
            <p>
              Hear from our alumni and their experiences at Monz Creative School
            </p>
          </div>

          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            }}
          >
            {[
              { name: "EMILIANO AQUILANI", rating: 4 },
              { name: "ANNA ITURBE", rating: 5 },
              { name: "LARA ATKINSON", rating: 5 },
              { name: "IAN OWEN", rating: 4 },
              { name: "MICHAEL TEDDY", rating: 5 },
            ].map((student, index) => (
              <SwiperSlide key={index}>
                <Card className="testimonial-card text-center">
                  <Card.Img
                    variant="top"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAjGI1HIQib_DqW0ReZ46b4NbCRXfwQbHzqhLLmNXqJVmxsaZxTb3S6wHZYk3WGxTPuBY&usqp=CAU"
                    className="testimonial-img mx-auto mt-3"
                  />
                  <h5 className="testimonial-name mt-3">{student.name}</h5>
                  <div className="testimonial-stars">
                    {"★".repeat(student.rating)}
                    {"☆".repeat(5 - student.rating)}
                  </div>
                  <Card.Body>
                    <Card.Text>
                      Completely synergize resource taxing relationships via
                      premier niche markets. Professionally cultivate one-to-one
                      customer service with robust ideas.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </section>

<section className="faq-section">
  <h2 className="faq-headding"> Frequently Asked Questions</h2>
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Accordion Item #3</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Accordion Item #4</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Accordion Item #5</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item> 
    </Accordion>
    </section>
    <Footer />
    </>
  );
};
export default VfxCourse;

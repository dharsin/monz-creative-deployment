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

const VfxCourseCoimbatore = () => {
  const topRowStudents = [
    {
      name: "Aarav Sharma",
      package: "8.2 LPA",
      company: "Amazon",
      companyLogo:
        "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      photo: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      name: "Diya Patel",
      package: "7.5 LPA",
      company: "Netflix",
      companyLogo:
        "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      photo: "https://randomuser.me/api/portraits/women/32.jpg",
    },
    {
      name: "Rahul Mehta",
      package: "9 LPA",
      company: "Google",
      companyLogo:
        "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      photo: "https://randomuser.me/api/portraits/men/50.jpg",
    },
    {
      name: "Sneha Iyer",
      package: "6.8 LPA",
      company: "Adobe",
      companyLogo:
        "https://upload.wikimedia.org/wikipedia/commons/5/51/Adobe_Systems_logo_and_wordmark.svg",
      photo: "https://randomuser.me/api/portraits/women/41.jpg",
    },
  ];

  const bottomRowStudents = [
    {
      name: "Vikram Nair",
      package: "10.5 LPA",
      company: "Microsoft",
      companyLogo:
        "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      photo: "https://randomuser.me/api/portraits/men/12.jpg",
    },
    {
      name: "Ishita Das",
      package: "7.9 LPA",
      company: "Apple",
      companyLogo:
        "https://upload.wikimedia.org/wikipedia/commons/0/02/Apple_logo_black.svg",
      photo: "https://randomuser.me/api/portraits/women/33.jpg",
    },
    {
      name: "Arjun Rao",
      package: "8.4 LPA",
      company: "Infosys",
      companyLogo:
        "https://upload.wikimedia.org/wikipedia/commons/4/45/Infosys_logo.svg",
      photo: "https://randomuser.me/api/portraits/men/27.jpg",
    },
    {
      name: "Priya Sen",
      package: "6.5 LPA",
      company: "Wipro",
      companyLogo:
        "https://upload.wikimedia.org/wikipedia/commons/f/f5/Wipro_Primary_Logo_Color_RGB.svg",
      photo: "https://randomuser.me/api/portraits/women/26.jpg",
    },
  ];
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
        <Container>
          <Row>
            <p className="vfx-tagline">— Film + 3D + Visual Effects (VFX)</p>
            <h1>
              <span className="highlight">VFX course </span>in saravanampatti
            </h1>
            <p className="vfx-subtitle">
              No.1 VFX training institute in saravanampatti with 100% placement
            </p>

            <div className="vfx-buttons">
              <button className="btn enroll-btn">Enroll Now</button>
            </div>
          </Row>
        </Container>
      </section>

      <section className="why-section py-5">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-lg-6 mb-4">
              <h2 className="why-heading">VFX Course in Saravanampatti</h2>
              <p className="why-text">
                Embrace foster career development with the VFX Course in
                Saravanampatti leads to extensive earning opportunities across
                several sectors. Industry-best instructors will educate
                students, graduates, and working professionals with a holistic
                VFX training approach. Unwavering placement preparation equips
                learners with skills and knowledge which are required for
                industry-ready professionals. It helps you develop proficiency
                in various specialized areas, like techniques, storytelling
                principles, and industry-standard digital applications. On top
                of everything, limitless provisions will be accessible at the
                leading VFX training in Coimbatore - Monz Creative School. For
                unlocking essential information, such as available job
                prospects, competitive salaries, and many other details, explore
                the following sections consistently.
              </p>

              <h2 className="why-heading">
                About the VFX Course in Saravanampatti
              </h2>
              <p>
                Learners who are pursuing the VFX and animation course will
                understand techniques and technologies exploited in television,
                games, film, and other media platforms. Develops practical
                skills with composting, special effects, motion graphics, 2D and
                3D animations. Grow under highly experienced trainers who hold
                years of excellent teaching experience in the field. Eventually,
                you will be eligible for designations like animator, character
                designer, storyboard artist, game designer, visual effects
                artist, etc.
              </p>

              <h2 className="why-heading">Monz Creative School Highlights:</h2>
              <p>• Dedicated placement preparation </p>
              <p>• Online/Offline training</p>
              <p>• Career-focused approach</p>
              <p>• Industry-best mentors</p>
              <p>• Broaden job opportunities</p>
              <p>• Accessible multiple provisions</p>
              <p>• Numerous adaptable schedules</p>
              <p>• Certification with industry-recognition</p>
              <p>• Stimulates credibility and job prospects</p>

              <h2 className="why-heading">
                Benefits of a VFX Course in Saravanampatti:
              </h2>
              <p>
                • Those who take the Blender VFX course will master t echnical
                skills from scratch by developing proficiency in every standard
                tool and software.{" "}
              </p>
              <p>
                • Along with all potential perks, the VFX course fees in
                Coimbatore are designed to fit an affordable budget to make
                everything accessible for everyone.
              </p>
              <p>
                • Having proof of completed VFX certificate courses at famous
                institutions makes it simple to attract competitive-earning work
                from diverse sectors.
              </p>
              <p>
                • Investing in the practical VFX training in Coimbatore will
                deliver comprehensive, industry-specific knowledge.
              </p>
              <p>
                • Learners are getting the chance in visual effects classes to
                work on advanced tools and technologies lively.
              </p>
              <p>
                • You can get all other branch locations by the VFX course near
                me and start chasing your passion with the real experts’
                guidance.
              </p>
              <p>
                • Outcomes of the guaranteed placement prep on the VFX animation
                course in Coimbatore make you potential enough to get a job at
                top enterprises easily.
              </p>

              <h2 className="why-heading">Career Paths:</h2>
              <p>
                By completing the VFX Course in Saravanampatti, you will become
                an eligible candidate for the following job roles.
              </p>
              <p>• VFX Artist </p>
              <p>• Lighting Artist</p>
              <p>• Compositor</p>
              <p>• 3D Modeler</p>
              <p>• Technical Director</p>
              <p>• Game Designer</p>
              <p>• Roto Artist</p>
              <p>• Storyboard Artist</p>
              <p>• Motion Graphics Designer</p>
              <p>• Animator</p>

              <h2 className="why-heading">Takeaway</h2>
              <p>
                Overall glance suggests that the VFX Course in Saravanampatti
                leads to overwhelming potential job offers with rewarding
                remunerative. At the stage of training completion, you will get
                excellent placement prep service, authorized certification,
                customized learning options, and many other facilities. Learners
                utilizing the VFX institute near me can help them find these
                services within the shortest distance from their locations. With
                mere registration in the best VFX training in Coimbatore - Monz
                Creative School, grow under industrial experts, regardless of
                any restrictions.
              </p>

              <div className="row g-3 mt-4"></div>
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

      <section className="plecement-marquee-section">
        <h2 className="students-heading">
          UI/UX Design Course in Saravanampatti with Placement
        </h2>

        <div className="students-marquee">
          <div className="marquee-group">
            {[...topRowStudents, ...topRowStudents].map((student, i) => (
              <div className="student-card" key={i}>
                <img
                  src={student.photo}
                  alt={student.name}
                  className="student-photo"
                />
                <div className="student-info">
                  <h4>{student.name}</h4>
                  <p className="package">{student.package}</p>
                  <div className="company">
                    <img src={student.companyLogo} alt={student.company} />
                    <span>{student.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="students-marquee reverse">
          <div className="marquee-group reverse">
            {[...bottomRowStudents, ...bottomRowStudents].map((student, i) => (
              <div className="student-card" key={i}>
                <img
                  src={student.photo}
                  alt={student.name}
                  className="student-photo"
                />
                <div className="student-info">
                  <h4>{student.name}</h4>
                  <p className="package">{student.package}</p>
                  <div className="company">
                    <img src={student.companyLogo} alt={student.company} />
                    <span>{student.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StudentsWork />

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
              <div className="col-12 mt-3"></div>
            </div>
          </div>

          <div className="col-md-6 ps-md-5 mt-4 mt-md-0">
            <h2 className="fw-bold mb-3">
              Become a{" "}
              <span className="head-highlight">Job-Ready VFX Artist.</span>
            </h2>
            <p className="text-muted mb-4">
              Master industry-standard VFX tools, build a powerful showreel &
              kick-start your creative career from anywhere. Learn VFX online
              with shot-based projects and real studio production insights.
            </p>

            <ul className="list-unstyled fs-5">
              <li className="mb-2">
                <i
                  className="bi bi-check-circle-fill me-2"
                  style={{ color: "#f7941d" }}
                ></i>
                AI-Assisted VFX Workflow Integration
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
                Live Classes with Expert Mentorship
              </li>
              <li>
                <i
                  className="bi bi-check-circle-fill me-2"
                  style={{ color: "#f7941d" }}
                ></i>
                Create 20+ Production-Ready VFX Shots for Your Showreel
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="course-coverage-section container my-5">
        <div className="text-center mb-4">
          <h2 className="fw-bold">
            <span className="head-highlight">Course Coverage</span> – Tools &
            Skills You'll Master.
          </h2>
          <p className="text-muted">
            Master industry-standard VFX tools such as Nuke, After Effects,
            Blender, Mocha & AI-powered workflows to build a strong skillset and
            a job-ready VFX showreel.
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
              <h4 className="fw-bold mb-2">
                CERTIFIED IN VFX COMPOSITING (3 Months)
              </h4>
              <p className="fw-semibold text-secondary mb-3">
                Learn the core tools used by every professional compositor:
              </p>

              <div className="d-flex flex-wrap gap-3 mb-4">
                <div className="tool-box text-center">
                  <img
                    src="/tools/ps.png"
                    alt="Photoshop"
                    width="40"
                    height="40"
                  />
                  <p className="fw-semibold mt-2 mb-0">Photoshop</p>
                </div>

                <div className="tool-box text-center">
                  <img
                    src="/tools/ae.png"
                    alt="Illustrator"
                    width="40"
                    height="40"
                  />
                  <p className="fw-semibold mt-2 mb-0">Adobe After Effects</p>
                </div>

                <div className="tool-box text-center">
                  <img
                    src="/tools/pr.png"
                    alt="InDesign"
                    width="40"
                    height="40"
                  />
                  <p className="fw-semibold mt-2 mb-0">Adobe Premiere Pro</p>
                </div>

                <div className="tool-box text-center">
                  <img src="/tools/s.png" alt="Canva" width="40" height="40" />
                  <p className="fw-semibold mt-2 mb-0">Seal</p>
                </div>

                <div className="tool-box text-center">
                  <img
                    src="/tools/au.png"
                    alt="Firefly"
                    width="40"
                    height="40"
                  />
                  <p className="fw-semibold mt-2 mb-0">Adobe Audition</p>
                </div>

                <div className="tool-box text-center">
                  <img
                    src="/tools/blender.png"
                    alt="Midjourney"
                    width="40"
                    height="40"
                  />
                  <p className="fw-semibold mt-2 mb-0">Blender </p>
                </div>
              </div>

              <p className="text-secondary">
                Perfect for beginners who want to build strong design skills and
                a job-ready portfolio.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="course-coverage-section container my-5">
        <div className="text-center mb-4"></div>

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
              <h4 className="fw-bold mb-2">
                MASTER IN VFX & ANIMATION (6 Months)
              </h4>
              <p className="fw-semibold text-secondary mb-3">
                Learn the complete set of tools used by professional VFX and CGI
                artists:
              </p>

              <div className="d-flex flex-wrap gap-3 mb-4">
                <div className="tool-box text-center">
                  <img
                    src="/tools/ps.png"
                    alt="Photoshop"
                    width="40"
                    height="40"
                  />
                  <p className="fw-semibold mt-2 mb-0">Photoshop</p>
                </div>

                <div className="tool-box text-center">
                  <img
                    src="/tools/ae.png"
                    alt="Illustrator"
                    width="40"
                    height="40"
                  />
                  <p className="fw-semibold mt-2 mb-0">Adobe After Effects</p>
                </div>

                <div className="tool-box text-center">
                  <img
                    src="/tools/pr.png"
                    alt="InDesign"
                    width="40"
                    height="40"
                  />
                  <p className="fw-semibold mt-2 mb-0">Adobe Premiere Pro</p>
                </div>

                <div className="tool-box text-center">
                  <img src="/tools/s.png" alt="Canva" width="40" height="40" />
                  <p className="fw-semibold mt-2 mb-0">Seal</p>
                </div>

                <div className="tool-box text-center">
                  <img
                    src="/tools/au.png"
                    alt="Firefly"
                    width="40"
                    height="40"
                  />
                  <p className="fw-semibold mt-2 mb-0">Adobe Audition</p>
                </div>

                <div className="tool-box text-center">
                  <img
                    src="/tools/blender.png"
                    alt="Midjourney"
                    width="40"
                    height="40"
                  />
                  <p className="fw-semibold mt-2 mb-0">Blender </p>
                </div>
              </div>

              <p className="text-secondary">
                Perfect for beginners who want to build strong design skills and
                a job-ready portfolio.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="tools-section py-5">
        <div className="container text-center">
          <h2 className="tools-heading mb-3">Tools Covered</h2>
          <p className="tools-description mb-4">
            Master industry-standard tools used by professional VFX artists to
            create cinematic effects, realistic composites, and high-quality
            visual sequences.
          </p>

          <div className="row justify-content-center">
            <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
              <div className="tool-card">
                <img src="/tools/ps.png" alt="Photoshop" />
                <p>Photoshop</p>
              </div>
            </div>

            <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
              <div className="tool-card">
                <img src="/tools/ae.png" alt="Illustrator" />
                <p>Adobe After Effects</p>
              </div>
            </div>

            <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
              <div className="tool-card">
                <img src="/tools/pr.png" alt="Illustrator" />
                <p>Adobe Premiere pro</p>
              </div>
            </div>

            <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
              <div className="tool-card">
                <img src="/tools/s.png" alt="Illustrator" />
                <p>Seal</p>
              </div>
            </div>

            <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
              <div className="tool-card">
                <img src="/tools/au.png" alt="InDesign" />
                <p>Adobe Audition</p>
              </div>
            </div>

            <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
              <div className="tool-card">
                <img src="/tools/blender.png" alt="InDesign" />
                <p>Blender</p>
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
            <Accordion.Header>
              1. What is the duration of the animation course in Coimbatore?
            </Accordion.Header>
            <Accordion.Body>
              Our animation course at Monz Creative School in Coimbatore
              typically lasts between 3 months to 6 year, depending on the
              program level (basic to advanced). It includes practical training
              on 2D/3D animation, motion graphics, and visual storytelling.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              2. Do I need any prior skills to join the animation course?
            </Accordion.Header>
            <Accordion.Body>
              No prior skills are required! Our course is beginner-friendly and
              designed for students from any background. We teach you from the
              basics of sketching and storyboarding to advanced software like
              Adobe Animate, Maya, and Blender.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              3. What job roles can I get after completing the animation course?
            </Accordion.Header>
            <Accordion.Body>
              After completing the animation course, you can work as a 2D/3D
              Animator, Motion Graphics Artist, Character Designer, Storyboard
              Artist, or VFX Artist. Our placement support team also helps
              connect you with studios, production houses, and freelance
              opportunities.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              4. Is this animation course available online?
            </Accordion.Header>
            <Accordion.Body>
              Yes! We offer both offline classes at our Coimbatore center and
              live instructor-led online sessions. You can choose the learning
              mode that fits your schedule while still receiving the same expert
              guidance and project-based learning.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>
              5. What software will I learn during the animation training?
            </Accordion.Header>
            <Accordion.Body>
              You’ll be trained in industry-standard software like Adobe
              Animate, After Effects, Maya, Blender, and Toon Boom. These tools
              are essential for 2D/3D animation, visual effects, and character
              rigging used in film, TV, and gaming industries.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>
              6. Does the animation course offer placement support?
            </Accordion.Header>
            <Accordion.Body>
              Absolutely! At Monz Creative School, we offer dedicated placement
              assistance including resume building, interview prep, and
              internship opportunities. Many of our students have been
              successfully placed in animation studios, advertising agencies,
              and production companies.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </section>
      <Footer />
    </>
  );
};
export default VfxCourseCoimbatore;

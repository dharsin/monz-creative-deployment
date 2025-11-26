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

const UiUxCourseCoimbatore = () => {
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
            <p className="vfx-tagline">— UI Design + UX Strategy + Interaction Design</p>
            <h1>
              <span className="highlight">UI UX design course </span>in
              saravanampatti
            </h1>
            <p className="vfx-subtitle">
              No.1 ui ux training institute in saravanampatti with 100%
              placement
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
              <h2 className="why-heading">
                UI/UX Design Course in Saravanampatti
              </h2>
              <p className="why-text">
                Looking for an easy yet thriving career? Join the UI UX Design
                Course in Saravanampatti at Monz Creative School to enjoy
                professional coaching services. It can be the best learning
                institution to utilize UI UX online courses with certificate,
                which offer job security for learners. They can chase their
                dream regardless of their core field in this environment and are
                expected to earn lucratively. Moreover, trainers are also
                meticulously hired in order to maintain the service of
                excellence and prepare youngsters for a bright future with
                unwavering support. To learn about other available perks and
                outstanding services, enroll at this popular UI UX Design
                Training Institute in Saravanampatti.
              </p>

              <h2 className="why-heading">
                About the UI UX Design Course in Saravanampatti
              </h2>
              <p>
                Students learning the UI UX Design Course in Saravanampatti will
                gain knowledge of the principles and usage of user interface
                design for developing digital applications and websites. They
                will know how to design an engaging, user-friendly, and visually
                pleasing interface. Expert-led syllabus of Courses for UI UX
                design will educate on theoretical and practical sessions to
                develop a deep insight into the field. Learners can explore
                plenty of provisions, facilities, and services under a single
                roof. Therefore, join the UI UX Designer Training in
                Saravanampatti as soon as possible to secure a position among
                the limited seats.
              </p>

              <h2 className="why-heading">Monz Creative School Services:</h2>

              <p>• Advanced tech campus </p>
              <p>• Cutting-edge tools and technologies</p>
              <p>• Personalised staff support</p>
              <p>• Accessible well-equipped resources</p>
              <p>• Develop professional networks</p>
              <p>• Extensive job opportunities</p>
              <p>• Industry-best instructors</p>
              <p>• Exceptional placement prep</p>

              <h2 className="why-heading">
                Benefits of the UI UX Design Course in Saravanampatti:
              </h2>

              <p>
                • Holistic mentorship of the UI UX designer classes is centered
                on delivering in-depth practical knowledge on real-world
                projects.{" "}
              </p>
              <p>
                • Creating demand for your skill after the User experience
                design courses, especially in sectors like education,
                healthcare, finance, technology, etc.{" "}
              </p>
              <p>
                • Earning certification and placement assistance is common for
                those who do the UI UX design course online at the training
                completion.
              </p>
              <p>
                • Boosting employability is simple with the UI UX design
                certification keeps your future more secure and thriving.
              </p>
              <p>
                • Personalised talented faculty’s coaching will allow you to
                learn UI UX design in the best possible way.
              </p>
              <p>
                • Learners will see multiple UI UX design programs due to offer
                the greatest insight without any restrictions or inconvenience.
              </p>
              <p>
                • It is not limited to a particular profession but also extends
                knowledge on the web design course or something else in this
                single learning platform.
              </p>

              <h2 className="why-heading">Employment Opportunities:</h2>
              <p>
                An in-depth understanding of the UI and UX designer course
                training makes you eligible for the listed promising job roles
                in the future.
              </p>
              <p>
                <b>UI Designer</b>
              </p>

              <p>
                The UI Designer’s ideal job is to enhance visual and interactive
                elements in a product interface, preserving a user-friendly
                experience.
              </p>
              <p>
                <b>UX Designer</b>
              </p>

              <p>
                By mastering user needs, designing with intuitive details, and
                using metrics to boost audience engagement, building digitalized
                products.
              </p>
              <p>
                <b>Interaction Designer</b>
              </p>

              <p>
                Constructing design interaction in order to maintain an
                effective connection between digital products and users with
                precision details to stimulate socialization.
              </p>
              <p>
                <b>Product Designer</b>
              </p>

              <p>
                From assessment to product lifecycle implementation, a
                professional needs to take charge of functionality, product
                form, and touchpoints development.
              </p>
              <p>
                <b>UX Writer</b>
              </p>

              <p>
                The main task of the content creation encompasses copy and
                interface texts for web experiences and products.
              </p>
              <p>
                <b>Usability Tester</b>
              </p>

              <p>
                Experts in the field ideally work to track real users’ behaviors
                and interactions with websites, software products, and
                applications to optimize effectiveness and user-friendliness.
              </p>

              <h2 className="why-heading">Conclusion</h2>
              <p>
                Registering for the UI UX Design Course in Saravanampatti can
                remain your career milestone and guide you with industrial
                specialists. They have extensive knowledge in teaching and
                cultivating in-demand skills for learners with different
                knowledge levels. It is possible to study the Web Designing
                Course in Saravanampatti or develop skills in any other
                specialized areas. Therefore, join Monz Creative School - the
                famous UI UX Design Training Institute in Saravanampatti for an
                affordable fee.
              </p>

              <div className="row g-3 mt-4"></div>
            </div>

            <div className="col-lg-5">
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
              <span className="head-highlight">
              B Job-Ready UI/UX Designer.
              </span>
            </h2>
            <p className="text-muted mb-4">
            Master top UI/UX tools, build a professional design portfolio & launch your creative career from anywhere. Learn user-centered design online with hands-on projects and real industry practices.
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
            <span className="head-highlight">Course Coverage</span> Tools & Skills You'll Master
          </h2>
          <p className="text-muted">
          Master Figma, Adobe XD, Photoshop, prototyping tools & AI-assisted design systems to build strong UI/UX skills and a job-ready portfolio.
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
              CERTIFIED IN UI/UX DESIGN (3 Months)
              </h4>
              <p className="fw-semibold text-secondary mb-3">
              Learn the core tools used by every professional UI/UX designer:
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
              Perfect for beginners who want to build strong UI/UX fundamentals, wireframes, prototypes, and a job-ready portfolio..
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
              <h4 className="fw-bold mb-2">MASTER IN UI/UX DESIGN (6 Months)</h4>
              <p className="fw-semibold text-secondary mb-3">
              Learn the advanced tools used by professional UI/UX and Product Designers:
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
          Perfect for learners who want to master end-to-end VFX production, including compositing, tracking, rotoscoping, 3D integration, and build a professional, studio-ready VFX showreel with real production shots. </p>

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
export default UiUxCourseCoimbatore;

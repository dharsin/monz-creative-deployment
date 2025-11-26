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

const SapCourseCoimbatore = () => {
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
              <span className="highlight">SAP Course  </span>in
              saravanampatti
            </h1>
            <p className="vfx-subtitle">
            No.1 sap training institute in coimbatore with 100% placement
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
              SAP Course in Coimbatore
              </h2>
              <p className="why-text">  
Learners who decide to pursue the SAP Course in Coimbatore will acquire high earning potential. It is suitable for everyone, even beginners with no experience, due to offering chances to embrace faster professional growth. On top of everything, trainers and coaching services are essential to evaluate. Therefore, join the reputed SAP Training Institute in Coimbatore - Monz Creative School and learn from industrial experts. They will guide you by bringing knowledge and skills that have been gained from many years of real-world service. Limitless provisions will support you in the future, so you can explore them one by one in the following.
              </p>

              <h2 className="why-heading">
              About The SAP Course in Coimbatore
              </h2>
<p>
Instructors are highly experienced at this popular SAP Training Institute in Coimbatore to offer comprehensive skill development. Their job-oriented approach gives real-time job experience in advance. This means students can get an overall idea regarding their future designations, including every nook. It can play a major role in their promotions and contribute more efficiently from the beginning in an organisation.</p>

<h2 className="why-heading">
SAP Modules: </h2>

<p>Aspirants should know about the types of modules prior to joining the SAP Course in Coimbatore to pick the right career path.
</p>
<p><b>SAP Basic</b></p>

<p>It is essential to pursue this module from the reputed SAP training center in Coimbatore for learning from experts. They will guide on how to work in the underlying technical environment according to specific industries.
</p>
<p><b>SAP MM</b></p>

<p>Learners who choose this module will understand the SAP for supply chain management from scratch. It lets them gain knowledge of overall inventory processes from planning to payment.
</p>
<p><b>SAP FICO</b></p>

<p>To unravel information from finances and transaction history, choosing the SAP fico course is the perfect module for students. Corporations get assistance to make better decisions, understand cost behaviour, and improve their finances eventually.
</p>
<p><b>SAP ABAP</b></p>

<p>People who prefer to complete the SAP certification course can aid in optimising the system based on a specific firm's requirements. It is a popular programming language, allowing to achieve improved outcomes.
</p>
<p><b>SAP PP</b></p>

<p>Deciding to learn SAP Course online with specialisation in production planning lets you work in the manufacturing, logistics, and consulting sectors. You will know how to target smooth and efficient production.
</p>
<p><b>SAP PM</b></p>

<p>Virtual coaching of the instructors on the SAP software training online makes you excel at achieving a streamlined process while reducing costs and resource allocation. This career path creates maintenance managers, solution architects, asset management analysts, etc.
</p>


<h2 className="why-heading">
Key Features of Monz Creative School:   </h2>
<p>• One-on-one training </p>
<p>• r-based curriculum</p>
<p>• ical learning facility</p>
<p>• sible modern tools & technologies</p>
<p>• t mentorship</p>
<p>• anding placement prep</p>
<p>• tes students, professionals, & graduates</p>
<p>• support for project completion</p>
<p>• time work experience</p>
<p>• rised unlimited credentials</p>

 <h2 className="why-heading">
 Benefits of the SAP Course in Coimbatore:   </h2>
<p>• Students can only pursue the SAP course in Coimbatore with placement assistance at Monz Creative School, expanding their career prospects. </p>
<p>• Expert-led SAP training and certification improve your potential to make you eligible for an industry-best pay scale. </p>
<p>• Hands-on learning of SAP classes in Coimbatore boosts your confidence by offering an advanced glance at the overall on-site duties. </p>
<p>• Attracting promising jobs is simple with the SAP developer certification from various sectors. </p>
<p>• An in-depth understanding of finance management through SAP FICO training leads to increased earning potential effortlessly. </p>
<p>• Countless provisions of the SAP Institute in Coimbatore remain the backbone of learners' significant progress in professional life. </p>


  <h2 className="why-heading">
  Career Opportunities:   </h2>
<p>Acknowledgement of the SAP certification makes you eligible for the following highly recognised designations.
</p>
<p><b>SAP Consultant</b></p>

<p>The ideal job involves creating and customising SAP systems after gathering clients' needs, designing solutions, and achieving seamless functioning within organisations.
</p>
<p><b>SAP Project Manager</b></p>

<p>People with leadership, communication, and organisational skills are perfect for this job role.
</p>
<p><b>SAP ABAP Developer</b></p>

<p>The major duty of developing and tailoring programs within the SAP system is carried out by the SAP ABAP developer to keep it working efficiently.
</p>
<p><b>SAP Functional Specialist</b></p>

<p>It focuses on any one SAP module, including Finance (FICO), Material Management (MM), and Sales and Distribution (SD).
</p>
<p><b>SAP Business Analyst</b></p>

<p>The main task is centred on analysing business processes and addressing areas where improvement is needed to integrate with SAP solutions to enhance operations.
</p>
<p><b>SAP Trainer
</b></p>
<p>As a professional, you will be concentrated on teaching others how to leverage the SAP system in the best possible way.
</p>
<p><b>SAP Support Specialist</b></p>

<p>Supporting SAP users technically assists in troubleshooting issues and targets smooth operations effortlessly.
</p>  

<h2 className="why-heading">
Conclusion  </h2>
<p>
Young talents might approach the SAP Course in Coimbatore to unleash greater financial and career opportunities. It does not ask for prior experience or high-level requirements to embark on a rewarding journey in the future. This is a different career path, allows students, graduates, and professionals with different levels to seek noticeable progress professionally. If you are one of those categories, then sign up at this reputed SAP Training Institute in Coimbatore immediately to kickstart the training program.</p>
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
              <span className="head-highlight">
              Job-Ready SAP Professional
              </span>
            </h2>
            <p className="text-muted mb-4">
            Master SAP ERP modules, SAP S/4HANA tools, data management systems, and AI-assisted workflows to build strong SAP skills and a job-ready implementation portfolio.  </p>

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
              CERTIFIED IN SAP (3 Months)
              </h4>
              <p className="fw-semibold text-secondary mb-3">
              Learn the core tools and modules used by every professional SAP consultant:
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
              Perfect for beginners who want to build strong SAP fundamentals, understand real business processes, and prepare for an entry-level SAP job role. </p>
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
              <h4 className="fw-bold mb-2">MASTER IN SAP (6 Months)</h4>
              <p className="fw-semibold text-secondary mb-3">
              Learn the advanced tools and modules used by SAP Consultants & Implementation Specialists:
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
          Perfect for learners who want to master end-to-end SAP implementation, including configuration, customization, business process mapping, data management, and build a professional, job-ready SAP consultant portfolio with real industry case studies. </p>


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
export default SapCourseCoimbatore;

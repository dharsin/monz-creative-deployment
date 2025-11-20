import React, { useEffect, useRef } from "react";
import { Container, Row, Col, Button, Form, Card, Nav } from "react-bootstrap";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { FaQuoteRight } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../homepage.css";

import BranchAccordion from "../components/BranchAccordion";
import Footer from "../components/Footer";

export default function HomePage() {
  const { scrollY } = useScroll();
  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: false, amount: 0.3 });

  const bgY = useTransform(scrollY, [0, 800], [0, 200]);
  const textY = useTransform(scrollY, [0, 600], [0, -100]);
  const yPos = useTransform(scrollY, [0, 500], [0, -100]);
  const whyBgY = useTransform(scrollY, [0, 800], ["0%", "30%"]);

  const topLogos = [
    "/companies-logo/1.svg",
    "/companies-logo/2.svg",
    "/companies-logo/3.svg",
    "/companies-logo/4.svg",
    "/companies-logo/5.svg",
    "/companies-logo/6.svg",
    "/companies-logo/7.svg",
    "/companies-logo/8.svg",
    "/companies-logo/9.svg",
    "/companies-logo/10.svg"
  ];

  const bottomLogos = [
    "/companies-logo/21.svg",
    "/companies-logo/22.svg",
    "/companies-logo/11.svg",
    "/companies-logo/12.svg",
    "/companies-logo/13.svg",
    "/companies-logo/14.svg",
    "/companies-logo/15.svg",
    "/companies-logo/16.svg",
    "/companies-logo/17.svg",
    "/companies-logo/20.svg"

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
      {/* ======= Banner Section ======= */}
      <section className="banner-section">
        <motion.div
          className="banner-bg"
          style={{
            y: bgY,
            backgroundImage:
              "url('https://monzcreativeschool.com/assets/images/banner/banner-1.webp')",
          }}
        ></motion.div>

        <Container className="banner-content text-center">
          <Row>
            <Col>
              <motion.h1
                style={{ y: textY }}
                initial={{ opacity: 0, y: -60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              ></motion.h1>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="about-section">
        <motion.video
          className="about-bg-video"
          src="/aboutbgvideo.mp4"
          autoPlay
          muted
          loop
          playsInline
          style={{ y: yPos }}
        ></motion.video>

        <div className="about-overlay"></div>

        <Container>
          <Row className="align-items-center">
            <Col lg={6} md={12} className="about-tsection">
              <h2>
                About Monz Creative School <br />
                Shaping <span className="highlight">Creative Futures</span>
              </h2>
            </Col>

            <Col lg={6} md={12} className="about-content-section">
              <p>
                Since 2009, Monz Creative School has been at the forefront of
                animation and digital media education in India. We transform
                passionate individuals into industry-ready professionals.
                <br />
                <br />
                Our comprehensive programs, expert faculty, and strong industry
                connections ensure that every student receives world-class
                training in animation, VFX, game design, and digital arts.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ======= Enquiry Section ======= */}

      <section className="enquiry-section">
        <div className="parallax-bg"></div>
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <div className="video-wrapper">
                <video
                  className="enquiry-video"
                  src="/boyvideo3.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                ></video>
              </div>
            </Col>

            {/* Right Side - Animated Form */}
            <Col md={6}>
              <motion.div
                ref={formRef}
                initial={{ opacity: 0, x: 100, y: 50 }}
                animate={
                  isInView
                    ? { opacity: 1, x: 0, y: 0 }
                    : { opacity: 0, x: 100, y: 50 }
                }
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="form-box p-4"
              >
                <h3 className="form-title">Fill the Form Now!</h3>
                <h2 className="discount-text">Grab Your 30% Discount</h2>

                <Form className="hero-form">
                  <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Enter Your Name" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="tel"
                      placeholder="Enter Mobile Number"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="email"
                      placeholder="Enter Your Email Id"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Enter Your Interested Course"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Select>
                      <option>Select Your Branch</option>
                      <option>Coimbatore</option>
                      <option>Chennai</option>
                      <option>Bangalore</option>
                      <option>Hyderabad</option>
                    </Form.Select>
                  </Form.Group>
                  <Button className="submit-btn w-100" type="submit">
                    Submit
                  </Button>
                </Form>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="monz-why-section">
        <div className="monz-why-overlay"></div>

        <Container className="monz-why-container">
          <Row className="text-center mb-5">
            <Col>
              <h2 className="monz-why-title">
                Why Choose Monz Creative School?
              </h2>
              <p className="monz-why-subtitle">
                Where imagination meets innovation — we empower students with
                creative thinking, technical mastery, and professional
                excellence.
              </p>
            </Col>
          </Row>

          <Row className="gy-4">
            {[
              {
                title: "Creative Mentors",
                text: "Guided by experienced artists who inspire imagination and help you grow real creative skills.",
              },
              {
                title: "Real Industry Projects",
                text: "Get hands-on experience by working on live projects from real-world creative studios.",
              },
              {
                title: "Career Launchpad",
                text: "100% placement assistance with personalized portfolio building and interview preparation.",
              },
              {
                title: "State-of-the-Art Labs",
                text: "Learn in modern classrooms equipped with the latest design and production technologies.",
              },
              {
                title: "Creative Mindset",
                text: "We don’t just teach software — we train your mind to think like a true creator.",
              },
              {
                title: "Global Perspective",
                text: "Stay ahead with exposure to global design trends and international creative standards.",
              },
            ].map((item, i) => (
              <Col lg={4} md={6} key={i}>
                <motion.div
                  className="monz-why-card"
                  whileHover={{ scale: 1.05, y: -8 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <div className="monz-why-icon">
                    <i className="fa-solid fa-palette"></i>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section className="creative-courses py-5">
        <Container>
          <h2 className="text-center mb-5 fw-bold">Our Creative Courses</h2>
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={3}
            navigation
            loop={true}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            }}
          >
            {/* === VFX & Animation === */}
            <SwiperSlide>
              <div className="course-card">
                <img
                  src="https://monzcreativeschool.com/assets/images/banner/popular-courses/vfx.png"
                  alt="VFX & Animation"
                  className="course-img"
                />
                <h3>Master in VFX</h3>
                <div className="tools">
                  {[
              
                  ].map((src, i) => (
                    <img key={i} src={src} alt={`Tool ${i + 1}`} />
                  ))}
                </div>
                <p>Duration: 12 Months</p>
                <Button variant="warning">Enquire Now</Button>
              </div>
            </SwiperSlide>

            {/* === AR / VR Design === */}
            <SwiperSlide>
              <div className="course-card">
                <img
                  src="https://monzcreativeschool.com/assets/images/banner/popular-courses/graphic-design.png"
                  alt="AR / VR Design"
                  className="course-img"
                />
                <h3>Master in Graphic Design</h3>
                <div className="tools">
                  {[
                    
                   "/tools/ps.png",
                   "/tools/ai.png",
                   "/tools/coreldraw.png",
                   "/tools/dimension.png",
                   "/tools/id.png",
                   "/tools/xd.png",
                   "/tools/pr.png",
                   "/tools/ae.png",
                   "/tools/au.png",
                   "/tools/figma.png",
                  ].map((src, i) => (
                    <img key={i} src={src} alt={`Tool ${i + 1}`} />
                  ))}
                </div>
                <p>Duration: 6 Months</p>
                <Button variant="warning">Enquire Now</Button>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="course-card">
                <img
                  src="https://monzcreativeschool.com/assets/images/banner/popular-courses/motion-graphic.png"
                  alt="Multimedia & Motion Graphics"
                  className="course-img"
                />
                <h3>Master in UI/UX Design</h3>
                <div className="tools">
                  {[
                       "/tools/ps.png",
                       "/tools/ai.png",
                       "/tools/coreldraw.png",
                       "/tools/dimension.png",
                       "/tools/id.png",
                       "/tools/xd.png",
                       "/tools/pr.png",
                       "/tools/ae.png",
                       "/tools/au.png",
                       "/tools/figma.png",
                       "/tools/image.png",
                       "/tools/js.png",
                       "/tools/hmtl.png",
                       "/tools/bootstrap.png",
                       "/tools/css.png",

                  ].map((src, i) => (
                    <img key={i} src={src} alt={`Tool ${i + 1}`} />
                  ))}
                </div>
                <p>Duration: 6 Months</p>
                <Button variant="warning">Enquire Now</Button>
              </div>
            </SwiperSlide>

                  

            <SwiperSlide>
              <div className="course-card">
                <img
                  src="https://monzcreativeschool.com/assets/images/banner/popular-courses/graphic-design.png"
                  alt="Multimedia & Motion Graphics"
                  className="course-img"
                />
                <h3>Master in Game Design</h3>
                <div className="tools">
                  {[
                       "/tools/ps.png",
                       "/tools/blender.png",
                       "/tools/pr.png",
                       "/tools/m.png",
                       "/tools/s.png",
                       "/tools/u.png",
                       "/tools/python.png",
                       "/tools/z.png",
                       "/tools/c++.png",
                  ].map((src, i) => (
                    <img key={i} src={src} alt={`Tool ${i + 1}`} />
                  ))}
                </div>
                <p>Duration: 9 Months</p>
                <Button variant="warning">Enquire Now</Button>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="course-card">
                <img
                  src="https://monzcreativeschool.com/assets/images/banner/popular-courses/graphic-design.png"
                  alt="Multimedia & Motion Graphics"
                  className="course-img"
                />
                <h3>Master in Digital Marketing</h3>
                <div className="tools">
                  {[
                 
                  ].map((src, i) => (
                    <img key={i} src={src} alt={`Tool ${i + 1}`} />
                  ))}
                </div>
                <p>Duration: 9 Months</p>
                <Button variant="warning">Enquire Now</Button>
              </div>
            </SwiperSlide>

            

            <SwiperSlide>
              <div className="course-card">
                <img
                  src="https://monzcreativeschool.com/assets/images/banner/popular-courses/graphic-design.png"
                  alt="Multimedia & Motion Graphics"
                  className="course-img"
                />
                <h3>Master in SAP</h3>
                <div className="tools">
                  {[
                  
                  ].map((src, i) => (
                    <img key={i} src={src} alt={`Tool ${i + 1}`} />
                  ))}
                </div>
                <p>Duration: 9 Months</p>
                <Button variant="warning">Enquire Now</Button>
              </div>
            </SwiperSlide>


            <SwiperSlide>
              <div className="course-card">
                <img
                  src="https://monzcreativeschool.com/assets/images/banner/popular-courses/graphic-design.png"
                  alt="Multimedia & Motion Graphics"
                  className="course-img"
                />
                <h3>Master in Animation</h3>
                <div className="tools">
                  {[
                   "/tools/ps.png",
                   "/tools/blender.png",
                   "/tools/pr.png",
                   "/tools/ae.png",
                   "/tools/au.png",
                   "/tools/s.png",
                   "/tools/u.png",
                   "/tools/m.png",

                 
                  ].map((src, i) => (
                    <img key={i} src={src} alt={`Tool ${i + 1}`} />
                  ))}
                </div>
                <p>Duration: 9 Months</p>
                <Button variant="warning">Enquire Now</Button>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="course-card">
                <img
                  src="https://monzcreativeschool.com/assets/images/banner/popular-courses/graphic-design.png"
                  alt="Multimedia & Motion Graphics"
                  className="course-img"
                />
                <h3>Master in Architectural Design</h3>
                <div className="tools">
                  {[
          
                  ].map((src, i) => (
                    <img key={i} src={src} alt={`Tool ${i + 1}`} />
                  ))}
                </div>
                <p>Duration: 9 Months</p>
                <Button variant="warning">Enquire Now</Button>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="course-card">
                <img
                  src="https://monzcreativeschool.com/assets/images/banner/popular-courses/graphic-design.png"
                  alt="Multimedia & Motion Graphics"
                  className="course-img"
                />
                <h3>Master in AR/VR</h3>
                <div className="tools">
                  {[
                      "/tools/blender.png",
                      "/tools/u.png",
                      "/tools/s.png",
                      "/tools/c++.png",
                      "/tools/python.png",
                      "/tools/pr.png",
                      "/tools/au.png",
                      "/tools/m.png",
   
                  ].map((src, i) => (
                    <img key={i} src={src} alt={`Tool ${i + 1}`} />
                  ))}
                </div>
                <p>Duration: 9 Months</p>
                <Button variant="warning">Enquire Now</Button>
              </div>
            </SwiperSlide>
          </Swiper>
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

 <section className="students-gallery-section">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={10}>
              <h2 className="students-gallery-heading">
                Our Students’ Work Gallery
              </h2>
              <p className="students-gallery-subtext">
                A glimpse of our talented students’ projects — creative,
                innovative, and inspiring.
              </p>
            </Col>
          </Row>
        </Container>

        <Row className="justify-content-center mt-4">
          <Col lg={12} md={10} sm={12}>
            <div className="students-gallery-image-wrapper">
              <img
                src="https://www.animaster.com/wp-content/uploads/2022/12/animation-gallery.jpg"
                alt="Students Work Collage"
                className="students-gallery-image"
              />
            </div>
          </Col>
        </Row>
      </section>
      <section className="testimonial-section">
  <div className="testimonial-overlay"></div>
  <h2>What Our Students Say</h2>

  <div className="testimonial-grid">
    
    {/* 1 */}
    <div className="testimonial-card">
      <div className="image-wrapper">
        <img
          src="https://cdn-icons-png.flaticon.com/512/848/848006.png"
          alt="profile"
        />
        <div className="quote-icon">
          <FaQuoteRight />
        </div>
      </div>
      <p>
        “Studying at Monz Creative School has completely transformed my
        confidence. The trainers are supportive, and the teaching methods are
        very practical and industry-focused.”
      </p>
      <div className="star-rating">
        {[...Array(5)].map((_, i) => (
          <AiFillStar key={i} />
        ))}
      </div>
      <h3>Priya Chandran</h3>
      <span>UI/UX Student</span>
    </div>

    {/* 2 */}
    <div className="testimonial-card">
      <div className="image-wrapper">
        <img
          src="https://cdn-icons-png.flaticon.com/512/848/848006.png"
          alt="profile"
        />
        <div className="quote-icon">
          <FaQuoteRight />
        </div>
      </div>
      <p>
        “The motion graphics training here is truly next-level. The hands-on
        sessions helped me understand practical workflows used in real studios.”
      </p>
      <div className="star-rating">
        {[...Array(5)].map((_, i) => (
          <AiFillStar key={i} />
        ))}
      </div>
      <h3>Arun Kumar</h3>
      <span>Motion Graphics Student</span>
    </div>

    {/* 3 */}
    <div className="testimonial-card">
      <div className="image-wrapper">
        <img
          src="https://cdn-icons-png.flaticon.com/512/848/848006.png"
          alt="profile"
        />
        <div className="quote-icon">
          <FaQuoteRight />
        </div>
      </div>
      <p>
        “The VFX course at Monz Creative School is well-structured. The
        studio-style environment and guidance helped me build a strong
        professional portfolio.”
      </p>
      <div className="star-rating">
        {[...Array(5)].map((_, i) => (
          <AiFillStar key={i} />
        ))}
      </div>
      <h3>Divya Ramesh</h3>
      <span>VFX Student</span>
    </div>

    {/* 4 */}
    <div className="testimonial-card">
      <div className="image-wrapper">
        <img
          src="https://cdn-icons-png.flaticon.com/512/848/848006.png"    
          alt="profile"
        />
        <div className="quote-icon">
          <FaQuoteRight />
        </div>
      </div>
      <p>
        “The video editing course is incredibly detailed. The mentors explain
        everything clearly, and I gained the confidence to work on client
        projects.”
      </p>
      <div className="star-rating">
        {[...Array(5)].map((_, i) => (
          <AiFillStar key={i} />
        ))}
      </div>
      <h3>Sanjay Prakash</h3>
      <span>Video Editing Student</span>
    </div>

    {/* 5 */}
    <div className="testimonial-card">
      <div className="image-wrapper">
        <img
          src="https://cdn-icons-png.flaticon.com/512/848/848006.png"    
          alt="profile"
        />
        <div className="quote-icon">
          <FaQuoteRight />
        </div>
      </div>
      <p>
        “Monz Creative School has an inspiring atmosphere. The design feedback
        sessions helped me improve my creativity and design thinking skills.”
      </p>
      <div className="star-rating">
        {[...Array(5)].map((_, i) => (
          <AiFillStar key={i} />
        ))}
      </div>
      <h3>Keerthana Murali</h3>
      <span>Graphic Design Student</span>
    </div>

    {/* 6 */}
    <div className="testimonial-card">
      <div className="image-wrapper">
        <img
          src="https://cdn-icons-png.flaticon.com/512/848/848006.png"    
          alt="profile"
        />
        <div className="quote-icon">
          <FaQuoteRight />
        </div>
      </div>
      <p>
        “The portfolio review sessions were extremely useful. Because of Monz
        guidance, I secured an internship faster than expected.”
      </p>
      <div className="star-rating">
        {[...Array(5)].map((_, i) => (
          <AiFillStar key={i} />
        ))}
      </div>
      <h3>Vikram Raj</h3>
      <span>Animation Student</span>
    </div>

  </div>
</section>


 <section className="cta-section text-center">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <h2 className="cta-heading">
                Ready to Start Your Creative Journey?
              </h2>
              <p className="cta-subtext">
                Join thousands of successful students who transformed their
                careers with us
              </p>
              <div className="cta-buttons">
                <Button variant="dark" size="lg" className="cta-btn-dark">
                  View all Courses
                </Button>
                <Button variant="light" size="lg" className="cta-btn-light">
                  Book Free Demo
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
</section>

      <BranchAccordion />
      <Footer />
    </>
  );
}

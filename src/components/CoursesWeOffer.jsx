import React from "react";
import "./css/CoursesWeOffer.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import EnquireNow from "../components/EnquiryForm";

const CoursesWeOffer = () => {
  return (
    <section>
      <h2 className="course-section-title text-center mb-4">Courses we offer</h2>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={3}
            className="courses-swiper"
          >
            <SwiperSlide>
              <div className="course-card">
                <img
                  src="https://monzcreativeschool.com/assets/images/banner/popular-courses/vfx.png"
                  alt="VFX"
                  className="course-img"
                />
                <h3>Master in VFX</h3>
                <div className="tools-grid">
                  <img src="https://store-images.s-microsoft.com/image/apps.37986.9007199266243449.6a5fb325-8ac1-4fc1-99bf-2213582c1b13.7716d94e-8db9-4486-9ab0-d75bbad3039a?h=210"
                    alt="Sketch" />
                  <img src="/images/tools/fabric.png" alt="Fabric" />
                  <img src="/images/tools/needle.png" alt="Needle" />
                  <img src="/images/tools/thread.png" alt="Thread" />
                  <img src="/images/tools/scissors.png" alt="Scissors" />
                  <img src="/images/tools/tape.png" alt="Tape" />
                  <img src="/images/tools/yarn.png" alt="Yarn" />
                  <img src="/images/tools/pencil.png" alt="Pencil" />
                  <img src="/images/tools/brush.png" alt="Brush" />
                  <img src="/images/tools/palette.png" alt="Palette" />
                  <img src="/images/tools/paper.png" alt="Paper" />
                  <img src="/images/tools/button.png" alt="Button" />
                  <img src="/images/tools/fashion.png" alt="Fashion" />
                </div>
                <p>Duration: 12 Months</p>
                <EnquireNow />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="course-card">
                <img
                  src="https://monzcreativeschool.com/assets/images/banner/popular-courses/graphic-design.png"
                  alt="Graphic Design"
                  className="course-img"
                />
                <h3>Master in Graphic Design</h3>
                <div className="tools-grid">
                  <img src="/images/tools/fabric.png" alt="Fabric" />
                  <img src="/images/tools/thread.png" alt="Thread" />
                  <img src="/images/tools/yarn.png" alt="Yarn" />
                  <img src="/images/tools/needle.png" alt="Needle" />
                  <img src="/images/tools/scissors.png" alt="Scissors" />
                  <img src="/images/tools/tape.png" alt="Tape" />
                  <img src="/images/tools/pencil.png" alt="Pencil" />
                  <img src="/images/tools/paper.png" alt="Paper" />
                  <img src="/images/tools/brush.png" alt="Brush" />
                  <img src="/images/tools/palette.png" alt="Palette" />
                  <img src="/images/tools/sketch.png" alt="Sketch" />
                  <img src="/images/tools/button.png" alt="Button" />
                  <img src="/images/tools/fashion.png" alt="Fashion" />
                </div>
                <p>Duration: 10 Months</p>
                <EnquireNow />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="course-card">
                <img
                  src="https://monzcreativeschool.com/assets/images/banner/popular-courses/graphic-design.png"
                  alt="UI/UX"
                  className="course-img"
                />
                <h3>Master in UI/UX Design</h3>
                <div className="tools-grid">
                  <img src="/images/tools/sketch.png" alt="Sketch" />
                  <img src="/images/tools/pencil.png" alt="Pencil" />
                  <img src="/images/tools/brush.png" alt="Brush" />
                  <img src="/images/tools/palette.png" alt="Palette" />
                  <img src="/images/tools/paper.png" alt="Paper" />
                  <img src="/images/tools/thread.png" alt="Thread" />
                  <img src="/images/tools/fabric.png" alt="Fabric" />
                  <img src="/images/tools/yarn.png" alt="Yarn" />
                  <img src="/images/tools/scissors.png" alt="Scissors" />
                  <img src="/images/tools/button.png" alt="Button" />
                  <img src="/images/tools/tape.png" alt="Tape" />
                  <img src="/images/tools/needle.png" alt="Needle" />
                  <img src="/images/tools/fashion.png" alt="Fashion" />
                </div>
                <p>Duration: 9 Months</p>
                <EnquireNow />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="course-card">
                <img
                  src="https://monzcreativeschool.com/assets/images/banner/popular-courses/motion-graphic.png"
                  alt="Motion Graphics"
                  className="course-img"
                />
                <h3>Master in Motion Graphics</h3>
                <div className="tools-grid">
                  <img src="/images/tools/fabric.png" alt="Fabric" />
                  <img src="/images/tools/thread.png" alt="Thread" />
                  <img src="/images/tools/yarn.png" alt="Yarn" />
                  <img src="/images/tools/needle.png" alt="Needle" />
                  <img src="/images/tools/scissors.png" alt="Scissors" />
                  <img src="/images/tools/tape.png" alt="Tape" />
                  <img src="/images/tools/pencil.png" alt="Pencil" />
                  <img src="/images/tools/paper.png" alt="Paper" />
                  <img src="/images/tools/brush.png" alt="Brush" />
                  <img src="/images/tools/palette.png" alt="Palette" />
                  <img src="/images/tools/sketch.png" alt="Sketch" />
                  <img src="/images/tools/button.png" alt="Button" />
                  <img src="/images/tools/fashion.png" alt="Fashion" />
                </div>
                <p>Duration: 11 Months</p>
                <EnquireNow />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="course-card">
                <img
                  src="https://monzcreativeschool.com/assets/images/banner/popular-courses/game.png"
                  alt="Game Design"
                  className="course-img"
                />
                <h3>Master in Game Design</h3>
                <div className="tools-grid">
                  <img src="/images/tools/sketch.png" alt="Sketch" />
                  <img src="/images/tools/fabric.png" alt="Fabric" />
                  <img src="/images/tools/needle.png" alt="Needle" />
                  <img src="/images/tools/thread.png" alt="Thread" />
                  <img src="/images/tools/scissors.png" alt="Scissors" />
                  <img src="/images/tools/tape.png" alt="Tape" />
                  <img src="/images/tools/yarn.png" alt="Yarn" />
                  <img src="/images/tools/pencil.png" alt="Pencil" />
                  <img src="/images/tools/brush.png" alt="Brush" />
                  <img src="/images/tools/palette.png" alt="Palette" />
                  <img src="/images/tools/paper.png" alt="Paper" />
                  <img src="/images/tools/button.png" alt="Button" />
                  <img src="/images/tools/fashion.png" alt="Fashion" />
                </div>
                <p>Duration: 12 Months</p>
                <EnquireNow />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="course-card">
                <img
                  src="https://monzcreativeschool.com/assets/images/banner/popular-courses/digital.png"
                  alt="Digital Marketing"
                  className="course-img"
                />
                <h3>Master in Digital Marketing</h3>
                <div className="tools-grid">
                  <img src="/images/tools/fabric.png" alt="Fabric" />
                  <img src="/images/tools/thread.png" alt="Thread" />
                  <img src="/images/tools/yarn.png" alt="Yarn" />
                  <img src="/images/tools/needle.png" alt="Needle" />
                  <img src="/images/tools/scissors.png" alt="Scissors" />
                  <img src="/images/tools/tape.png" alt="Tape" />
                  <img src="/images/tools/pencil.png" alt="Pencil" />
                  <img src="/images/tools/paper.png" alt="Paper" />
                  <img src="/images/tools/brush.png" alt="Brush" />
                  <img src="/images/tools/palette.png" alt="Palette" />
                  <img src="/images/tools/sketch.png" alt="Sketch" />
                  <img src="/images/tools/button.png" alt="Button" />
                  <img src="/images/tools/fashion.png" alt="Fashion" />
                </div>
                <p>Duration: 10 Months</p>
                <EnquireNow />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="course-card">
                <img
                  src="https://monzcreativeschool.com/assets/images/banner/popular-courses/sap.png"
                  alt="SAP"
                  className="course-img"
                />
                <h3>Master in SAP</h3>
                <div className="tools-grid">
                  <img src="/images/tools/fabric.png" alt="Fabric" />
                  <img src="/images/tools/thread.png" alt="Thread" />
                  <img src="/images/tools/yarn.png" alt="Yarn" />
                  <img src="/images/tools/needle.png" alt="Needle" />
                  <img src="/images/tools/scissors.png" alt="Scissors" />
                  <img src="/images/tools/tape.png" alt="Tape" />
                  <img src="/images/tools/pencil.png" alt="Pencil" />
                  <img src="/images/tools/paper.png" alt="Paper" />
                  <img src="/images/tools/brush.png" alt="Brush" />
                  <img src="/images/tools/palette.png" alt="Palette" />
                  <img src="/images/tools/sketch.png" alt="Sketch" />
                  <img src="/images/tools/button.png" alt="Button" />
                  <img src="/images/tools/fashion.png" alt="Fashion" />
                </div>
                <p>Duration: 8 Months</p>
                <EnquireNow />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="course-card">
                <img
                  src="https://monzcreativeschool.com/assets/images/banner/popular-courses/vr-arch.png"
                  alt="VR"
                  className="course-img"
                />
                <h3>Master in VR Architectural Design</h3>
                <div className="tools-grid">
                  <img src="/images/tools/fabric.png" alt="Fabric" />
                  <img src="/images/tools/thread.png" alt="Thread" />
                  <img src="/images/tools/yarn.png" alt="Yarn" />
                  <img src="/images/tools/needle.png" alt="Needle" />
                  <img src="/images/tools/scissors.png" alt="Scissors" />
                  <img src="/images/tools/tape.png" alt="Tape" />
                  <img src="/images/tools/pencil.png" alt="Pencil" />
                  <img src="/images/tools/paper.png" alt="Paper" />
                  <img src="/images/tools/brush.png" alt="Brush" />
                  <img src="/images/tools/palette.png" alt="Palette" />
                  <img src="/images/tools/sketch.png" alt="Sketch" />
                  <img src="/images/tools/button.png" alt="Button" />
                  <img src="/images/tools/fashion.png" alt="Fashion" />
                </div>
                <p>Duration: 10 Months</p>
                <EnquireNow />
              </div>
            </SwiperSlide>
          </Swiper>
    </section>
  );
};

export default CoursesWeOffer;

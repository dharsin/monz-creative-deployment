import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import VfxCourse from "./pages/VfxCourse";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import AnimationCourseCoimbatore from "./pages/AnimationCourseCoimbatore";
import UiUxCourseSaravanampatti from "./pages/UiUxCourseSaravanampatti";
import VfxCourseCoimbatore from "./pages/VfxCourseCoimbatore";
import VideoEditingCourseCoimbatore from "./pages/VideoEditingCourse";
import SapCourseCoimbatore from "./pages/SapCourseCoimbatore";

import PlacementPage from "./pages/PlacementPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/vfx-course" element={<VfxCourse />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/placement" element={<PlacementPage />} />
        <Route
          path="/animation-course-in-coimbatore"
          element={<AnimationCourseCoimbatore />}
        />
        <Route
          path="/ui-ux-design-course-in-saravanampatti"
          element={<UiUxCourseSaravanampatti />}
        />
          <Route
          path="/vfx-course-in-coimbatore"
          element={<VfxCourseCoimbatore />}
         />
          <Route
          path="/video-editing-course-in-coimbatore"
          element={<VideoEditingCourseCoimbatore />}
        />
            <Route
          path="/sap-course-in-coimbatore"
          element={<SapCourseCoimbatore />}
        />
      </Routes>
      
    </Router>
  );
}

export default App;

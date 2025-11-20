import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import VfxCourse from "./pages/VfxCourse";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import AnimationCourseCoimbatore from "./pages/AnimationCourseCoimbatore";
import UiUxCourseCoimbatore from "./pages/UiUxCourseCoimbatore";

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
          path="/ui-ux-course-in-coimbatore"
          element={<UiUxCourseCoimbatore />}
        />
      </Routes>
    </Router>
  );
}

export default App;

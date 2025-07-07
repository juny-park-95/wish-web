import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import WiDrivingDetail from "./components/WiDrivingDetail";
import WiMotionDetail from "./components/WiMotionDetail";
import WiVisionDetail from "./components/WiVisionDetail";
import WiCreateDetail from "./components/WiCreateDetail";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopOnRoute from "./components/ScrollToTopOnRoute";

function App() {
  return (
    <Router>
      <ScrollToTopOnRoute />
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/widriving" element={<WiDrivingDetail />} />
        <Route path="/wimotion" element={<WiMotionDetail />} />
        <Route path="/wivision" element={<WiVisionDetail />} />
        <Route path="/wicreate" element={<WiCreateDetail />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </Router>
  );
}

export default App; 
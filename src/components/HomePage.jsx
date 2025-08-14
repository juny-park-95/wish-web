import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import CareersSection from "./CareersSection";
import ContactSection from "./ContactSection";

function HomePage() {
  const location = useLocation();


  useEffect(() => {
    // URL에 해시가 있으면 해당 섹션으로 스크롤
    if (location.hash) {
      const sectionId = location.hash.substring(1); // # 제거
      const element = document.getElementById(sectionId);
      if (element) {
        // 약간의 딜레이를 주어 페이지가 완전히 로드된 후 스크롤
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CareersSection />
      <ContactSection />
    </>
  );
}

export default HomePage; 
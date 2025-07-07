import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleNavigation = (sectionId) => {
    setIsMenuOpen(false);
    
    if (isHomePage) {
      // 홈페이지에서는 스크롤로 이동
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // 다른 페이지에서는 홈페이지로 이동 후 해당 섹션으로 스크롤
      if (sectionId === 'home') {
        window.location.href = '/';
      } else {
        window.location.href = `/#${sectionId}`;
      }
    }
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-logo">
          <img src="/logo.png" alt="WISH" className="logo-img" />
          <span className="logo-text">WISH</span>
        </div>
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <button onClick={() => handleNavigation('home')} className="nav-link">
            홈
          </button>
          <button onClick={() => handleNavigation('about')} className="nav-link">
            회사소개
          </button>
          <button onClick={() => handleNavigation('services')} className="nav-link">
            솔루션
          </button>
          <button onClick={() => handleNavigation('careers')} className="nav-link">
            채용
          </button>
          <button onClick={() => handleNavigation('contact')} className="nav-link">
            연락처
          </button>
        </div>

        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}

export default Navigation; 
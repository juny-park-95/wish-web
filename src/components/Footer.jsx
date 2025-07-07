import React from "react";
import { Link, useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleSectionNavigation = (sectionId) => {
    if (isHomePage) {
      // 홈페이지에서는 스크롤로 이동
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // 다른 페이지에서는 홈페이지로 이동 후 해당 섹션으로 스크롤
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo-section">
              <img src="/logo.png" alt="WISH Logo" className="footer-logo" />
              <span className="footer-logo-text">WISH</span>
            </div>
            <p className="footer-description">
              꿈을 현실로 만드는 기술 파트너
            </p>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4>회사</h4>
              <ul>
                <li><button onClick={() => handleSectionNavigation('about')} className="footer-nav-btn">회사소개</button></li>
                <li><button onClick={() => handleSectionNavigation('services')} className="footer-nav-btn">솔루션</button></li>
                <li><button onClick={() => handleSectionNavigation('careers')} className="footer-nav-btn">채용</button></li>
                <li><button onClick={() => handleSectionNavigation('contact')} className="footer-nav-btn">연락처</button></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>솔루션</h4>
              <ul>
                <li><Link to="/widriving">WiDriving</Link></li>
                <li><Link to="/wimotion">WiMotion</Link></li>
                <li><Link to="/wivision">WiVision</Link></li>
                <li><Link to="/wicreate">WiCreate</Link></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>연락처</h4>
              <ul>
                <li>서울시 서초구 태봉로 114<br />서울 AI 허브 808호</li>
                <li> 사업자등록번호 : 237-86-02910 </li>
                <li>02-1234-5678</li>
                <li>contact@wish.global</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 주식회사 위시. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 
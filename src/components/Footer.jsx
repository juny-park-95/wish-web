import React from "react";
import { Link, useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleSectionNavigation = (sectionId) => {
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <footer className="footer" style={{
      background: 'var(--color-bg-primary)',
      borderTop: '1px solid var(--color-border)',
      padding: '4rem 0 2rem'
    }}>
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo-section" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <img src="/logo.png" alt="WISH Logo" className="footer-logo" style={{ width: '40px', opacity: 0.9 }} />
              <span className="footer-logo-text" style={{ fontSize: '1.5rem', fontWeight: '700', color: 'white' }}>WISH</span>
            </div>
            <p className="footer-description" style={{ color: 'var(--color-text-tertiary)', lineHeight: '1.6' }}>
              꿈을 현실로 만드는<br />글로벌 기술 파트너
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1rem' }}>회사</h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li><button onClick={() => handleSectionNavigation('about')} className="footer-nav-btn" style={{ background: 'none', border: 'none', color: 'var(--color-text-secondary)', cursor: 'pointer', padding: 0, fontSize: '0.9rem' }}>회사소개</button></li>
                <li><button onClick={() => handleSectionNavigation('services')} className="footer-nav-btn" style={{ background: 'none', border: 'none', color: 'var(--color-text-secondary)', cursor: 'pointer', padding: 0, fontSize: '0.9rem' }}>솔루션</button></li>
                <li><button onClick={() => handleSectionNavigation('careers')} className="footer-nav-btn" style={{ background: 'none', border: 'none', color: 'var(--color-text-secondary)', cursor: 'pointer', padding: 0, fontSize: '0.9rem' }}>채용</button></li>
                <li><button onClick={() => handleSectionNavigation('contact')} className="footer-nav-btn" style={{ background: 'none', border: 'none', color: 'var(--color-text-secondary)', cursor: 'pointer', padding: 0, fontSize: '0.9rem' }}>연락처</button></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1rem' }}>솔루션</h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li><Link to="/widriving" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>WiDriving</Link></li>
                <li><Link to="/wimotion" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>WiMotion</Link></li>
                <li><Link to="/wivision" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>WiVision</Link></li>
                <li><Link to="/wicreate" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>WiCreate</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1rem' }}>연락처</h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>서울특별시 서초구 양재천로19길 14<br />504호 (양재동)</li>
                <li style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>사업자등록번호 : 237-86-02910</li>
                <li style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>contact@wish.global</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom" style={{
          borderTop: '1px solid var(--color-border)',
          paddingTop: '2rem',
          textAlign: 'center',
          color: 'var(--color-text-tertiary)',
          fontSize: '0.875rem'
        }}>
          <p>&copy; 2024 주식회사 위시. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 
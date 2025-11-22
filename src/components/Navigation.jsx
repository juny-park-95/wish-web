import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Track active section on home page
      if (isHomePage) {
        const sections = ['home', 'about', 'services', 'careers', 'contact'];
        const scrollPosition = window.scrollY + 100;

        for (const sectionId of sections) {
          const element = document.getElementById(sectionId);
          if (element) {
            const offsetTop = element.offsetTop;
            const offsetBottom = offsetTop + element.offsetHeight;
            if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
              setActiveSection(sectionId);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleLogoClick = (e) => {
    if (isHomePage) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleNavigation = (sectionId) => {
    setIsMenuOpen(false);

    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      if (sectionId === 'home') {
        window.location.href = '/';
      } else {
        window.location.href = `/#${sectionId}`;
      }
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navigation ${scrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`} style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      transition: 'all 0.3s ease',
      padding: (scrolled || isMenuOpen) ? '0.75rem 0' : '1.25rem 0',
      background: (scrolled || isMenuOpen) ? 'rgba(15, 23, 42, 0.95)' : 'transparent',
      backdropFilter: (scrolled || isMenuOpen) ? 'blur(16px)' : 'none',
      borderBottom: (scrolled || isMenuOpen) ? '1px solid var(--color-border)' : 'none'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo */}
        <Link
          to="/"
          className="nav-logo"
          onClick={handleLogoClick}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            zIndex: 1101
          }}
        >
          <img
            src="/logo.png"
            alt="WISH"
            className="logo-img"
            style={{
              width: (scrolled || isMenuOpen) ? '28px' : '32px',
              height: (scrolled || isMenuOpen) ? '28px' : '32px',
              transition: 'all 0.3s ease'
            }}
          />
          <span className="logo-text" style={{
            fontSize: (scrolled || isMenuOpen) ? '1.25rem' : '1.5rem',
            fontWeight: '700',
            background: 'var(--gradient-primary)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            transition: 'all 0.3s ease'
          }}>WISH</span>
        </Link>

        {/* Desktop Menu */}
        <div className="nav-menu">
          {['home', 'about', 'services', 'careers', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => handleNavigation(item)}
              className={`nav-link ${activeSection === item ? 'active' : ''}`}
            >
              {item === 'home' ? '홈' :
                item === 'about' ? '회사소개' :
                  item === 'services' ? '솔루션' :
                    item === 'careers' ? '채용' : '연락처'}
              {activeSection === item && (
                <span className="nav-link-indicator"></span>
              )}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={isMenuOpen}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
            width: '40px',
            height: '40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1101,
            position: 'relative'
          }}
        >
          <div style={{
            width: '24px',
            height: '18px',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <span style={{
              display: 'block',
              width: '100%',
              height: '2px',
              background: 'white',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: isMenuOpen ? 'translateY(8px) rotate(45deg)' : 'translateY(0) rotate(0)',
              transformOrigin: 'center'
            }}></span>
            <span style={{
              display: 'block',
              width: '100%',
              height: '2px',
              background: 'white',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              opacity: isMenuOpen ? 0 : 1,
              transform: isMenuOpen ? 'scale(0)' : 'scale(1)'
            }}></span>
            <span style={{
              display: 'block',
              width: '100%',
              height: '2px',
              background: 'white',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: isMenuOpen ? 'translateY(-8px) rotate(-45deg)' : 'translateY(0) rotate(0)',
              transformOrigin: 'center'
            }}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="mobile-menu-overlay"
          onClick={closeMenu}
        >
          <nav className="mobile-menu-container" onClick={(e) => e.stopPropagation()}>
            {['home', 'about', 'services', 'careers', 'contact'].map((item, index) => (
              <button
                key={item}
                onClick={() => handleNavigation(item)}
                className="mobile-menu-item"
                style={{
                  animationDelay: `${index * 0.05}s`
                }}
              >
                {item === 'home' ? '홈' :
                  item === 'about' ? '회사소개' :
                    item === 'services' ? '솔루션' :
                      item === 'careers' ? '채용' : '연락처'}
              </button>
            ))}
          </nav>
        </div>
      )}
    </nav >
  );
}

export default Navigation;

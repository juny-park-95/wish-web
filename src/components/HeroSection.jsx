import React from "react";
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function HeroSection() {
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation(0.3);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">

      {/* Video Background */}
      <div className="hero-video-container">
        <div className="hero-overlay"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-video"
        >
          <source src="/hero_vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-content">
          <div ref={textRef} className={`hero-text fade-in-up ${textVisible ? 'visible' : ''}`}>
            <h1 className="hero-title">
              디지털 파트너
            </h1>
            <p className="hero-description">
              위시는 혁신적인 기술과 창의적인 솔루션으로<br className="desktop-only" />
              고객의 비전을 실현하는 글로벌 IT 기업입니다.
            </p>
            <div className="hero-actions">
              <button onClick={scrollToContact} className="btn btn-primary" style={{ minWidth: '200px' }}>
                프로젝트 시작하기
                <span style={{ fontSize: '1.2rem' }}>→</span>
              </button>
              <button
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                className="btn btn-outline hero-btn-outline"
              >
                더 알아보기
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-text">SCROLL</div>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
}

export default HeroSection; 
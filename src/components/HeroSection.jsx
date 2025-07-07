import React from "react";

function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            당신의 <span className="highlight">꿈</span>을<br />
            <span className="highlight">현실</span>로 만드는 파트너
          </h1>
          <p className="hero-description">
            위시는 혁신적인 기술과 창의적인 솔루션으로<br />
            고객의 비전을 실현하는 글로벌 IT 기업입니다.
          </p>
          <div className="hero-actions">
            <button onClick={scrollToContact} className="cta-button primary">
              프로젝트 시작하기
            </button>
            <button onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })} className="cta-button secondary">
              더 알아보기
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-elements">
            <div className="floating-card">
              <div className="card-icon">💡</div>
              <div className="card-text">혁신</div>
            </div>
            <div className="floating-card">
              <div className="card-icon">🚀</div>
              <div className="card-text">성장</div>
            </div>
            <div className="floating-card">
              <div className="card-icon">✨</div>
              <div className="card-text">실현</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-text">Scroll Down</div>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
}

export default HeroSection; 
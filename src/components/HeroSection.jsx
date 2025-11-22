import React from "react";
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function HeroSection() {
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation(0.3);
  const { ref: visualRef, isVisible: visualVisible } = useScrollAnimation(0.3);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
        e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
      }}
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '100px 0 60px', // Account for fixed navbar
        background: `
        radial-gradient(
          800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
          rgba(59, 130, 246, 0.15),
          transparent 40%
        )
      `
      }}>
      {/* Background Elements */}
      <div style={{
        position: 'absolute',
        top: '-20%',
        left: '-10%',
        width: '50%',
        height: '50%',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)',
        filter: 'blur(100px)',
        zIndex: 0
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '-20%',
        right: '-10%',
        width: '50%',
        height: '50%',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%)',
        filter: 'blur(100px)',
        zIndex: 0
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-content hero-grid">
          <div ref={textRef} className={`hero-text fade-in-right ${textVisible ? 'visible' : ''}`}>
            <h1 className="hero-title" style={{
              fontSize: 'var(--font-size-hero)',
              fontWeight: '800',
              marginBottom: '1.5rem',
              lineHeight: '1.2',
              letterSpacing: '-0.02em'
            }}>
              당신의 <span className="text-gradient">꿈</span>을<br />
              <span className="text-gradient">현실</span>로 만드는<br />
              디지털 파트너
            </h1>
            <p className="hero-description" style={{
              fontSize: '1.125rem',
              color: 'var(--color-text-secondary)',
              marginBottom: '2.5rem',
              maxWidth: '600px',
              lineHeight: '1.7'
            }}>
              위시는 혁신적인 기술과 창의적인 솔루션으로<br className="desktop-only" />
              고객의 비전을 실현하는 글로벌 IT 기업입니다.
            </p>
            <div className="hero-actions" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button onClick={scrollToContact} className="btn btn-primary" style={{ minWidth: '200px' }}>
                프로젝트 시작하기
                <span style={{ fontSize: '1.2rem' }}>→</span>
              </button>
              <button onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })} className="btn btn-outline" style={{ minWidth: '200px' }}>
                더 알아보기
              </button>
            </div>
          </div>

          <div ref={visualRef} className={`hero-visual fade-in-left ${visualVisible ? 'visible' : ''}`} style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative'
          }}>
            <div className="floating-elements" style={{ position: 'relative', width: '100%', height: '400px' }}>
              {/* Main Floating Card */}
              <div className="card animate-float" style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '280px',
                zIndex: 2,
                background: 'rgba(30, 41, 59, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚀</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Fast Growth</h3>
                <p style={{ color: 'var(--color-text-secondary)' }}>빠른 성장과 혁신을<br />지원합니다.</p>
              </div>

              {/* Secondary Floating Elements */}
              <div className="card animate-float" style={{
                position: 'absolute',
                top: '10%',
                right: '10%',
                animationDelay: '-2s',
                padding: '1rem',
                zIndex: 1
              }}>
                <span style={{ fontSize: '2rem' }}>💡</span>
              </div>

              <div className="card animate-float" style={{
                position: 'absolute',
                bottom: '20%',
                left: '10%',
                animationDelay: '-4s',
                padding: '1rem',
                zIndex: 3
              }}>
                <span style={{ fontSize: '2rem' }}>✨</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator" style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        opacity: 0.7
      }}>
        <div className="scroll-text" style={{ fontSize: '0.875rem', marginBottom: '0.5rem', letterSpacing: '2px' }}>SCROLL</div>
        <div className="scroll-arrow" style={{
          width: '1px',
          height: '40px',
          background: 'var(--color-primary)',
          position: 'relative'
        }}></div>
      </div>
    </section>
  );
}

export default HeroSection; 
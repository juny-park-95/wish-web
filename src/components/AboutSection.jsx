import React from "react";
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function AboutSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.2);
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation(0.2);
  const { ref: processRef, isVisible: processVisible } = useScrollAnimation(0.2);

  return (
    <section id="about" className="section" style={{ background: 'var(--color-bg-primary)' }}>
      <div className="container">
        <div ref={headerRef} className={`section-header fade-in ${headerVisible ? 'visible' : ''}`} style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>
            회사 <span className="text-gradient">소개</span>
          </h2>
          <p className="section-subtitle" style={{ fontSize: '1.2rem', color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            위시는 고객의 솔루션을 현실로 구현하는 AI 전문 기업입니다
          </p>
        </div>

        <div className="about-content" style={{ display: 'grid', gap: '6rem' }}>
          <div ref={contentRef} className={`about-text fade-in-up ${contentVisible ? 'visible' : ''}`} style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            <div className="card" style={{ height: '100%' }}>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--color-primary-light)', marginBottom: '1rem' }}>우리의 미션</h3>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>
                위시(Wish)의 미션은, 고객사가 생각하는 솔루션을 현실 세계에 구현하는 것입니다.
                공간 지능/생성형 AI와 같은 최신의 기술에 익숙한 위시의 연구원들이,
                AI 연구개발에 필요한 인프라 구축을 시작으로, 데이터 수집, AI 모델 학습,
                솔루션 개발의 전 과정을 고객사와 함께 합니다.
              </p>
            </div>

            <div className="card" style={{ height: '100%' }}>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--color-primary-light)', marginBottom: '1rem' }}>우리가 찾는 파트너</h3>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>
                위시는, 더욱 도전적인 과업을 제안해 주실 파트너를 찾고 있습니다.
                함께 혁신적인 AI 솔루션을 만들어나가며,
                기술의 한계를 뛰어넘는 새로운 가능성을 탐구하고자 합니다.
              </p>
            </div>

            <div className="card" style={{ height: '100%' }}>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--color-primary-light)', marginBottom: '1rem' }}>우리의 전문 기술</h3>
              <div className="tech-list" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { icon: "🧠", text: "공간 지능 AI" },
                  { icon: "✨", text: "생성형 AI" },
                  { icon: "🔬", text: "AI 연구개발" }
                ].map((tech, idx) => (
                  <div key={idx} className="tech-item" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1rem',
                    background: 'rgba(59, 130, 246, 0.1)',
                    borderRadius: '0.75rem',
                    border: '1px solid rgba(59, 130, 246, 0.2)'
                  }}>
                    <span className="tech-icon" style={{ fontSize: '1.5rem' }}>{tech.icon}</span>
                    <span style={{ fontWeight: '500', color: 'white' }}>{tech.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div ref={processRef} className={`about-process fade-in-up delay-200 ${processVisible ? 'visible' : ''}`}>
            <h3 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '3rem' }}>AI 솔루션 개발 프로세스</h3>
            <div className="process-steps" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem'
            }}>
              {[
                { num: "01", title: "인프라 구축", desc: "AI 연구개발에 필요한 기반 인프라를 설계하고 구축합니다" },
                { num: "02", title: "데이터 수집", desc: "프로젝트 목적에 맞는 고품질 데이터를 수집하고 정제합니다" },
                { num: "03", title: "AI 모델 학습", desc: "최신 AI 기술을 활용하여 맞춤형 모델을 개발하고 학습시킵니다" },
                { num: "04", title: "솔루션 개발", desc: "완성된 AI 모델을 실제 비즈니스에 적용 가능한 솔루션으로 구현합니다" }
              ].map((step, idx) => (
                <div key={idx} className="process-step card" style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: '1.5rem',
                  position: 'relative'
                }}>
                  <div className="step-number" style={{
                    width: '3.5rem',
                    height: '3.5rem',
                    background: 'var(--gradient-primary)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: '1.2rem',
                    color: 'white',
                    boxShadow: 'var(--shadow-glow)'
                  }}>{step.num}</div>
                  <div className="step-content">
                    <h4 style={{ fontSize: '1.25rem', color: 'var(--color-primary-light)', marginBottom: '0.75rem' }}>{step.title}</h4>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection; 
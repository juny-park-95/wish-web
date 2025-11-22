import React from "react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function ServicesSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.2);
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation(0.1);
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation(0.3);

  const services = [
    {
      name: "WiDriving",
      image: "/service_WiDriving.png",
      title: "자율주행 솔루션",
      description: "AI 기반 (건설/농업) 장비 자율주행 솔루션",
      features: [
        "건설 장비 자동화",
        "농업 기계 자율 운행",
        "실시간 경로 최적화",
        "안전성 향상 시스템"
      ],
      category: "공간 지능",
      link: "/widriving"
    },
    {
      name: "WiMotion",
      image: "/service_WiMotion.png",
      title: "모션 캡쳐 솔루션",
      description: "AI 기반 다인 실시간 마커리스 모션 캡쳐 솔루션",
      features: [
        "마커리스 모션 트래킹",
        "다중 인물 실시간 분석",
        "고정밀 동작 인식",
        "실시간 데이터 처리"
      ],
      category: "공간 지능",
      link: "/wimotion"
    },
    {
      name: "WiVision",
      image: "/service_WiVision.png",
      title: "지능형 CCTV 솔루션",
      description: "AI 기반 지능형 CCTV 영상분석 솔루션",
      features: [
        "실시간 영상 분석",
        "이상 행동 탐지",
        "객체 인식 및 추적",
        "보안 모니터링 자동화"
      ],
      category: "생성형 AI",
      link: "/wivision"
    },
    {
      name: "WiCreate",
      image: "/service_WiCreate.png",
      title: "영상 편집 솔루션",
      description: "AI 기반 영상 편집 솔루션 (쇼츠 생성, 블러, 립싱크)",
      features: [
        "자동 쇼츠 생성",
        "스마트 블러 처리",
        "립싱크 기술",
        "영상 품질 향상"
      ],
      category: "생성형 AI",
      link: "/wicreate"
    }
  ];

  return (
    <section id="services" className="section" style={{ background: 'var(--color-bg-secondary)' }}>
      <div className="container">
        <div ref={headerRef} className={`section-header fade-in ${headerVisible ? 'visible' : ''}`} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>
            우리의 <span className="text-gradient">솔루션</span>
          </h2>
          <p className="section-subtitle" style={{ fontSize: '1.2rem', color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            최첨단 AI 기술로 구현한 위시의 혁신적인 솔루션들을 소개합니다
          </p>
        </div>

        <div ref={gridRef} className={`services-grid ${gridVisible ? 'visible' : ''}`}>
          {services.map((service, index) => (
            <Link to={service.link} key={index} className={`card fade-in-up ${gridVisible ? 'visible' : ''}`} style={{
              transitionDelay: `${index * 0.1}s`,
              textDecoration: 'none',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              padding: 0
            }}>
              <div className="service-image" style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
                <img src={service.image} alt={service.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                  onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                />
                <div className="service-category" style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'rgba(15, 23, 42, 0.8)',
                  backdropFilter: 'blur(4px)',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  color: 'white',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>{service.category}</div>
              </div>
              <div className="service-content" style={{ padding: '2rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <div className="service-header" style={{ marginBottom: '1rem' }}>
                  <h3 className="service-name" style={{ fontSize: '1.5rem', color: 'var(--color-primary-light)', marginBottom: '0.5rem' }}>{service.name}</h3>
                  <h4 className="service-title" style={{ fontSize: '1.1rem', color: 'white' }}>{service.title}</h4>
                </div>
                <p className="service-description" style={{ color: 'var(--color-text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6', flexGrow: 1 }}>{service.description}</p>
                <ul className="service-features" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {service.features.map((feature, idx) => (
                    <li key={idx} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: 'var(--color-text-tertiary)',
                      fontSize: '0.9rem',
                      marginBottom: '0.5rem'
                    }}>
                      <span style={{ color: 'var(--color-primary)' }}>✓</span> {feature}
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: '2rem', textAlign: 'right', color: 'var(--color-primary)', fontWeight: '600', fontSize: '0.9rem' }}>
                  자세히 보기 →
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div ref={ctaRef} className={`services-cta fade-in ${ctaVisible ? 'visible' : ''}`} style={{
          marginTop: '6rem',
          textAlign: 'center',
          padding: '4rem 2rem',
          background: 'var(--gradient-card)',
          borderRadius: '2rem',
          border: '1px solid var(--color-border)'
        }}>
          <p style={{ fontSize: '1.5rem', marginBottom: '2rem', fontWeight: '600' }}>더 자세한 솔루션 정보가 궁금하시나요?</p>
          <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="btn btn-primary"
          >
            문의하기
          </button>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection; 
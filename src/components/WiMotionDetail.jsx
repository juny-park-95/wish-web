import React from "react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import VideoPlayer from './VideoPlayer';

function WiMotionDetail() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation(0.2);
  const { ref: demoRef, isVisible: demoVisible } = useScrollAnimation(0.2);
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation(0.2);
  const { ref: specsRef, isVisible: specsVisible } = useScrollAnimation(0.2);
  const { ref: casesRef, isVisible: casesVisible } = useScrollAnimation(0.2);
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation(0.2);

  return (
    <div className="service-detail" style={{ background: 'var(--color-bg-primary)', minHeight: '100vh' }}>
      <div className="service-detail-hero" style={{
        padding: '120px 0 80px',
        background: 'radial-gradient(circle at 70% 30%, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container">
          <div ref={heroRef} className={`detail-hero-content ${heroVisible ? 'fade-in' : ''}`} style={{
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease-out'
          }}>
            <div className="detail-hero-text">
              <div className="detail-breadcrumb" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--color-text-tertiary)' }}>
                <Link to="/" className="breadcrumb-link" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none' }}>홈</Link>
                <span className="breadcrumb-separator">&gt;</span>
                <a href="/#services" className="breadcrumb-link" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none' }}>솔루션</a>
                <span className="breadcrumb-separator">&gt;</span>
                <span className="breadcrumb-current" style={{ color: 'var(--color-accent)' }}>WiMotion</span>
              </div>
              <h1 className="detail-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem', lineHeight: '1.1' }}>WiMotion</h1>
              <p className="detail-subtitle" style={{ fontSize: '1.5rem', color: 'var(--color-accent-light)', marginBottom: '1.5rem', fontWeight: '500' }}>공간 지능기반 실시간 다인 마커리스 모션 캡쳐 솔루션</p>
              <p className="detail-description" style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>
                일반 RGB 카메라만으로 별도 장비 부착 없이 동시 다수 인원의
                정밀한 동작을 실시간으로 캡쳐하는 딥러닝 AI 기반 솔루션입니다.
              </p>
            </div>
            <div className="detail-hero-image" style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '120%',
                height: '120%',
                background: 'radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%)',
                filter: 'blur(40px)',
                zIndex: 0
              }}></div>
              <img src="/service_WiMotion.png" alt="WiMotion" style={{ width: '100%', position: 'relative', zIndex: 1, borderRadius: '1rem', boxShadow: 'var(--shadow-lg)' }} />
            </div>
          </div>
        </div>
      </div>

      <div className="service-detail-content" style={{ padding: '0 0 80px' }}>
        <div className="container">
          {/* 데모 영상 */}
          <section ref={demoRef} className={`detail-section fade-in-up ${demoVisible ? 'visible' : ''}`} style={{ marginBottom: '8rem' }}>
            <h2 className="detail-section-title" style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '3rem' }}>솔루션 데모</h2>
            <div className="demo-video" style={{ borderRadius: '1rem', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--color-border)' }}>
              <VideoPlayer
                src="/WiMotion_demo.mp4"
                className="service-video-player"
              />
            </div>
          </section>

          {/* 주요 특징 */}
          <section ref={featuresRef} className={`detail-section fade-in-up ${featuresVisible ? 'visible' : ''}`} style={{ marginBottom: '8rem' }}>
            <h2 className="detail-section-title" style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '3rem' }}>주요 특징</h2>
            <div className="features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {[
                { icon: "📹", title: "일반 RGB 카메라 활용", desc: "별도의 특수 장비 없이 일반 RGB 카메라 몇 대만으로 정밀한 모션 캡쳐가 가능합니다." },
                { icon: "👥", title: "동시 다수 인원 추적", desc: "별도 장비 부착 없이 여러 명의 동작을 동시에 실시간으로 추적하고 분석할 수 있습니다." },
                { icon: "✋", title: "정밀 세부 트래킹", desc: "손가락과 얼굴의 미세한 움직임까지 정밀하게 캡쳐하여 완전한 모션 데이터를 제공합니다." },
                { icon: "🔄", title: "가상-현실 상호작용", desc: "실시간 처리를 통해 가상 환경과 현실 세계의 자연스러운 상호작용을 지원합니다." },
                { icon: "🧠", title: "딥러닝 AI 기반", desc: "최신 딥러닝 알고리즘으로 복잡한 동작 패턴도 정확하게 인식하고 학습합니다." },
                { icon: "⚡", title: "실시간 처리", desc: "30fps 이상의 고속 실시간 처리로 지연 없는 즉각적인 모션 캡쳐를 제공합니다." }
              ].map((feature, idx) => (
                <div key={idx} className="feature-item card" style={{ padding: '2rem' }}>
                  <div className="feature-icon" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{feature.icon}</div>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--color-accent-light)', marginBottom: '1rem' }}>{feature.title}</h3>
                  <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>{feature.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 기술 사양 */}
          <section ref={specsRef} className={`detail-section fade-in-up ${specsVisible ? 'visible' : ''}`} style={{ marginBottom: '8rem' }}>
            <h2 className="detail-section-title" style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '3rem' }}>기술 사양</h2>
            <div className="tech-specs card" style={{ padding: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
              {[
                { title: "카메라 시스템", items: ["일반 RGB 카메라 (4K 지원)", "다중 시점 캘리브레이션", "실시간 스테레오 비전", "저조도 환경 최적화"] },
                { title: "AI 알고리즘", items: ["2D/3D 포즈 추정", "다중 객체 추적", "손가락 트래킹", "얼굴 표정 인식", "동작 패턴 분석", "실시간 3D 복원"] },
                { title: "적용 분야", items: ["가상현실/증강현실", "스포츠 분석", "의료 재활", "엔터테인먼트", "교육 훈련", "산업 안전"] }
              ].map((group, idx) => (
                <div key={idx} className="spec-group">
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--color-accent-light)', marginBottom: '1.5rem', borderBottom: '2px solid var(--color-accent)', paddingBottom: '0.5rem', display: 'inline-block' }}>{group.title}</h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {group.items.map((item, i) => (
                      <li key={i} style={{ color: 'var(--color-text-secondary)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ color: 'var(--color-text-tertiary)' }}>✓</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* 적용 사례 */}
          <section ref={casesRef} className={`detail-section fade-in-up ${casesVisible ? 'visible' : ''}`} style={{ marginBottom: '8rem' }}>
            <h2 className="detail-section-title" style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '3rem' }}>적용 사례</h2>
            <div className="case-studies" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {[
                { title: "VR/AR 인터랙션 시스템", desc: "가상현실 환경에서 자연스러운 손동작과 제스처 인식을 통해 몰입감 높은 상호작용 경험을 제공하고 있습니다." },
                { title: "프로 스포츠 팀 동작 분석", desc: "축구, 야구 등 프로 스포츠 팀의 선수 동작 분석 및 훈련 개선에 활용되어 경기력 향상에 기여하고 있습니다." },
                { title: "재활 치료 모니터링", desc: "병원에서 환자의 재활 운동을 정확히 측정하고 진전 상황을 실시간으로 추적하여 맞춤형 치료를 지원합니다." }
              ].map((study, idx) => (
                <div key={idx} className="case-item card" style={{ padding: '2rem', borderLeft: '4px solid var(--color-accent)' }}>
                  <h3 style={{ fontSize: '1.25rem', color: 'white', marginBottom: '1rem' }}>{study.title}</h3>
                  <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>{study.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section ref={ctaRef} className={`detail-cta fade-in ${ctaVisible ? 'visible' : ''}`} style={{
            textAlign: 'center',
            padding: '4rem 2rem',
            background: 'var(--gradient-card)',
            borderRadius: '2rem',
            border: '1px solid var(--color-border)'
          }}>
            <div className="cta-content">
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>WiMotion 도입을 고려하고 계신가요?</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>전문가와 상담하여 맞춤형 솔루션을 제안받아보세요.</p>
              <a href="/#contact" className="btn btn-primary">상담 문의하기</a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default WiMotionDetail; 
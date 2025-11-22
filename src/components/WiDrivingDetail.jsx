import React from "react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import VideoPlayer from './VideoPlayer';

function WiDrivingDetail() {
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
        background: 'radial-gradient(circle at 70% 30%, rgba(37, 99, 235, 0.1) 0%, transparent 70%)',
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
                <span className="breadcrumb-current" style={{ color: 'var(--color-primary)' }}>WiDriving</span>
              </div>
              <h1 className="detail-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem', lineHeight: '1.1' }}>WiDriving</h1>
              <p className="detail-subtitle" style={{ fontSize: '1.5rem', color: 'var(--color-primary-light)', marginBottom: '1.5rem', fontWeight: '500' }}>공간 지능기반의 (건설/농업)장비 작업 어시스턴트 및 자율작업 컨트롤 유닛</p>
              <p className="detail-description" style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>
                시각 인공지능과 센서 퓨전을 통한 공간지능 기반의 인지/제어 시스템으로
                건설과 농업 분야에 혁신적인 자동화 솔루션을 제공합니다.
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
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)',
                filter: 'blur(40px)',
                zIndex: 0
              }}></div>
              <img src="/service_WiDriving.png" alt="WiDriving" style={{ width: '100%', position: 'relative', zIndex: 1, borderRadius: '1rem', boxShadow: 'var(--shadow-lg)' }} />
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
                src="/WiDriving_demo_v2.mp4"
                className="service-video-player"
              />
            </div>
          </section>

          {/* 주요 특징 */}
          <section ref={featuresRef} className={`detail-section fade-in-up ${featuresVisible ? 'visible' : ''}`} style={{ marginBottom: '8rem' }}>
            <h2 className="detail-section-title" style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '3rem' }}>주요 특징</h2>
            <div className="features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {[
                { icon: "🔧", title: "제조사 CAN 제어 프로토콜 활용", desc: "기존 장비의 CAN 제어 프로토콜을 활용하여 자율주행/작업제어를 구현합니다. 최소한의 제조사 리소스로 자율주행 기능 도입이 가능합니다." },
                { icon: "🚀", title: "높은 기대효과", desc: "시장 기술 대비 다양한 작업보조 및 자율작업 기능을 제공합니다. GPS 기반을 넘어선 시각 AI와 센서 퓨전으로 커스터마이즈된 기능 적용이 가능합니다." },
                { icon: "🔄", title: "지속적인 업데이트 플랫폼", desc: "MLOps 기반의 장비 운영 데이터 수집 및 AI 학습 시스템으로 지속적인 소프트웨어 성능 향상과 업데이트를 제공합니다." }
              ].map((feature, idx) => (
                <div key={idx} className="feature-item card" style={{ padding: '2rem' }}>
                  <div className="feature-icon" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{feature.icon}</div>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary-light)', marginBottom: '1rem' }}>{feature.title}</h3>
                  <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>{feature.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 구성요소 */}
          <section className="detail-section" style={{ marginBottom: '8rem' }}>
            <h2 className="detail-section-title" style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '3rem' }}>시스템 구성요소</h2>
            <div className="system-components" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {[
                { icon: "👁️", title: "인지 (Perception)", freq: "초당 10회", subTitle: "환경인식 시스템", items: ["이미지 분석 AI", "센서 신호의 시계열 분석 AI"] },
                { icon: "🧠", title: "판단 (Decision)", freq: "초당 20회", subTitle: "공간보정 및 판단 시스템", items: ["이미지 분석 결과의 시공간 정합", "센서 신호의 정확한 시간 정합", "이벤트 판정"] },
                { icon: "⚡", title: "제어 (Control)", freq: "초당 100회", subTitle: "실시간 제어 명령 시스템", items: ["작업을 위한 제어명령", "제어명령의 피드백"] }
              ].map((comp, idx) => (
                <div key={idx} className="component-item card" style={{ padding: '2rem' }}>
                  <div className="component-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--color-border)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div className="component-icon" style={{ fontSize: '2rem' }}>{comp.icon}</div>
                      <h3 style={{ fontSize: '1.25rem', color: 'white' }}>{comp.title}</h3>
                    </div>
                    <span className="component-frequency" style={{ fontSize: '0.9rem', color: 'var(--color-primary)', fontWeight: '600' }}>{comp.freq}</span>
                  </div>
                  <div className="component-content">
                    <h4 style={{ fontSize: '1.1rem', color: 'var(--color-primary-light)', marginBottom: '1rem' }}>{comp.subTitle}</h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {comp.items.map((item, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>
                          <span style={{ color: 'var(--color-primary)', fontSize: '0.8rem' }}>●</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 기술 사양 */}
          <section ref={specsRef} className={`detail-section fade-in-up ${specsVisible ? 'visible' : ''}`} style={{ marginBottom: '8rem' }}>
            <h2 className="detail-section-title" style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '3rem' }}>기술 사양</h2>
            <div className="tech-specs card" style={{ padding: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
              {[
                { title: "센서 시스템", items: ["LiDAR 센서", "RGB-D 카메라", "IMU 센서", "RTK/GNSS"] },
                { title: "AI 기술", items: ["딥러닝 기반 객체 인식", "SLAM (동시위치추정 및 지도작성)", "경로 계획 알고리즘", "예측 제어 시스템"] },
                { title: "지원 장비", items: ["굴삭기", "불도저", "트랙터", "수확기"] }
              ].map((group, idx) => (
                <div key={idx} className="spec-group">
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary-light)', marginBottom: '1.5rem', borderBottom: '2px solid var(--color-primary)', paddingBottom: '0.5rem', display: 'inline-block' }}>{group.title}</h3>
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
                { title: "현장 자동화", desc: "화성, 경남 지역 필지에 자율주행 트랙터 장비를 자동화하여 작업 효율성을 향상하고, 무인 작업, 주행 데모를 완수하였습니다." },
                { title: "스마트 농장 구축", desc: "완전 자율 주행 시스템을 도입하여 인력 절약과 정밀 농업을 실현했습니다." }
              ].map((study, idx) => (
                <div key={idx} className="case-item card" style={{ padding: '2rem', borderLeft: '4px solid var(--color-primary)' }}>
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
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>WiDriving 도입을 고려하고 계신가요?</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>전문가와 상담하여 맞춤형 솔루션을 제안받아보세요.</p>
              <a href="/#contact" className="btn btn-primary">상담 문의하기</a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default WiDrivingDetail; 
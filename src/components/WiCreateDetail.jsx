import React from "react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function WiCreateDetail() {
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
        background: 'radial-gradient(circle at 70% 30%, rgba(236, 72, 153, 0.1) 0%, transparent 70%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container">
          <div ref={heroRef} className={`detail-hero-content ${heroVisible ? 'fade-in' : ''}`} style={{
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease-out',
          }}>
            <div className="detail-hero-text">
              <div className="detail-breadcrumb" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--color-text-tertiary)' }}>
                <Link to="/" className="breadcrumb-link" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none' }}>홈</Link>
                <span className="breadcrumb-separator">&gt;</span>
                <a href="/#services" className="breadcrumb-link" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none' }}>솔루션</a>
                <span className="breadcrumb-separator">&gt;</span>
                <span className="breadcrumb-current" style={{ color: '#EC4899' }}>WiCreate</span>
              </div>
              <h1 className="detail-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem', lineHeight: '1.1' }}>WiCreate</h1>
              <p className="detail-subtitle" style={{ fontSize: '1.5rem', color: '#F472B6', marginBottom: '1.5rem', fontWeight: '500' }}>AI 기반 영상 편집 솔루션 (쇼츠 생성, 블러, 립싱크)</p>
              <p className="detail-description" style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>
                AI 기술을 활용하여 영상 제작과 편집 과정을 자동화하고
                최고 품질의 콘텐츠를 빠르게 생성하는 솔루션입니다.
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
                background: 'radial-gradient(circle, rgba(236, 72, 153, 0.2) 0%, transparent 70%)',
                filter: 'blur(40px)',
                zIndex: 0
              }}></div>
              <img src="/service_WiCreate.png" alt="WiCreate" style={{ width: '100%', position: 'relative', zIndex: 1, borderRadius: '1rem', boxShadow: 'var(--shadow-lg)' }} />
            </div>
          </div>
        </div>
      </div>

      <div className="service-detail-content" style={{ padding: '0 0 80px' }}>
        <div className="container">
          {/* 주요 기능 */}
          <section ref={featuresRef} className={`detail-section fade-in-up ${featuresVisible ? 'visible' : ''}`} style={{ marginBottom: '8rem' }}>
            <h2 className="detail-section-title" style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '3rem' }}>주요 기능</h2>
            <div className="features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {[
                { icon: "📱", title: "자동 쇼츠 생성", desc: "긴 영상에서 핵심 부분을 자동으로 추출하여 매력적인 쇼츠 콘텐츠를 생성합니다." },
                { icon: "🌟", title: "스마트 블러 처리", desc: "AI가 배경과 인물을 구분하여 자연스럽고 전문적인 블러 효과를 적용합니다." },
                { icon: "🎤", title: "립싱크 기술", desc: "음성과 입모양을 정확히 동기화하여 자연스러운 더빙과 번역을 제공합니다." },
                { icon: "✨", title: "영상 품질 향상", desc: "AI 업스케일링과 노이즈 제거로 저화질 영상을 고품질로 변환합니다." }
              ].map((feature, idx) => (
                <div key={idx} className="feature-item card" style={{ padding: '2rem' }}>
                  <div className="feature-icon" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{feature.icon}</div>
                  <h3 style={{ fontSize: '1.25rem', color: '#F472B6', marginBottom: '1rem' }}>{feature.title}</h3>
                  <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>{feature.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 기술 스펙 */}
          <section ref={specsRef} className={`detail-section fade-in-up ${specsVisible ? 'visible' : ''}`} style={{ marginBottom: '8rem' }}>
            <h2 className="detail-section-title" style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '3rem' }}>기술 사양</h2>
            <div className="tech-specs card" style={{ padding: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
              {[
                { title: "영상 처리", items: ["4K/8K 해상도 지원", "실시간 렌더링", "다중 포맷 호환", "클라우드 기반 처리"] },
                { title: "AI 기술", items: ["컴퓨터 비전", "자연어 처리", "생성형 AI", "음성 합성"] },
                { title: "활용 분야", items: ["소셜 미디어", "광고 제작", "교육 콘텐츠", "엔터테인먼트"] }
              ].map((group, idx) => (
                <div key={idx} className="spec-group">
                  <h3 style={{ fontSize: '1.25rem', color: '#F472B6', marginBottom: '1.5rem', borderBottom: '2px solid #EC4899', paddingBottom: '0.5rem', display: 'inline-block' }}>{group.title}</h3>
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
                { title: "소셜 미디어 크리에이터 지원", desc: "유튜브, 틱톡 크리에이터들의 콘텐츠 제작 시간을 80% 단축하고 품질을 향상시켰습니다." },
                { title: "기업 마케팅 영상 제작", desc: "글로벌 기업의 다국어 마케팅 영상을 자동 번역 및 립싱크로 빠르게 현지화했습니다." }
              ].map((study, idx) => (
                <div key={idx} className="case-item card" style={{ padding: '2rem', borderLeft: '4px solid #EC4899' }}>
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
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>WiCreate 도입을 고려하고 계신가요?</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>전문가와 상담하여 맞춤형 솔루션을 제안받아보세요.</p>
              <a href="/#contact" className="btn btn-primary">상담 문의하기</a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default WiCreateDetail; 
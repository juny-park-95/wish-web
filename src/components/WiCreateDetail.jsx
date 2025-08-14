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
    <div className="service-detail">
      <div className="service-detail-hero">
        <div className="container">
          <div ref={heroRef} className={`detail-hero-content ${heroVisible ? 'fade-in' : ''}`} style={{opacity: heroVisible ? 1 : 0, transform: heroVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.8s ease-out'}}>
            <div className="detail-hero-text">
              <div className="detail-breadcrumb">
                <Link to="/" className="breadcrumb-link">홈</Link>
                <span className="breadcrumb-separator">&gt;</span>
                <a href="/#services" className="breadcrumb-link">솔루션</a>
                <span className="breadcrumb-separator">&gt;</span>
                <span className="breadcrumb-current">WiCreate</span>
              </div>
              <h1 className="detail-title">WiCreate</h1>
              <p className="detail-subtitle">AI 기반 영상 편집 솔루션 (쇼츠 생성, 블러, 립싱크)</p>
              <p className="detail-description">
                AI 기술을 활용하여 영상 제작과 편집 과정을 자동화하고 
                최고 품질의 콘텐츠를 빠르게 생성하는 솔루션입니다.
              </p>
            </div>
            <div className="detail-hero-image">
              <img src="/service_WiCreate.png" alt="WiCreate" />
            </div>
          </div>
        </div>
      </div>

      <div className="service-detail-content">
        <div className="container">
          {/* 주요 기능 */}
          <section ref={featuresRef} className={`detail-section fade-in-up ${featuresVisible ? 'visible' : ''}`}>
            <h2 className="detail-section-title">주요 기능</h2>
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">📱</div>
                <h3>자동 쇼츠 생성</h3>
                <p>긴 영상에서 핵심 부분을 자동으로 추출하여 매력적인 쇼츠 콘텐츠를 생성합니다.</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🌟</div>
                <h3>스마트 블러 처리</h3>
                <p>AI가 배경과 인물을 구분하여 자연스럽고 전문적인 블러 효과를 적용합니다.</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🎤</div>
                <h3>립싱크 기술</h3>
                <p>음성과 입모양을 정확히 동기화하여 자연스러운 더빙과 번역을 제공합니다.</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">✨</div>
                <h3>영상 품질 향상</h3>
                <p>AI 업스케일링과 노이즈 제거로 저화질 영상을 고품질로 변환합니다.</p>
              </div>
            </div>
          </section>

          {/* 기술 스펙 */}
          <section ref={specsRef} className={`detail-section fade-in-up ${specsVisible ? 'visible' : ''}`}>
            <h2 className="detail-section-title">기술 사양</h2>
            <div className="tech-specs">
              <div className="spec-group">
                <h3>영상 처리</h3>
                <ul>
                  <li>4K/8K 해상도 지원</li>
                  <li>실시간 렌더링</li>
                  <li>다중 포맷 호환</li>
                  <li>클라우드 기반 처리</li>
                </ul>
              </div>
              <div className="spec-group">
                <h3>AI 기술</h3>
                <ul>
                  <li>컴퓨터 비전</li>
                  <li>자연어 처리</li>
                  <li>생성형 AI</li>
                  <li>음성 합성</li>
                </ul>
              </div>
              <div className="spec-group">
                <h3>활용 분야</h3>
                <ul>
                  <li>소셜 미디어</li>
                  <li>광고 제작</li>
                  <li>교육 콘텐츠</li>
                  <li>엔터테인먼트</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 적용 사례 */}
          <section ref={casesRef} className={`detail-section fade-in-up ${casesVisible ? 'visible' : ''}`}>
            <h2 className="detail-section-title">적용 사례</h2>
            <div className="case-studies">
              <div className="case-item">
                <h3>소셜 미디어 크리에이터 지원</h3>
                <p>유튜브, 틱톡 크리에이터들의 콘텐츠 제작 시간을 80% 단축하고 품질을 향상시켰습니다.</p>
              </div>
              <div className="case-item">
                <h3>기업 마케팅 영상 제작</h3>
                <p>글로벌 기업의 다국어 마케팅 영상을 자동 번역 및 립싱크로 빠르게 현지화했습니다.</p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section ref={ctaRef} className={`detail-cta fade-in ${ctaVisible ? 'visible' : ''}`}>
            <div className="cta-content">
              <h2>WiCreate 도입을 고려하고 계신가요?</h2>
              <p>전문가와 상담하여 맞춤형 솔루션을 제안받아보세요.</p>
              <a href="/#contact" className="cta-button primary">상담 문의하기</a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default WiCreateDetail; 
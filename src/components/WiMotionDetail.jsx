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
                <span className="breadcrumb-current">WiMotion</span>
              </div>
              <h1 className="detail-title">WiMotion</h1>
              <p className="detail-subtitle">공간 지능기반 실시간 다인 마커리스 모션 캡쳐 솔루션</p>
              <p className="detail-description">
                일반 RGB 카메라만으로 별도 장비 부착 없이 동시 다수 인원의 
                정밀한 동작을 실시간으로 캡쳐하는 딥러닝 AI 기반 솔루션입니다.
              </p>
            </div>
            <div className="detail-hero-image">
              <img src="/service_WiMotion.png" alt="WiMotion" />
            </div>
          </div>
        </div>
      </div>

      <div className="service-detail-content">
        <div className="container">
          {/* 데모 영상 */}
          <section ref={demoRef} className={`detail-section fade-in-up ${demoVisible ? 'visible' : ''}`}>
            <h2 className="detail-section-title">솔루션 데모</h2>
            <div className="demo-video">
              <VideoPlayer 
                src="/WiMotion_demo.mp4"
                className="service-video-player"
              />
            </div>
          </section>

          {/* 주요 특징 */}
          <section ref={featuresRef} className={`detail-section fade-in-up ${featuresVisible ? 'visible' : ''}`}>
            <h2 className="detail-section-title">주요 특징</h2>
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">📹</div>
                <h3>일반 RGB 카메라 활용</h3>
                <p>별도의 특수 장비 없이 일반 RGB 카메라 몇 대만으로 정밀한 모션 캡쳐가 가능합니다.</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">👥</div>
                <h3>동시 다수 인원 추적</h3>
                <p>별도 장비 부착 없이 여러 명의 동작을 동시에 실시간으로 추적하고 분석할 수 있습니다.</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">✋</div>
                <h3>정밀 세부 트래킹</h3>
                <p>손가락과 얼굴의 미세한 움직임까지 정밀하게 캡쳐하여 완전한 모션 데이터를 제공합니다.</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🔄</div>
                <h3>가상-현실 상호작용</h3>
                <p>실시간 처리를 통해 가상 환경과 현실 세계의 자연스러운 상호작용을 지원합니다.</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🧠</div>
                <h3>딥러닝 AI 기반</h3>
                <p>최신 딥러닝 알고리즘으로 복잡한 동작 패턴도 정확하게 인식하고 학습합니다.</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">⚡</div>
                <h3>실시간 처리</h3>
                <p>30fps 이상의 고속 실시간 처리로 지연 없는 즉각적인 모션 캡쳐를 제공합니다.</p>
              </div>
            </div>
          </section>

          {/* 기술 사양 */}
          <section ref={specsRef} className={`detail-section fade-in-up ${specsVisible ? 'visible' : ''}`}>
            <h2 className="detail-section-title">기술 사양</h2>
            <div className="tech-specs">
              <div className="spec-group">
                <h3>카메라 시스템</h3>
                <ul>
                  <li>일반 RGB 카메라 (4K 지원)</li>
                  <li>다중 시점 캘리브레이션</li>
                  <li>실시간 스테레오 비전</li>
                  <li>저조도 환경 최적화</li>
                </ul>
              </div>
              <div className="spec-group">
                <h3>AI 알고리즘</h3>
                <ul>
                  <li>2D/3D 포즈 추정</li>
                  <li>다중 객체 추적</li>
                  <li>손가락 트래킹</li>
                  <li>얼굴 표정 인식</li>
                  <li>동작 패턴 분석</li>
                  <li>실시간 3D 복원</li>
                </ul>
              </div>
              <div className="spec-group">
                <h3>적용 분야</h3>
                <ul>
                  <li>가상현실/증강현실</li>
                  <li>스포츠 분석</li>
                  <li>의료 재활</li>
                  <li>엔터테인먼트</li>
                  <li>교육 훈련</li>
                  <li>산업 안전</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 적용 사례 */}
          <section ref={casesRef} className={`detail-section fade-in-up ${casesVisible ? 'visible' : ''}`}>
            <h2 className="detail-section-title">적용 사례</h2>
            <div className="case-studies">
              <div className="case-item">
                <h3>VR/AR 인터랙션 시스템</h3>
                <p>가상현실 환경에서 자연스러운 손동작과 제스처 인식을 통해 몰입감 높은 상호작용 경험을 제공하고 있습니다.</p>
              </div>
              <div className="case-item">
                <h3>프로 스포츠 팀 동작 분석</h3>
                <p>축구, 야구 등 프로 스포츠 팀의 선수 동작 분석 및 훈련 개선에 활용되어 경기력 향상에 기여하고 있습니다.</p>
              </div>
              <div className="case-item">
                <h3>재활 치료 모니터링</h3>
                <p>병원에서 환자의 재활 운동을 정확히 측정하고 진전 상황을 실시간으로 추적하여 맞춤형 치료를 지원합니다.</p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section ref={ctaRef} className={`detail-cta fade-in ${ctaVisible ? 'visible' : ''}`}>
            <div className="cta-content">
              <h2>WiMotion 도입을 고려하고 계신가요?</h2>
              <p>전문가와 상담하여 맞춤형 솔루션을 제안받아보세요.</p>
              <a href="/#contact" className="cta-button primary">상담 문의하기</a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default WiMotionDetail; 
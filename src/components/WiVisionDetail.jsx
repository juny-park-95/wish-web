import React from "react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function WiVisionDetail() {
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
                <span className="breadcrumb-current">WiVision</span>
              </div>
              <h1 className="detail-title">WiVision</h1>
              <p className="detail-subtitle">공간 지능기반의 CCTV 영상분석 솔루션</p>
              <p className="detail-description">
                기존 CCTV 인프라를 활용하여 AI 기반 영상 분석으로 
                안전하고 효율적인 관제 환경을 제공하는 지능형 솔루션입니다.
              </p>
            </div>
            <div className="detail-hero-image">
              <img src="/service_WiVision.png" alt="WiVision" />
            </div>
          </div>
        </div>
      </div>

      <div className="service-detail-content">
        <div className="container">
          {/* 생성형 AI 기반 영상분석 특징 */}
          <section ref={demoRef} className={`detail-section fade-in-up ${demoVisible ? 'visible' : ''}`}>
            <h2 className="detail-section-title">생성형 AI 기반 영상분석의 차별점</h2>
            <div className="ai-comparison">
              <div className="comparison-intro">
                <p>생성형 AI를 활용하여 기존의 탐지/분류 AI 기반 영상분석 솔루션 대비 정확하고 상세한 상황정보를 사용자에게 제공합니다.</p>
              </div>
              
              <div className="comparison-container">
                <div className="comparison-section as-is">
                  <h3 className="comparison-title">As-Is (기존 방식)</h3>
                  <div className="comparison-images">
                    <img src="/WiVision_as_is_1.png" alt="기존 방식 1" />
                    <img src="/WiVision_as_is_2.png" alt="기존 방식 2" />
                  </div>
                  <div className="comparison-content">
                    <div className="comparison-feature">
                      <h4>탐지/분류 등 고전적인 AI모델을 이용한 Low Level Feature 수집</h4>
                      <ul>
                        <li>YOLO 등 탐지 모델 활용</li>
                        <li>객체의 종류 및 위치 등 Low Level Feature만 수집 가능</li>
                        <li>환경에 대한 정보 부족으로 특정 환경에서 성능 열화</li>
                      </ul>
                    </div>
                    <div className="comparison-feature">
                      <h4>Low Level Feature를 이용한 Rule Based 검출 알고리즘</h4>
                      <ul>
                        <li>사이트 별 알고리즘 파라미터 세팅 필요</li>
                        <li>사전 정의된 이벤트에 대한 검출만 가능</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="comparison-divider">
                  <div className="divider-icon">⚡</div>
                  <div className="divider-line"></div>
                  <span className="divider-text">AI Agent</span>
                </div>

                <div className="comparison-section to-be">
                  <h3 className="comparison-title">To-Be (WiVision)</h3>
                  <div className="comparison-images">
                    <img src="/WiVision_to_be_1.png" alt="WiVision 방식 1" />
                    <img src="/WiVision_to_be_2.png" alt="WiVision 방식 2" />
                  </div>
                  <div className="comparison-content">
                    <div className="comparison-feature">
                      <h4>VLM을 이용한 High Level Feature 수집</h4>
                      <ul>
                        <li>이미지를 입력받는 생성형 AI 활용</li>
                        <li>프롬프트로 제어되는 상세한 캡셔닝 수행 가능</li>
                        <li>Foundation Model 활용으로 대부분의 환경에서 성능 유지</li>
                      </ul>
                    </div>
                    <div className="comparison-feature">
                      <h4>LLM을 이용한 검출 알고리즘</h4>
                      <ul>
                        <li>사이트 별 파라미터 세팅 불필요</li>
                        <li>고객사 매뉴얼 기반 추가 이벤트 정의 용이</li>
                        <li>비정형 기록물의 정형 DB화 가능</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 주요 특징 */}
          <section ref={featuresRef} className={`detail-section fade-in-up ${featuresVisible ? 'visible' : ''}`}>
            <h2 className="detail-section-title">주요 특징</h2>
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">🔄</div>
                <h3>기존 관제인프라 활용 가능</h3>
                <p>RTSP 프로토콜을 따르는 모든 형식의 CCTV 영상 분석이 가능합니다. 전용 CCTV 설치 없이 기존 인프라를 그대로 활용할 수 있습니다.</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🎯</div>
                <h3>고객 맞춤형 영상 인식</h3>
                <p>사람, 화재/연기, 안전모, 건설장비 등 단일 이미지 내 환경인식과 쓰러짐, 이동경로, 통행량 등 시계열 인식을 고객 요청에 따라 커스터마이징 가능합니다.</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🔧</div>
                <h3>지속적인 업데이트 지원</h3>
                <p>MLOps 기반의 운영 데이터 수집 및 학습 시스템으로 지속적인 소프트웨어 성능 향상과 업데이트를 제공합니다.</p>
              </div>
            </div>
          </section>

          {/* 솔루션 구성 */}
          <section className={`detail-section fade-in-up ${featuresVisible ? 'visible' : ''}`}>
            <h2 className="detail-section-title">솔루션 구성</h2>
            <div className="system-components">
              <div className="component-item">
                <div className="component-header">
                  <div className="component-icon">🤖</div>
                  <h3>분석서버</h3>
                </div>
                <div className="component-content">
                  <h4>AI 기반 CCTV 영상 분석</h4>
                  <ul>
                    <li>실시간 영상 스트림 처리</li>
                    <li>딥러닝 모델을 통한 객체 인식</li>
                    <li>이상 상황 자동 감지</li>
                    <li>고정밀 영상 분석 엔진</li>
                  </ul>
                </div>
              </div>
              
              <div className="component-item">
                <div className="component-header">
                  <div className="component-icon">🔗</div>
                  <h3>운영서버</h3>
                </div>
                <div className="component-content">
                  <h4>사용자 앱과 분석서버 연동</h4>
                  <ul>
                    <li>사용자 앱과 분석서버 연동</li>
                    <li>고객사의 기존 플랫폼과 연동 가능</li>
                    <li>데이터 통합 관리</li>
                    <li>알림 및 이벤트 관리</li>
                  </ul>
                </div>
              </div>
              
              <div className="component-item">
                <div className="component-header">
                  <div className="component-icon">📱</div>
                  <h3>사용자 앱</h3>
                </div>
                <div className="component-content">
                  <h4>사용자 친화적인 관제 APP</h4>
                  <ul>
                    <li>직관적인 관제 인터페이스</li>
                    <li>실시간 모니터링</li>
                    <li>이상 상황 즉시 알림</li>
                    <li>통계 및 리포트 기능</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 기술 사양 */}
          <section ref={specsRef} className={`detail-section fade-in-up ${specsVisible ? 'visible' : ''}`}>
            <h2 className="detail-section-title">기술 사양</h2>
            <div className="tech-specs">
              <div className="spec-group">
                <h3>영상 처리</h3>
                <ul>
                  <li>RTSP 프로토콜 지원</li>
                  <li>4K/8K 고해상도 지원</li>
                  <li>실시간 영상 압축</li>
                  <li>다중 카메라 동기화</li>
                  <li>야간 시야 최적화</li>
                </ul>
              </div>
              <div className="spec-group">
                <h3>AI 분석 엔진</h3>
                <ul>
                  <li>딥러닝 객체 감지</li>
                  <li>행동 패턴 분석</li>
                  <li>화재/연기 탐지</li>
                  <li>안전모 착용 확인</li>
                  <li>침입/배회 감지</li>
                </ul>
              </div>
              <div className="spec-group">
                <h3>적용 환경</h3>
                <ul>
                  <li>건설 현장</li>
                  <li>공장 및 산업시설</li>
                  <li>수도시설</li>
                  <li>공공 인프라</li>
                  <li>상업 시설</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 레퍼런스 */}
          <section ref={casesRef} className={`detail-section fade-in-up ${casesVisible ? 'visible' : ''}`}>
            <h2 className="detail-section-title">레퍼런스</h2>
            <div className="case-studies">
              <div className="case-item">
                <h3>수도시설 안전관리 시스템</h3>
                <p>◇◇공사 해당 유역에 수도시설 안전관리 시스템을 설치하여 화재/연기, 침입, 배회, 쓰러짐, 안전모 미착용 등의 알고리즘을 28개 위치 CCTV 645개 채널에 성공적으로 적용했습니다.</p>
                <div className="reference-stats">
                  <div className="stat-item">
                    <span className="stat-number">28개</span>
                    <span className="stat-label">설치 위치</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">645개</span>
                    <span className="stat-label">CCTV 채널</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">5가지</span>
                    <span className="stat-label">적용 알고리즘</span>
                  </div>
                </div>
              </div>
              <div className="case-item">
                <h3>대형 건설 현장 안전 관리</h3>
                <p>100대 이상의 기존 CCTV를 활용하여 건설 현장의 안전모 착용, 위험구역 침입, 장비 운행을 실시간으로 모니터링하여 안전사고를 80% 감소시켰습니다.</p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section ref={ctaRef} className={`detail-cta fade-in ${ctaVisible ? 'visible' : ''}`}>
            <div className="cta-content">
              <h2>WiVision 도입을 고려하고 계신가요?</h2>
              <p>전문가와 상담하여 맞춤형 솔루션을 제안받아보세요.</p>
              <a href="/#contact" className="cta-button primary">상담 문의하기</a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default WiVisionDetail; 
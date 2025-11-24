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
    <div className="service-detail" style={{ background: 'var(--color-bg-primary)', minHeight: '100vh' }}>
      <div className="service-detail-hero" style={{
        padding: '120px 0 80px',
        background: 'radial-gradient(circle at 70% 30%, rgba(16, 185, 129, 0.1) 0%, transparent 70%)',
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
                <span className="breadcrumb-current" style={{ color: '#10B981' }}>WiVision</span>
              </div>
              <h1 className="detail-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem', lineHeight: '1.1' }}>WiVision</h1>
              <p className="detail-subtitle" style={{ fontSize: '1.5rem', color: '#34D399', marginBottom: '1.5rem', fontWeight: '500' }}>공간 지능기반의 CCTV 영상분석 솔루션</p>
              <p className="detail-description" style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>
                기존 CCTV 인프라를 활용하여 AI 기반 영상 분석으로
                안전하고 효율적인 관제 환경을 제공하는 지능형 솔루션입니다.
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
                background: 'radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, transparent 70%)',
                filter: 'blur(40px)',
                zIndex: 0
              }}></div>
              <img src="/service_WiVision.png" alt="WiVision" style={{ width: '100%', position: 'relative', zIndex: 1, borderRadius: '1rem', boxShadow: 'var(--shadow-lg)' }} />
            </div>
          </div>
        </div>
      </div>

      <div className="service-detail-content" style={{ padding: '0 0 80px' }}>
        <div className="container">
          {/* 생성형 AI 기반 영상분석 특징 */}
          <section ref={demoRef} className={`detail-section fade-in-up ${demoVisible ? 'visible' : ''}`} style={{ marginBottom: '8rem' }}>
            <h2 className="detail-section-title" style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '3rem' }}>생성형 AI 기반 영상분석의 차별점</h2>
            <div className="ai-comparison card" style={{ padding: '3rem' }}>
              <div className="comparison-intro" style={{ textAlign: 'center', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem' }}>
                <p style={{ fontSize: '1.2rem', color: 'var(--color-text-primary)' }}>생성형 AI를 활용하여 기존의 탐지/분류 AI 기반 영상분석 솔루션 대비 정확하고 상세한 상황정보를 사용자에게 제공합니다.</p>
              </div>

              <div className="comparison-container" style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '2rem', alignItems: 'stretch' }}>
                <div className="comparison-section as-is" style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '2rem', borderRadius: '1rem' }}>
                  <h3 className="comparison-title" style={{ fontSize: '1.5rem', color: 'var(--color-text-secondary)', marginBottom: '1.5rem', textAlign: 'center' }}>As-Is (기존 방식)</h3>
                  <div className="comparison-images" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                    <img src="/WiMotion_as_is_1.png" alt="기존 방식 1" style={{ width: '100%', borderRadius: '0.5rem' }} />
                    <img src="/WiMotion_as_is_2.png" alt="기존 방식 2" style={{ width: '100%', borderRadius: '0.5rem' }} />
                  </div>
                  <div className="comparison-content">
                    <div className="comparison-feature" style={{ marginBottom: '1.5rem' }}>
                      <h4 style={{ color: 'var(--color-text-primary)', marginBottom: '0.5rem', fontSize: '1rem' }}>탐지/분류 등 고전적인 AI모델을 이용한 Low Level Feature 수집</h4>
                      <ul style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', paddingLeft: '1.2rem' }}>
                        <li>YOLO 등 탐지 모델 활용</li>
                        <li>객체의 종류 및 위치 등 Low Level Feature만 수집 가능</li>
                        <li>환경에 대한 정보 부족으로 특정 환경에서 성능 열화</li>
                      </ul>
                    </div>
                    <div className="comparison-feature">
                      <h4 style={{ color: 'var(--color-text-primary)', marginBottom: '0.5rem', fontSize: '1rem' }}>Low Level Feature를 이용한 Rule Based 검출 알고리즘</h4>
                      <ul style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', paddingLeft: '1.2rem' }}>
                        <li>사이트 별 알고리즘 파라미터 세팅 필요</li>
                        <li>사전 정의된 이벤트에 대한 검출만 가능</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="comparison-divider" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#10B981' }}>
                  <div className="divider-icon" style={{ fontSize: '2rem', marginBottom: '1rem' }}>⚡</div>
                  <div className="divider-line" style={{ width: '2px', height: '100%', background: 'linear-gradient(to bottom, transparent, #10B981, transparent)' }}></div>
                  <span className="divider-text" style={{ marginTop: '1rem', fontWeight: 'bold', writingMode: 'vertical-rl', textOrientation: 'mixed' }}>AI Agent</span>
                </div>

                <div className="comparison-section to-be" style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '2rem', borderRadius: '1rem', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                  <h3 className="comparison-title" style={{ fontSize: '1.5rem', color: '#10B981', marginBottom: '1.5rem', textAlign: 'center' }}>To-Be (WiVision)</h3>
                  <div className="comparison-images" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                    <img src="/WiMotion_to_be_1.png" alt="WiVision 방식 1" style={{ width: '100%', borderRadius: '0.5rem' }} />
                    <img src="/WiMotion_to_be_2.png" alt="WiVision 방식 2" style={{ width: '100%', borderRadius: '0.5rem' }} />
                  </div>
                  <div className="comparison-content">
                    <div className="comparison-feature" style={{ marginBottom: '1.5rem' }}>
                      <h4 style={{ color: 'white', marginBottom: '0.5rem', fontSize: '1rem' }}>VLM을 이용한 High Level Feature 수집</h4>
                      <ul style={{ fontSize: '0.9rem', color: 'var(--color-text-primary)', paddingLeft: '1.2rem' }}>
                        <li>이미지를 입력받는 생성형 AI 활용</li>
                        <li>프롬프트로 제어되는 상세한 캡셔닝 수행 가능</li>
                        <li>Foundation Model 활용으로 대부분의 환경에서 성능 유지</li>
                      </ul>
                    </div>
                    <div className="comparison-feature">
                      <h4 style={{ color: 'white', marginBottom: '0.5rem', fontSize: '1rem' }}>LLM을 이용한 검출 알고리즘</h4>
                      <ul style={{ fontSize: '0.9rem', color: 'var(--color-text-primary)', paddingLeft: '1.2rem' }}>
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
          <section ref={featuresRef} className={`detail-section fade-in-up ${featuresVisible ? 'visible' : ''}`} style={{ marginBottom: '8rem' }}>
            <h2 className="detail-section-title" style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '3rem' }}>주요 특징</h2>
            <div className="features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {[
                { icon: "🔄", title: "기존 관제인프라 활용 가능", desc: "RTSP 프로토콜을 따르는 모든 형식의 CCTV 영상 분석이 가능합니다. 전용 CCTV 설치 없이 기존 인프라를 그대로 활용할 수 있습니다." },
                { icon: "🎯", title: "고객 맞춤형 영상 인식", desc: "사람, 화재/연기, 안전모, 건설장비 등 단일 이미지 내 환경인식과 쓰러짐, 이동경로, 통행량 등 시계열 인식을 고객 요청에 따라 커스터마이징 가능합니다." },
                { icon: "🔧", title: "지속적인 업데이트 지원", desc: "MLOps 기반의 운영 데이터 수집 및 학습 시스템으로 지속적인 소프트웨어 성능 향상과 업데이트를 제공합니다." }
              ].map((feature, idx) => (
                <div key={idx} className="feature-item card" style={{ padding: '2rem' }}>
                  <div className="feature-icon" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{feature.icon}</div>
                  <h3 style={{ fontSize: '1.25rem', color: '#34D399', marginBottom: '1rem' }}>{feature.title}</h3>
                  <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>{feature.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 솔루션 구성 */}
          <section className={`detail-section fade-in-up ${featuresVisible ? 'visible' : ''}`} style={{ marginBottom: '8rem' }}>
            <h2 className="detail-section-title" style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '3rem' }}>솔루션 구성</h2>
            <div className="system-components" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {[
                { icon: "🤖", title: "분석서버", subTitle: "AI 기반 CCTV 영상 분석", items: ["실시간 영상 스트림 처리", "딥러닝 모델을 통한 객체 인식", "이상 상황 자동 감지", "고정밀 영상 분석 엔진"] },
                { icon: "🔗", title: "운영서버", subTitle: "사용자 앱과 분석서버 연동", items: ["사용자 앱과 분석서버 연동", "고객사의 기존 플랫폼과 연동 가능", "데이터 통합 관리", "알림 및 이벤트 관리"] },
                { icon: "📱", title: "사용자 앱", subTitle: "사용자 친화적인 관제 APP", items: ["직관적인 관제 인터페이스", "실시간 모니터링", "이상 상황 즉시 알림", "통계 및 리포트 기능"] }
              ].map((comp, idx) => (
                <div key={idx} className="component-item card" style={{ padding: '2rem' }}>
                  <div className="component-header" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--color-border)' }}>
                    <div className="component-icon" style={{ fontSize: '2rem' }}>{comp.icon}</div>
                    <h3 style={{ fontSize: '1.25rem', color: 'white' }}>{comp.title}</h3>
                  </div>
                  <div className="component-content">
                    <h4 style={{ fontSize: '1.1rem', color: '#34D399', marginBottom: '1rem' }}>{comp.subTitle}</h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {comp.items.map((item, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>
                          <span style={{ color: '#10B981', fontSize: '0.8rem' }}>●</span> {item}
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
                { title: "영상 처리", items: ["RTSP 프로토콜 지원", "4K/8K 고해상도 지원", "실시간 영상 압축", "다중 카메라 동기화", "야간 시야 최적화"] },
                { title: "AI 분석 엔진", items: ["딥러닝 객체 감지", "행동 패턴 분석", "화재/연기 탐지", "안전모 착용 확인", "침입/배회 감지"] },
                { title: "적용 환경", items: ["건설 현장", "공장 및 산업시설", "수도시설", "공공 인프라", "상업 시설"] }
              ].map((group, idx) => (
                <div key={idx} className="spec-group">
                  <h3 style={{ fontSize: '1.25rem', color: '#34D399', marginBottom: '1.5rem', borderBottom: '2px solid #10B981', paddingBottom: '0.5rem', display: 'inline-block' }}>{group.title}</h3>
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

          {/* 레퍼런스 */}
          <section ref={casesRef} className={`detail-section fade-in-up ${casesVisible ? 'visible' : ''}`} style={{ marginBottom: '8rem' }}>
            <h2 className="detail-section-title" style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '3rem' }}>레퍼런스</h2>
            <div className="case-studies" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
              <div className="case-item card" style={{ padding: '2rem', borderLeft: '4px solid #10B981' }}>
                <h3 style={{ fontSize: '1.5rem', color: 'white', marginBottom: '1rem' }}>수도시설 안전관리 시스템</h3>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6', marginBottom: '2rem' }}>◇◇공사 해당 유역에 수도시설 안전관리 시스템을 설치하여 화재/연기, 침입, 배회, 쓰러짐, 안전모 미착용 등의 알고리즘을 74개 위치 CCTV 1031개 채널에 성공적으로 적용했습니다.</p>
                <div className="reference-stats" style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
                  <div className="stat-item" style={{ display: 'flex', flexDirection: 'column' }}>
                    <span className="stat-number" style={{ fontSize: '2rem', fontWeight: 'bold', color: '#10B981' }}>74개</span>
                    <span className="stat-label" style={{ color: 'var(--color-text-tertiary)' }}>설치 위치</span>
                  </div>
                  <div className="stat-item" style={{ display: 'flex', flexDirection: 'column' }}>
                    <span className="stat-number" style={{ fontSize: '2rem', fontWeight: 'bold', color: '#10B981' }}>1031개</span>
                    <span className="stat-label" style={{ color: 'var(--color-text-tertiary)' }}>CCTV 채널</span>
                  </div>
                  <div className="stat-item" style={{ display: 'flex', flexDirection: 'column' }}>
                    <span className="stat-number" style={{ fontSize: '2rem', fontWeight: 'bold', color: '#10B981' }}>5가지</span>
                    <span className="stat-label" style={{ color: 'var(--color-text-tertiary)' }}>적용 알고리즘</span>
                  </div>
                </div>
              </div>
              <div className="case-item card" style={{ padding: '2rem', borderLeft: '4px solid #10B981' }}>
                <h3 style={{ fontSize: '1.25rem', color: 'white', marginBottom: '1rem' }}>대형 건설 현장 안전 관리</h3>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>100대 이상의 기존 CCTV를 활용하여 건설 현장의 안전모 착용, 위험구역 침입, 장비 운행을 실시간으로 모니터링하고 있습니다.</p>
              </div>
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
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>WiVision 도입을 고려하고 계신가요?</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>전문가와 상담하여 맞춤형 솔루션을 제안받아보세요.</p>
              <a href="/#contact" className="btn btn-primary">상담 문의하기</a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default WiVisionDetail; 

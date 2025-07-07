import React from "react";
import { Link } from "react-router-dom";

function WiDrivingDetail() {
  return (
    <div className="service-detail">
      <div className="service-detail-hero">
        <div className="container">
          <div className="detail-hero-content">
            <div className="detail-hero-text">
              <div className="detail-breadcrumb">
                <Link to="/" className="breadcrumb-link">홈</Link>
                <span className="breadcrumb-separator">&gt;</span>
                <a href="/#services" className="breadcrumb-link">솔루션</a>
                <span className="breadcrumb-separator">&gt;</span>
                <span className="breadcrumb-current">WiDriving</span>
              </div>
              <h1 className="detail-title">WiDriving</h1>
              <p className="detail-subtitle">공간 지능기반의 (건설/농업)장비 작업 어시스턴트 및 자율작업 컨트롤 유닛</p>
              <p className="detail-description">
                시각 인공지능과 센서 퓨전을 통한 공간지능 기반의 인지/제어 시스템으로 
                건설과 농업 분야에 혁신적인 자동화 솔루션을 제공합니다.
              </p>
            </div>
            <div className="detail-hero-image">
              <img src="/service_WiDriving.png" alt="WiDriving" />
            </div>
          </div>
        </div>
      </div>

      <div className="service-detail-content">
        <div className="container">
          {/* 데모 영상 */}
          <section className="detail-section">
            <h2 className="detail-section-title">솔루션 데모</h2>
            <div className="demo-video">
              <video controls width="100%" style={{maxWidth: '800px', margin: '0 auto', display: 'block'}}>
                <source src="/WiDriving_demo.mp4" type="video/mp4" />
                브라우저가 동영상을 지원하지 않습니다.
              </video>
            </div>
          </section>

          {/* 주요 특징 */}
          <section className="detail-section">
            <h2 className="detail-section-title">주요 특징</h2>
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">🔧</div>
                <h3>제조사 CAN 제어 프로토콜 활용</h3>
                <p>기존 장비의 CAN 제어 프로토콜을 활용하여 자율주행/작업제어를 구현합니다. 최소한의 제조사 리소스로 자율주행 기능 도입이 가능합니다.</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🚀</div>
                <h3>높은 기대효과</h3>
                <p>시장 기술 대비 다양한 작업보조 및 자율작업 기능을 제공합니다. GPS 기반을 넘어선 시각 AI와 센서 퓨전으로 커스터마이즈된 기능 적용이 가능합니다.</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🔄</div>
                <h3>지속적인 업데이트 플랫폼</h3>
                <p>MLOps 기반의 장비 운영 데이터 수집 및 AI 학습 시스템으로 지속적인 소프트웨어 성능 향상과 업데이트를 제공합니다.</p>
              </div>
            </div>
          </section>

          {/* 구성요소 */}
          <section className="detail-section">
            <h2 className="detail-section-title">시스템 구성요소</h2>
            <div className="system-components">
              <div className="component-item">
                <div className="component-header">
                  <div className="component-icon">👁️</div>
                  <h3>인지 (Perception)</h3>
                  <span className="component-frequency">초당 10회</span>
                </div>
                <div className="component-content">
                  <h4>환경인식 시스템</h4>
                  <ul>
                    <li>이미지 분석 AI</li>
                    <li>센서 신호의 시계열 분석 AI</li>
                  </ul>
                </div>
              </div>
              
              <div className="component-item">
                <div className="component-header">
                  <div className="component-icon">🧠</div>
                  <h3>판단 (Decision)</h3>
                  <span className="component-frequency">초당 20회</span>
                </div>
                <div className="component-content">
                  <h4>공간보정 및 판단 시스템</h4>
                  <ul>
                    <li>이미지 분석 결과의 시공간 정합</li>
                    <li>센서 신호의 정확한 시간 정합</li>
                    <li>이벤트 판정</li>
                  </ul>
                </div>
              </div>
              
              <div className="component-item">
                <div className="component-header">
                  <div className="component-icon">⚡</div>
                  <h3>제어 (Control)</h3>
                  <span className="component-frequency">초당 100회</span>
                </div>
                <div className="component-content">
                  <h4>실시간 제어 명령 시스템</h4>
                  <ul>
                    <li>작업을 위한 제어명령</li>
                    <li>제어명령의 피드백</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 기술 사양 */}
          <section className="detail-section">
            <h2 className="detail-section-title">기술 사양</h2>
            <div className="tech-specs">
              <div className="spec-group">
                <h3>센서 시스템</h3>
                <ul>
                  <li>LiDAR 센서</li>
                  <li>RGB-D 카메라</li>
                  <li>IMU 센서</li>
                  <li>GPS/GNSS</li>
                </ul>
              </div>
              <div className="spec-group">
                <h3>AI 기술</h3>
                <ul>
                  <li>딥러닝 기반 객체 인식</li>
                  <li>SLAM (동시위치추정 및 지도작성)</li>
                  <li>경로 계획 알고리즘</li>
                  <li>예측 제어 시스템</li>
                </ul>
              </div>
              <div className="spec-group">
                <h3>지원 장비</h3>
                <ul>
                  <li>굴삭기</li>
                  <li>불도저</li>
                  <li>트랙터</li>
                  <li>수확기</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 적용 사례 */}
          <section className="detail-section">
            <h2 className="detail-section-title">적용 사례</h2>
            <div className="case-studies">
              <div className="case-item">
                <h3>대형 건설 현장 자동화</h3>
                <p>10대 이상의 건설 장비를 동시에 자동화하여 작업 효율성을 40% 향상시켰습니다.</p>
              </div>
              <div className="case-item">
                <h3>스마트 농장 구축</h3>
                <p>100헥타르 규모의 농장에서 완전 자율 주행 시스템을 도입하여 인력 절약과 정밀 농업을 실현했습니다.</p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="detail-cta">
            <div className="cta-content">
              <h2>WiDriving 도입을 고려하고 계신가요?</h2>
              <p>전문가와 상담하여 맞춤형 솔루션을 제안받아보세요.</p>
              <a href="/#contact" className="cta-button primary">상담 문의하기</a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default WiDrivingDetail; 
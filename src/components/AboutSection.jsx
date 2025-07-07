import React from "react";

function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">회사 소개</h2>
          <p className="section-subtitle">
            위시는 고객의 솔루션을 현실로 구현하는 AI 전문 기업입니다
          </p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <div className="about-item">
              <h3>우리의 미션</h3>
              <p>
                위시(Wish)의 미션은, 고객사가 생각하는 솔루션을 현실 세계에 구현하는 것입니다. 
                공간 지능/생성형 AI와 같은 최신의 기술에 익숙한 위시의 연구원들이, 
                AI 연구개발에 필요한 인프라 구축을 시작으로, 데이터 수집, AI 모델 학습, 
                솔루션 개발의 전 과정을 고객사와 함께 합니다.
              </p>
            </div>
            
            <div className="about-item">
              <h3>우리가 찾는 파트너</h3>
              <p>
                위시는, 더욱 도전적인 과업을 제안해 주실 파트너를 찾고 있습니다. 
                함께 혁신적인 AI 솔루션을 만들어나가며, 
                기술의 한계를 뛰어넘는 새로운 가능성을 탐구하고자 합니다.
              </p>
            </div>

            <div className="about-item">
              <h3>우리의 전문 기술</h3>
              <div className="tech-list">
                <div className="tech-item">
                  <span className="tech-icon">🧠</span>
                  <span>공간 지능 AI</span>
                </div>
                <div className="tech-item">
                  <span className="tech-icon">✨</span>
                  <span>생성형 AI</span>
                </div>
                <div className="tech-item">
                  <span className="tech-icon">🔬</span>
                  <span>AI 연구개발</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-process">
            <h3>AI 솔루션 개발 프로세스</h3>
            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">01</div>
                <div className="step-content">
                  <h4>인프라 구축</h4>
                  <p>AI 연구개발에 필요한 기반 인프라를 설계하고 구축합니다</p>
                </div>
              </div>
              
              <div className="process-step">
                <div className="step-number">02</div>
                <div className="step-content">
                  <h4>데이터 수집</h4>
                  <p>프로젝트 목적에 맞는 고품질 데이터를 수집하고 정제합니다</p>
                </div>
              </div>
              
              <div className="process-step">
                <div className="step-number">03</div>
                <div className="step-content">
                  <h4>AI 모델 학습</h4>
                  <p>최신 AI 기술을 활용하여 맞춤형 모델을 개발하고 학습시킵니다</p>
                </div>
              </div>
              
              <div className="process-step">
                <div className="step-number">04</div>
                <div className="step-content">
                  <h4>솔루션 개발</h4>
                  <p>완성된 AI 모델을 실제 비즈니스에 적용 가능한 솔루션으로 구현합니다</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection; 
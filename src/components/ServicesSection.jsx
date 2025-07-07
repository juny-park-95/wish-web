import React from "react";
import { Link } from "react-router-dom";

function ServicesSection() {
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
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">우리의 솔루션</h2>
          <p className="section-subtitle">
            최첨단 AI 기술로 구현한 위시의 혁신적인 솔루션들을 소개합니다
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-image">
                <img src={service.image} alt={service.name} />
                <div className="service-category">{service.category}</div>
              </div>
              <div className="service-content">
                <div className="service-header">
                  <h3 className="service-name">{service.name}</h3>
                  <h4 className="service-title">{service.title}</h4>
                </div>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <div className="service-action">
                  <Link to={service.link} className="service-detail-btn">
                    자세히 보기
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="services-cta">
          <p>더 자세한 솔루션 정보가 궁금하시나요?</p>
          <button 
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="cta-button primary"
          >
            문의하기
          </button>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection; 
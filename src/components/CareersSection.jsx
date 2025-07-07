import React from "react";

function CareersSection() {
  const hiringProcess = [
    {
      step: "01",
      title: "서류 전형",
      description: "이력서 및 포트폴리오 검토",
      duration: "1-2주",
      details: [
        "온라인 지원서 제출",
        "이력서 및 자기소개서 검토",
        "포트폴리오 평가 (개발 직군)"
      ]
    },
    {
      step: "02",
      title: "1차 면접",
      description: "기술 면접 및 인성 면접",
      duration: "1주",
      details: [
        "기술 역량 평가",
        "문제 해결 능력 검토",
        "팀 적합성 및 소통 능력 평가"
      ]
    },
    {
      step: "03",
      title: "최종 합격",
      description: "입사 조건 협의 및 온보딩",
      duration: "1주",
      details: [
        "처우 협의 및 계약서 작성",
        "입사일 조정",
        "온보딩 프로그램 안내"
      ]
    }
  ];

  const benefits = [
    {
      category: "급여 및 보상",
      icon: "💰",
      items: [
        "경쟁력 있는 연봉",
        "인센티브"
      ]
    },
    {
      category: "근무 환경",
      icon: "🏢",
      items: [
        "최신 장비 제공",
        "쾌적한 사무 공간"
      ]
    },
    {
      category: "교육 및 성장",
      icon: "📚",
      items: [
        "교육비 지원",
        "컨퍼런스 참석 지원",
        "사내 기술 세미나"
      ]
    },
    {
      category: "휴가 및 시간",
      icon: "🏖️",
      items: [
        "연차 15일",
        "리프레시 휴가"
      ]
    },
    {
      category: "건강 및 복지",
      icon: "⚕️",
      items: [
        "4대 보험 완비"
      ]
    },
    {
      category: "기타 혜택",
      icon: "🎉",
      items: [
        "간식 및 음료 제공",
        "회식비 지원",
        "명절 선물"
      ]
    }
  ];

  const openPositions = [
    {
      title: "AI 연구원",
      department: "AI Research",
      type: "정규직",
      experience: "경력 3년 이상",
      skills: ["Python", "TensorFlow/PyTorch", "Computer Vision", "NLP"]
    },
    {
      title: "백엔드 개발자",
      department: "Engineering",
      type: "정규직",
      experience: "경력 2년 이상",
      skills: ["Python", "Django/FastAPI", "AWS", "Database"]
    },
    {
      title: "프론트엔드 개발자",
      department: "Engineering",
      type: "정규직",
      experience: "경력 2년 이상",
      skills: ["React", "TypeScript", "Next.js", "Flutter", "UI/UX"]
    }
  ];

  return (
    <section id="careers" className="careers-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">함께 성장할 인재를 찾습니다</h2>
          <p className="section-subtitle">
            위시와 함께 AI 기술의 미래를 만들어갈 동료를 기다립니다
          </p>
        </div>

        {/* 채용 프로세스 */}
        <div className="hiring-process">
          <h3 className="subsection-title">채용 프로세스</h3>
          <div className="process-timeline">
            {hiringProcess.map((process, index) => (
              <div key={index} className="process-item">
                <div className="process-number">{process.step}</div>
                <div className="process-content">
                  <h4 className="process-title">{process.title}</h4>
                  <p className="process-description">{process.description}</p>
                  <span className="process-duration">소요기간: {process.duration}</span>
                  <ul className="process-details">
                    {process.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 복지 혜택 */}
        <div className="benefits-section">
          <h3 className="subsection-title">복지 혜택</h3>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h4 className="benefit-title">{benefit.category}</h4>
                <ul className="benefit-list">
                  {benefit.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 채용 공고 */}
        <div className="open-positions">
          <h3 className="subsection-title">채용 공고</h3>
          <div className="positions-grid">
            {openPositions.map((position, index) => (
              <div key={index} className="position-card">
                <div className="position-header">
                  <h4 className="position-title">{position.title}</h4>
                  <div className="position-meta">
                    <span className="position-department">{position.department}</span>
                    <span className="position-type">{position.type}</span>
                  </div>
                </div>
                <div className="position-requirements">
                  <p className="position-experience">{position.experience}</p>
                  <div className="position-skills">
                    {position.skills.map((skill, idx) => (
                      <span key={idx} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
                <button 
                  className="apply-button"
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                >
                  지원하기
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="careers-cta">
          <p>지금 바로 위시의 팀원이 되어보세요!</p>
          <button 
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="cta-button primary"
          >
            지원 문의하기
          </button>
        </div>
      </div>
    </section>
  );
}

export default CareersSection; 
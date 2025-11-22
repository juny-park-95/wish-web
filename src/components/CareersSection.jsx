import React from "react";
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function CareersSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.2);
  const { ref: processRef, isVisible: processVisible } = useScrollAnimation(0.2);
  const { ref: benefitsRef, isVisible: benefitsVisible } = useScrollAnimation(0.2);
  const { ref: positionsRef, isVisible: positionsVisible } = useScrollAnimation(0.2);

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
      duration: "2-3일",
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
      items: ["경쟁력 있는 연봉", "인센티브"]
    },
    {
      category: "근무 환경",
      icon: "🏢",
      items: ["최신 장비 제공", "쾌적한 사무 공간"]
    },
    {
      category: "교육 및 성장",
      icon: "📚",
      items: ["교육비 지원", "컨퍼런스 참석 지원", "사내 기술 세미나"]
    },
    {
      category: "휴가 및 시간",
      icon: "🏖️",
      items: ["연차 15일", "리프레시 휴가"]
    },
    {
      category: "건강 및 복지",
      icon: "⚕️",
      items: ["4대 보험 완비"]
    },
    {
      category: "기타 혜택",
      icon: "🎉",
      items: ["간식 및 음료 제공", "회식비 지원", "명절 선물"]
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
    <section id="careers" className="section" style={{ background: 'var(--color-bg-secondary)' }}>
      <div className="container">
        <div ref={headerRef} className={`section-header fade-in ${headerVisible ? 'visible' : ''}`} style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>
            함께 성장할 <span className="text-gradient">인재</span>를 찾습니다
          </h2>
          <p className="section-subtitle" style={{ fontSize: '1.2rem', color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            위시와 함께 AI 기술의 미래를 만들어갈 동료를 기다립니다
          </p>
        </div>

        {/* 채용 프로세스 */}
        <div ref={processRef} className={`hiring-process fade-in-up ${processVisible ? 'visible' : ''}`} style={{ marginBottom: '8rem' }}>
          <h3 className="subsection-title" style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '4rem', color: 'white' }}>채용 프로세스</h3>
          <div className="process-timeline" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {hiringProcess.map((process, index) => (
              <div key={index} className="process-item card" style={{ position: 'relative', padding: '2rem' }}>
                <div className="process-number" style={{
                  width: '3rem',
                  height: '3rem',
                  background: 'var(--gradient-primary)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  color: 'white',
                  marginBottom: '1.5rem'
                }}>{process.step}</div>
                <div className="process-content">
                  <h4 className="process-title" style={{ fontSize: '1.25rem', color: 'var(--color-primary-light)', marginBottom: '0.5rem' }}>{process.title}</h4>
                  <p className="process-description" style={{ color: 'white', marginBottom: '0.5rem' }}>{process.description}</p>
                  <span className="process-duration" style={{ display: 'block', color: 'var(--color-text-tertiary)', fontSize: '0.9rem', marginBottom: '1rem' }}>소요기간: {process.duration}</span>
                  <ul className="process-details" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {process.details.map((detail, idx) => (
                      <li key={idx} style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ color: 'var(--color-primary)', fontSize: '0.5rem' }}>●</span> {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 복지 혜택 */}
        <div ref={benefitsRef} className={`benefits-section fade-in-up ${benefitsVisible ? 'visible' : ''}`} style={{ marginBottom: '8rem' }}>
          <h3 className="subsection-title" style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '4rem', color: 'white' }}>복지 혜택</h3>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card card" style={{ textAlign: 'center' }}>
                <div className="benefit-icon" style={{ fontSize: '3rem', marginBottom: '1rem' }}>{benefit.icon}</div>
                <h4 className="benefit-title" style={{ fontSize: '1.25rem', color: 'var(--color-primary-light)', marginBottom: '1.5rem' }}>{benefit.category}</h4>
                <ul className="benefit-list" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {benefit.items.map((item, idx) => (
                    <li key={idx} style={{ color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 채용 공고 */}
        <div ref={positionsRef} className={`open-positions fade-in-up ${positionsVisible ? 'visible' : ''}`}>
          <h3 className="subsection-title" style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '4rem', color: 'white' }}>채용 공고</h3>
          <div className="positions-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {openPositions.map((position, index) => (
              <div key={index} className="position-card card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div className="position-header" style={{ marginBottom: '1.5rem' }}>
                  <h4 className="position-title" style={{ fontSize: '1.5rem', color: 'white', marginBottom: '0.5rem' }}>{position.title}</h4>
                  <div className="position-meta" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <span className="position-department" style={{ background: 'rgba(59, 130, 246, 0.1)', color: 'var(--color-primary-light)', padding: '0.25rem 0.75rem', borderRadius: '999px', fontSize: '0.8rem' }}>{position.department}</span>
                    <span className="position-type" style={{ background: 'rgba(59, 130, 246, 0.1)', color: 'var(--color-primary-light)', padding: '0.25rem 0.75rem', borderRadius: '999px', fontSize: '0.8rem' }}>{position.type}</span>
                  </div>
                </div>
                <div className="position-requirements" style={{ marginBottom: '2rem' }}>
                  <p className="position-experience" style={{ color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>{position.experience}</p>
                  <div className="position-skills" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {position.skills.map((skill, idx) => (
                      <span key={idx} className="skill-tag" style={{ background: 'rgba(255, 255, 255, 0.05)', color: 'var(--color-text-tertiary)', padding: '0.25rem 0.75rem', borderRadius: '0.5rem', fontSize: '0.8rem' }}>{skill}</span>
                    ))}
                  </div>
                </div>
                <button
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                >
                  지원하기
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="careers-cta" style={{
          marginTop: '6rem',
          textAlign: 'center',
          padding: '4rem 2rem',
          background: 'var(--gradient-card)',
          borderRadius: '2rem',
          border: '1px solid var(--color-border)'
        }}>
          <p style={{ fontSize: '1.5rem', marginBottom: '2rem', fontWeight: '600' }}>지금 바로 위시의 팀원이 되어보세요!</p>
          <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="btn btn-primary"
          >
            지원 문의하기
          </button>
        </div>
      </div>
    </section>
  );
}

export default CareersSection; 
import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function ContactSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.2);
  const { ref: infoRef, isVisible: infoVisible } = useScrollAnimation(0.2);
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation(0.2);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus('');

    try {
      // EmailJS로 이메일 발송
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'contact@wish.global', // 수신할 이메일
          subject: `위시 홈페이지 문의 - ${formData.name}`
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key'
      );

      console.log('이메일 발송 성공:', result.text);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      alert('문의사항이 성공적으로 전송되었습니다! 빠른 시일 내에 연락드리겠습니다.');

    } catch (error) {
      console.error('이메일 발송 실패:', error);
      setSubmitStatus('error');
      alert('문의사항 전송에 실패했습니다. 잠시 후 다시 시도해주세요.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="section" style={{ background: 'var(--color-bg-primary)' }}>
      <div className="container">
        <div ref={headerRef} className={`section-header fade-in ${headerVisible ? 'visible' : ''}`} style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>
            문의<span className="text-gradient">하기</span>
          </h2>
          <p className="section-subtitle" style={{ fontSize: '1.2rem', color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            위시에 대해 궁금한 점이 있으시면 언제든 연락주세요
          </p>
        </div>

        <div className="contact-content" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'start'
        }}>
          <div ref={infoRef} className={`contact-info fade-in-right ${infoVisible ? 'visible' : ''}`} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="contact-item card" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '2rem' }}>
              <div className="contact-icon" style={{ fontSize: '2rem', background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>📧</div>
              <div className="contact-details">
                <h4 style={{ fontSize: '1.1rem', color: 'var(--color-primary-light)', marginBottom: '0.5rem' }}>이메일</h4>
                <p style={{ color: 'white', fontSize: '1.1rem' }}>contact@wish.global</p>
              </div>
            </div>

            <div className="contact-item card" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '2rem' }}>
              <div className="contact-icon" style={{ fontSize: '2rem', background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>📍</div>
              <div className="contact-details">
                <h4 style={{ fontSize: '1.1rem', color: 'var(--color-primary-light)', marginBottom: '0.5rem' }}>주소</h4>
                <p style={{ color: 'white', lineHeight: '1.6' }}>서울특별시 서초구 양재천로19길 14<br />504호 (양재동)</p>
              </div>
            </div>
          </div>

          <form ref={formRef} className={`contact-form card fade-in-left ${formVisible ? 'visible' : ''}`} onSubmit={handleSubmit} style={{ padding: '3rem' }}>
            <div className="form-group" style={{ marginBottom: '2rem' }}>
              <label htmlFor="name" style={{ display: 'block', marginBottom: '0.75rem', color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>이름</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isLoading}
                className="form-input"
                style={{
                  width: '100%',
                  padding: '1rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '0.5rem',
                  color: 'white',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'}
              />
            </div>

            <div className="form-group" style={{ marginBottom: '2rem' }}>
              <label htmlFor="email" style={{ display: 'block', marginBottom: '0.75rem', color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>이메일</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isLoading}
                className="form-input"
                style={{
                  width: '100%',
                  padding: '1rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '0.5rem',
                  color: 'white',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'}
              />
            </div>

            <div className="form-group" style={{ marginBottom: '2rem' }}>
              <label htmlFor="message" style={{ display: 'block', marginBottom: '0.75rem', color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>메시지</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
                disabled={isLoading}
                className="form-input"
                style={{
                  width: '100%',
                  padding: '1rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '0.5rem',
                  color: 'white',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  resize: 'vertical'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary" disabled={isLoading} style={{ width: '100%' }}>
              {isLoading ? '전송 중...' : '문의 보내기'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection; 
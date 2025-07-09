import React, { useState } from "react";
import emailjs from '@emailjs/browser';

function ContactSection() {
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
          to_email: 'bwlee@wish.global', // 수신할 이메일
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
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">문의하기</h2>
          <p className="section-subtitle">
            위시에 대해 궁금한 점이 있으시면 언제든 연락주세요
          </p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div className="contact-details">
                <h4>이메일</h4>
                <p>bwlee@wish.global</p>
              </div>
            </div>
            
            {/*
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div className="contact-details">
                  <h4>전화번호</h4>
                  <p>02-1234-5678</p>
                </div>
              </div>
              */}
            
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div className="contact-details">
                <h4>주소</h4>
                <p>서울시 서초구 태봉로 114<br />양재 AIHub 808호</p>
              </div>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">이름</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">이메일</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">메시지</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
                disabled={isLoading}
              ></textarea>
            </div>
            
            <button type="submit" className="submit-button" disabled={isLoading}>
              {isLoading ? '전송 중...' : '문의 보내기'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection; 
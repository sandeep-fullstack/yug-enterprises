import React, { useState } from 'react';
import { MapPin, Phone, Clock, Mail, MessageCircle, Send, CheckCircle2, Navigation } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

export default function ContactSection() {
  const [sent, setSent] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.phone) {
      alert('Please enter your name and phone number');
      return;
    }
    setSent(true);
    setTimeout(() => {
      window.open(
        `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
          `*DIRECT CONTACT INQUIRY - YUG ENTERPRISES*\n` +
          `*Name:* ${contactForm.name}\n` +
          `*Phone:* ${contactForm.phone}\n` +
          `*Message:* ${contactForm.message || 'I want to inquire about electronics service / sales.'}`
        )}`,
        '_blank'
      );
    }, 400);
  };

  return (
    <section id="contact" style={{ padding: '80px 0', background: '#090C15' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 50px' }}>
          <span className="badge-gold" style={{ marginBottom: '14px' }}>
            Visit or Get in Touch
          </span>
          <h2 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', marginBottom: '16px' }}>
            Contact <span className="gold-text">YUG ENTERPRISES</span>
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '1rem', lineHeight: 1.6 }}>
            Visit our shop in Balaghat or request an urgent technician visit to your home. We are at your service 7 days a week!
          </p>
        </div>

        {/* 2-Column Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          {/* Left Column: Contact Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            {/* Address Card */}
            <div className="card-dark" style={{ padding: '24px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{ width: '46px', height: '46px', borderRadius: '12px', background: 'rgba(245, 158, 11, 0.12)', border: '1px solid rgba(245, 158, 11, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <MapPin size={22} color="#F59E0B" />
              </div>
              <div>
                <h4 style={{ fontSize: '1.05rem', color: '#FFFFFF', fontWeight: 700, marginBottom: '6px' }}>Shop Location</h4>
                <p style={{ fontSize: '0.88rem', color: '#CBD5E1', lineHeight: 1.5, marginBottom: '12px' }}>
                  {COMPANY_INFO.address}
                </p>
                <a 
                  href={COMPANY_INFO.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: '#FDE047', fontWeight: 700 }}
                >
                  <Navigation size={13} />
                  <span>Get Driving Directions on Google Maps</span>
                </a>
              </div>
            </div>

            {/* Direct Phone Lines */}
            <div className="card-dark" style={{ padding: '24px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{ width: '46px', height: '46px', borderRadius: '12px', background: 'rgba(245, 158, 11, 0.12)', border: '1px solid rgba(245, 158, 11, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Phone size={22} color="#F59E0B" />
              </div>
              <div>
                <h4 style={{ fontSize: '1.05rem', color: '#FFFFFF', fontWeight: 700, marginBottom: '6px' }}>Call Direct</h4>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '8px' }}>
                  <a href={`tel:${COMPANY_INFO.phones[0]}`} style={{ fontSize: '1rem', color: '#FDE047', fontWeight: 700 }}>
                    +91 {COMPANY_INFO.phones[0]}
                  </a>
                  <span style={{ color: '#64748B' }}>|</span>
                  <a href={`tel:${COMPANY_INFO.phones[1]}`} style={{ fontSize: '1rem', color: '#FFFFFF', fontWeight: 600 }}>
                    +91 {COMPANY_INFO.phones[1]}
                  </a>
                </div>
                <p style={{ fontSize: '0.78rem', color: '#94A3B8' }}>Direct owner / technician dispatch line</p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="card-dark" style={{ padding: '24px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{ width: '46px', height: '46px', borderRadius: '12px', background: 'rgba(245, 158, 11, 0.12)', border: '1px solid rgba(245, 158, 11, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Clock size={22} color="#F59E0B" />
              </div>
              <div>
                <h4 style={{ fontSize: '1.05rem', color: '#FFFFFF', fontWeight: 700, marginBottom: '4px' }}>Working Hours</h4>
                <p style={{ fontSize: '0.88rem', color: '#CBD5E1', marginBottom: '4px' }}>{COMPANY_INFO.hours}</p>
                <span style={{ fontSize: '0.75rem', color: '#10B981', fontWeight: 700 }}>● Emergency Breakdown Assistance Available</span>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Quick Contact / WhatsApp Box */}
          <div className="card-dark" style={{ padding: '32px' }}>
            <h3 style={{ fontSize: '1.3rem', color: '#FFFFFF', fontWeight: 800, marginBottom: '8px' }}>
              Send Us a Quick Message
            </h3>
            <p style={{ fontSize: '0.84rem', color: '#94A3B8', marginBottom: '24px' }}>
              Have a question about a product price, repair warranty, or service area? Drop your details and we will reply immediately.
            </p>

            {!sent ? (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#E2E8F0', marginBottom: '6px' }}>
                    Your Name *
                  </label>
                  <input 
                    type="text" 
                    required
                    placeholder="Enter your full name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', background: '#141C2E', border: '1px solid rgba(255,255,255,0.1)', color: '#FFFFFF', fontSize: '0.88rem', outline: 'none' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#E2E8F0', marginBottom: '6px' }}>
                    Phone Number *
                  </label>
                  <input 
                    type="tel" 
                    required
                    placeholder="10-digit mobile number"
                    value={contactForm.phone}
                    onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                    style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', background: '#141C2E', border: '1px solid rgba(255,255,255,0.1)', color: '#FFFFFF', fontSize: '0.88rem', outline: 'none' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#E2E8F0', marginBottom: '6px' }}>
                    Message / Requirement
                  </label>
                  <textarea 
                    rows={3}
                    placeholder="Tell us what you need (e.g. AC service quotation or new fridge price)..."
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', background: '#141C2E', border: '1px solid rgba(255,255,255,0.1)', color: '#FFFFFF', fontSize: '0.88rem', outline: 'none', resize: 'vertical' }}
                  />
                </div>

                <button 
                  type="submit"
                  className="btn-gold"
                  style={{ width: '100%', padding: '14px', fontSize: '0.9rem', marginTop: '6px' }}
                >
                  <Send size={16} />
                  <span>Submit Inquiry to WhatsApp Desk</span>
                </button>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                <CheckCircle2 size={48} color="#10B981" style={{ margin: '0 auto 16px' }} />
                <h4 style={{ fontSize: '1.2rem', color: '#FFFFFF', marginBottom: '8px' }}>Thank You!</h4>
                <p style={{ color: '#94A3B8', fontSize: '0.86rem', marginBottom: '20px' }}>
                  Opening WhatsApp to connect with our Balaghat team...
                </p>
                <button
                  onClick={() => setSent(false)}
                  style={{ color: '#FDE047', fontSize: '0.82rem', textDecoration: 'underline' }}
                >
                  Send another message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS_DATA } from '../data/mockData';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" style={{ padding: '80px 0', background: '#0D1220', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container" style={{ maxWidth: '850px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span className="badge-gold" style={{ marginBottom: '14px' }}>
            Got Questions? We Have Answers
          </span>
          <h2 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', marginBottom: '16px' }}>
            Frequently Asked <span className="gold-text">Questions</span>
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '1rem', lineHeight: 1.6 }}>
            Everything you need to know about our repair charges, spare parts warranty, and appliance delivery.
          </p>
        </div>

        {/* Accordion */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                style={{ background: '#121828', borderRadius: '14px', border: isOpen ? '1px solid rgba(245, 158, 11, 0.4)' : '1px solid rgba(255,255,255,0.06)', overflow: 'hidden', transition: 'all 0.25s ease' }}
              >
                <button
                  onClick={() => toggle(idx)}
                  style={{ width: '100%', padding: '18px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', textAlign: 'left', background: 'transparent', color: '#FFFFFF', gap: '14px' }}
                >
                  <span style={{ fontSize: '0.96rem', fontWeight: 700, color: isOpen ? '#FDE047' : '#FFFFFF' }}>
                    {faq.q}
                  </span>
                  <div style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.25s ease', color: isOpen ? '#F59E0B' : '#94A3B8', flexShrink: 0 }}>
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div style={{ padding: '0 20px 20px', color: '#CBD5E1', fontSize: '0.88rem', lineHeight: 1.6, borderTop: '1px solid rgba(255,255,255,0.04)', paddingTop: '14px' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

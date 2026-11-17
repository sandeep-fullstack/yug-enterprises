import React from 'react';
import { Calendar, PhoneCall, Truck, ShieldCheck, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '../data/mockData';

export default function ProcessSection({ onOpenBooking }) {
  const icons = [
    <Calendar size={24} color="#F59E0B" />,
    <PhoneCall size={24} color="#F59E0B" />,
    <Truck size={24} color="#F59E0B" />,
    <ShieldCheck size={24} color="#F59E0B" />
  ];

  return (
    <section id="process" style={{ padding: '80px 0', background: '#090C15', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 50px' }}>
          <span className="badge-gold" style={{ marginBottom: '14px' }}>
            Seamless 4-Step Journey
          </span>
          <h2 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', marginBottom: '16px' }}>
            How Our <span className="gold-text">Service Process</span> Works
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '1rem', lineHeight: 1.6 }}>
            Getting your home appliances serviced or buying new products in Balaghat has never been this fast, easy, and transparent.
          </p>
        </div>

        {/* Process Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', position: 'relative' }}>
          {PROCESS_STEPS.map((step, idx) => (
            <div 
              key={idx}
              className="card-dark"
              style={{ padding: '28px 24px', position: 'relative', overflow: 'hidden' }}
            >
              {/* Giant Step Number in Background */}
              <div style={{ position: 'absolute', top: '10px', right: '14px', fontSize: '3.6rem', fontWeight: 900, color: 'rgba(245, 158, 11, 0.08)', lineHeight: 1, pointerEvents: 'none' }}>
                {step.step}
              </div>

              {/* Step Icon */}
              <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: 'rgba(245, 158, 11, 0.12)', border: '1px solid rgba(245, 158, 11, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                {icons[idx]}
              </div>

              {/* Title & Desc */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#FDE047', textTransform: 'uppercase' }}>Step {step.step}</span>
              </div>
              <h3 style={{ fontSize: '1.15rem', color: '#FFFFFF', fontWeight: 700, marginBottom: '10px' }}>
                {step.title}
              </h3>
              <p style={{ fontSize: '0.84rem', color: '#94A3B8', lineHeight: 1.6 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Quick CTA */}
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <button 
            onClick={() => onOpenBooking()}
            className="btn-gold"
            style={{ padding: '13px 30px', fontSize: '0.9rem' }}
          >
            <span>Book Your Service in 60 Seconds</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

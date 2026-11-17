import React from 'react';
import { Wrench, ShoppingBag, ShieldCheck, Star, Clock, CheckCircle2, Phone, Zap } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

export default function Hero({ onOpenBooking }) {
  return (
    <section id="home" style={{ position: 'relative', overflow: 'hidden', padding: '60px 0 50px', background: 'radial-gradient(ellipse 80% 60% at 50% -20%, rgba(245, 158, 11, 0.15), rgba(9, 12, 21, 0) 70%), #090C15' }}>
      {/* Background Decorative Rings */}
      <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '450px', height: '450px', borderRadius: '50%', border: '1px solid rgba(245, 158, 11, 0.08)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '50px', right: '50px', width: '300px', height: '300px', borderRadius: '50%', border: '1px dashed rgba(245, 158, 11, 0.12)', pointerEvents: 'none' }} />
      
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px', alignItems: 'center' }} className="hero-grid">
          {/* Left Column: Headlines & CTA */}
          <div style={{ zIndex: 2 }}>
            {/* Top Pill */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '9999px', background: 'rgba(245, 158, 11, 0.12)', border: '1px solid rgba(245, 158, 11, 0.3)', marginBottom: '20px' }}>
              <span className="pulse-badge" style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#F59E0B', display: 'inline-block' }} />
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#FDE047', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                #1 Trusted Appliance Hub in Balaghat
              </span>
            </div>

            {/* Main Headline */}
            <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '20px', letterSpacing: '-0.02em' }}>
              Complete Home Appliance Solutions <br />
              <span className="gold-text">Under One Roof!</span>
            </h1>

            {/* Subtitle */}
            <p style={{ fontSize: 'clamp(1rem, 1.8vw, 1.18rem)', color: '#CBD5E1', marginBottom: '28px', maxWidth: '620px', lineHeight: 1.6 }}>
              Buy premium quality home appliances or get fast, expert doorstep repair & maintenance at unbeatable prices. Certified technicians & <strong>90-Day Warranty</strong> guaranteed.
            </p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap', marginBottom: '36px' }}>
              <button 
                onClick={() => onOpenBooking()} 
                className="btn-gold"
                style={{ padding: '14px 28px', fontSize: '0.95rem' }}
              >
                <Wrench size={18} />
                <span>Book a Service Now</span>
              </button>

              <a 
                href="#products" 
                className="btn-outline-gold"
                style={{ padding: '13px 24px', fontSize: '0.92rem' }}
              >
                <ShoppingBag size={17} />
                <span>Explore Products</span>
              </a>

              <a 
                href={`tel:${COMPANY_INFO.phones[0]}`}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#94A3B8', fontSize: '0.9rem', fontWeight: 600, padding: '10px 14px', borderRadius: '8px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <Phone size={15} color="#F59E0B" />
                <span>Call: {COMPANY_INFO.phones[0]}</span>
              </a>
            </div>

            {/* Value checklist */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="#10B981" />
                <span style={{ fontSize: '0.85rem', color: '#E2E8F0', fontWeight: 500 }}>30-45 Mins Fast Arrival</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="#10B981" />
                <span style={{ fontSize: '0.85rem', color: '#E2E8F0', fontWeight: 500 }}>90-Day Repair Warranty</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="#10B981" />
                <span style={{ fontSize: '0.85rem', color: '#E2E8F0', fontWeight: 500 }}>100% Genuine Spare Parts</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Card / Visual Showcase */}
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'relative', borderRadius: '24px', padding: '2px', background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.6) 0%, rgba(245, 158, 11, 0.1) 50%, rgba(245, 158, 11, 0.4) 100%)', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 40px rgba(245, 158, 11, 0.15)' }}>
              <div style={{ background: '#0D1322', borderRadius: '22px', overflow: 'hidden', padding: '24px' }}>
                {/* Visual Header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '50%', overflow: 'hidden', border: '2px solid #F59E0B' }}>
                      <img src="/logo.jpg" alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1rem', color: '#FFFFFF', fontWeight: 700 }}>Doorstep Repair Desk</h4>
                      <p style={{ fontSize: '0.75rem', color: '#10B981', fontWeight: 600 }}>● Technicians On Duty Now</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'rgba(245, 158, 11, 0.15)', padding: '4px 10px', borderRadius: '9999px', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
                    <Star size={14} fill="#F59E0B" color="#F59E0B" />
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#FDE047' }}>4.9 / 5.0</span>
                  </div>
                </div>

                {/* Appliance Image Showcase Grid */}
                <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', height: '230px', marginBottom: '20px' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1000&q=80" 
                    alt="Technician Servicing AC"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(9, 12, 21, 0.9) 0%, rgba(9, 12, 21, 0.2) 60%, transparent 100%)' }} />
                  
                  <div style={{ position: 'absolute', bottom: '16px', left: '16px', right: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <div>
                      <span className="badge-gold" style={{ marginBottom: '6px' }}>Balaghat Doorstep Team</span>
                      <h4 style={{ fontSize: '1.05rem', color: '#FFFFFF', fontWeight: 700 }}>Expert Multi-Brand Service</h4>
                      <p style={{ fontSize: '0.78rem', color: '#94A3B8' }}>Voltas • LG • Samsung • Kent • Luminous • Daikin</p>
                    </div>
                    <div style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)', padding: '6px 12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
                      <span style={{ fontSize: '0.72rem', color: '#94A3B8', display: 'block' }}>Starts At</span>
                      <span style={{ fontSize: '1.05rem', fontWeight: 800, color: '#FDE047' }}>₹299</span>
                    </div>
                  </div>
                </div>

                {/* Quick Appliance Badge Pills */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', textAlign: 'center' }}>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '10px 4px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <span style={{ fontSize: '1.1rem', display: 'block' }}>❄️</span>
                    <span style={{ fontSize: '0.72rem', color: '#E2E8F0', fontWeight: 600 }}>AC Repair</span>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '10px 4px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <span style={{ fontSize: '1.1rem', display: 'block' }}>🧊</span>
                    <span style={{ fontSize: '0.72rem', color: '#E2E8F0', fontWeight: 600 }}>Fridge</span>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '10px 4px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <span style={{ fontSize: '1.1rem', display: 'block' }}>🧺</span>
                    <span style={{ fontSize: '0.72rem', color: '#E2E8F0', fontWeight: 600 }}>Washing</span>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '10px 4px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <span style={{ fontSize: '1.1rem', display: 'block' }}>💧</span>
                    <span style={{ fontSize: '0.72rem', color: '#E2E8F0', fontWeight: 600 }}>RO Filter</span>
                  </div>
                </div>

                {/* Instant Booking Form Trigger inside Card */}
                <button 
                  onClick={() => onOpenBooking()}
                  style={{ width: '100%', marginTop: '16px', background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.18) 0%, rgba(245, 158, 11, 0.08) 100%)', border: '1px solid rgba(245, 158, 11, 0.4)', color: '#FDE047', padding: '12px', borderRadius: '12px', fontWeight: 700, fontSize: '0.86rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', transition: 'all 0.2s ease' }}
                  onMouseEnter={(e) => e.target.style.background = 'rgba(245, 158, 11, 0.25)'}
                  onMouseLeave={(e) => e.target.style.background = 'rgba(245, 158, 11, 0.18)'}
                >
                  <Zap size={16} />
                  <span>Request Urgent Doorstep Visit</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
}

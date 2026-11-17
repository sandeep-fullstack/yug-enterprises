import React from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Heart } from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/mockData';

export default function Footer({ onOpenBooking }) {
  return (
    <footer style={{ background: '#05070D', borderTop: '1px solid rgba(245, 158, 11, 0.2)', padding: '60px 0 30px', color: '#94A3B8' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '36px', marginBottom: '50px' }}>
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', padding: '2px', background: 'linear-gradient(135deg, #FDE68A 0%, #F59E0B 50%, #B45309 100%)', boxShadow: '0 0 15px rgba(245, 158, 11, 0.4)' }}>
                <img src="/logo.jpg" alt="Logo" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.2rem', color: '#FFFFFF', fontWeight: 800 }}>YUG ENTERPRISES</h3>
                <p style={{ fontSize: '0.72rem', color: '#F59E0B', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{COMPANY_INFO.tagline}</p>
              </div>
            </div>

            <p style={{ fontSize: '0.84rem', lineHeight: 1.6, marginBottom: '20px', color: '#94A3B8' }}>
              Balaghat's trusted destination for electronics sales, appliance home repair, certified technicians, and genuine spare parts with a 90-day warranty.
            </p>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.3)', padding: '6px 12px', borderRadius: '8px', fontSize: '0.78rem', color: '#FDE047' }}>
              <ShieldCheck size={16} color="#F59E0B" />
              <span>90 Days Service Warranty</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '1rem', color: '#FFFFFF', fontWeight: 700, marginBottom: '18px', borderLeft: '3px solid #F59E0B', paddingLeft: '10px' }}>
              Quick Navigation
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.86rem' }}>
              <a href="#home" style={{ transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.target.style.color = '#F59E0B'} onMouseLeave={(e) => e.target.style.color = '#94A3B8'}>Home</a>
              <a href="#services" style={{ transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.target.style.color = '#F59E0B'} onMouseLeave={(e) => e.target.style.color = '#94A3B8'}>Repair Services</a>
              <a href="#products" style={{ transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.target.style.color = '#F59E0B'} onMouseLeave={(e) => e.target.style.color = '#94A3B8'}>Appliance Sales</a>
              <a href="#offers" style={{ transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.target.style.color = '#F59E0B'} onMouseLeave={(e) => e.target.style.color = '#94A3B8'}>Special Deals & Coupons</a>
              <a href="#process" style={{ transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.target.style.color = '#F59E0B'} onMouseLeave={(e) => e.target.style.color = '#94A3B8'}>How It Works</a>
              <a href="#why-us" style={{ transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.target.style.color = '#F59E0B'} onMouseLeave={(e) => e.target.style.color = '#94A3B8'}>Why Choose Us</a>
              <a href="#reviews" style={{ transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.target.style.color = '#F59E0B'} onMouseLeave={(e) => e.target.style.color = '#94A3B8'}>Customer Testimonials</a>
              <a href="#contact" style={{ transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.target.style.color = '#F59E0B'} onMouseLeave={(e) => e.target.style.color = '#94A3B8'}>Contact & Location</a>
            </div>
          </div>

          {/* Core Services */}
          <div>
            <h4 style={{ fontSize: '1rem', color: '#FFFFFF', fontWeight: 700, marginBottom: '18px', borderLeft: '3px solid #F59E0B', paddingLeft: '10px' }}>
              Repair Services
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.86rem' }}>
              {SERVICES_DATA.slice(0, 6).map((s) => (
                <span 
                  key={s.id} 
                  onClick={() => onOpenBooking(s.category)}
                  style={{ cursor: 'pointer', transition: 'color 0.2s ease' }} 
                  onMouseEnter={(e) => e.target.style.color = '#FDE047'} 
                  onMouseLeave={(e) => e.target.style.color = '#94A3B8'}
                >
                  {s.title}
                </span>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h4 style={{ fontSize: '1rem', color: '#FFFFFF', fontWeight: 700, marginBottom: '18px', borderLeft: '3px solid #F59E0B', paddingLeft: '10px' }}>
              Store & Support
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.84rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MapPin size={16} color="#F59E0B" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={16} color="#F59E0B" style={{ flexShrink: 0 }} />
                <a href={`tel:${COMPANY_INFO.phones[0]}`} style={{ color: '#FDE047', fontWeight: 700 }}>
                  +91 {COMPANY_INFO.phones[0]}
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Clock size={16} color="#F59E0B" style={{ flexShrink: 0 }} />
                <span>{COMPANY_INFO.hours}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={16} color="#F59E0B" style={{ flexShrink: 0 }} />
                <span>{COMPANY_INFO.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px', fontSize: '0.78rem' }}>
          <div>
            © {new Date().getFullYear()} <strong>YUG ENTERPRISES</strong>. All rights reserved. Balaghat, Madhya Pradesh.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>Your Comfort, Our Commitment • Crafted for Excellence</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

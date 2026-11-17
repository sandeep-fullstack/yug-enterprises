import React, { useState, useEffect } from 'react';
import { Phone, Clock, MapPin, Menu, X, ShieldCheck, Wrench, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Products & Sales', href: '#products' },
    { name: 'Special Offers', href: '#offers' },
    { name: 'How It Works', href: '#process' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300" style={{ background: isScrolled ? 'rgba(9, 12, 21, 0.96)' : 'rgba(9, 12, 21, 0.98)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(234, 179, 8, 0.15)' }}>
      {/* Top Bar for Address and Contact */}
      <div style={{ background: 'linear-gradient(90deg, #06080E 0%, #0D1322 50%, #06080E 100%)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 20px', fontSize: '0.78rem', color: '#94A3B8' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <MapPin size={13} color="#F59E0B" />
              <span>{COMPANY_INFO.address}</span>
            </div>
            <div style={{ display: 'none', alignItems: 'center', gap: '6px', mdDisplay: 'flex' }} className="hidden-mobile">
              <Clock size={13} color="#F59E0B" />
              <span>{COMPANY_INFO.hours}</span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            <a href={`tel:${COMPANY_INFO.phones[0]}`} style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#FDE047', fontWeight: 600 }}>
              <Phone size={13} color="#F59E0B" />
              <span>+91 {COMPANY_INFO.phones[0]}</span>
            </a>
            <span style={{ color: '#475569' }} className="hidden-mobile">|</span>
            <a href={`tel:${COMPANY_INFO.phones[1]}`} style={{ display: 'none', alignItems: 'center', gap: '6px', color: '#E2E8F0', fontWeight: 500 }} className="hidden-mobile">
              <span>+91 {COMPANY_INFO.phones[1]}</span>
            </a>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(16, 185, 129, 0.15)', color: '#10B981', padding: '2px 8px', borderRadius: '4px', fontSize: '0.72rem', fontWeight: 700 }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981', display: 'inline-block' }}></span>
              <span>Doorstep in 45m</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 20px' }}>
        {/* Brand Logo & Title */}
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <div style={{ position: 'relative', width: '46px', height: '46px', borderRadius: '50%', padding: '2px', background: 'linear-gradient(135deg, #FDE68A 0%, #F59E0B 50%, #B45309 100%)', boxShadow: '0 0 15px rgba(245, 158, 11, 0.4)' }}>
            <img 
              src="/logo.jpg" 
              alt="YUG Enterprises Logo" 
              style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} 
            />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.02em', background: 'linear-gradient(135deg, #FFFFFF 40%, #FDE047 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                YUG ENTERPRISES
              </span>
            </div>
            <p style={{ fontSize: '0.7rem', color: '#F59E0B', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              {COMPANY_INFO.tagline}
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '22px' }} className="desktop-nav">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              style={{ fontSize: '0.88rem', fontWeight: 500, color: '#E2E8F0', transition: 'color 0.2s ease', position: 'relative' }}
              onMouseEnter={(e) => e.target.style.color = '#F59E0B'}
              onMouseLeave={(e) => e.target.style.color = '#E2E8F0'}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button 
            onClick={() => onOpenBooking()}
            className="btn-gold"
            style={{ padding: '9px 18px', fontSize: '0.82rem', gap: '6px', cursor: 'pointer' }}
          >
            <Wrench size={15} />
            <span>Book a Service</span>
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '38px', height: '38px', borderRadius: '8px', border: '1px solid rgba(234, 179, 8, 0.3)', background: 'rgba(234, 179, 8, 0.08)', color: '#FDE047' }}
            className="mobile-toggle-btn"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{ background: '#0D1220', borderBottom: '2px solid rgba(245, 158, 11, 0.3)', padding: '16px 20px 24px', animation: 'fadeIn 0.2s ease' }} className="mobile-drawer">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{ fontSize: '0.95rem', fontWeight: 600, color: '#F1F5F9', padding: '8px 12px', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}
              >
                {link.name}
              </a>
            ))}
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '12px' }}>
              <a 
                href={`tel:${COMPANY_INFO.phones[0]}`}
                className="btn-outline-gold"
                style={{ padding: '10px', textAlign: 'center', justifyContent: 'center', fontSize: '0.8rem' }}
              >
                <Phone size={14} />
                <span>Call Now</span>
              </a>
              <a 
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hi%20Yug%20Enterprises,%20I%20need%20service%20details.`}
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp"
                style={{ padding: '10px', textAlign: 'center', justifyContent: 'center', fontSize: '0.8rem' }}
              >
                <MessageCircle size={14} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 992px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle-btn {
            display: none !important;
          }
          .mobile-drawer {
            display: none !important;
          }
        }
        @media (max-width: 768px) {
          .hidden-mobile {
            display: none !important;
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  );
}

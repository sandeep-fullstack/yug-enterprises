import React, { useState } from 'react';
import { 
  Wind, 
  Refrigerator as FridgeIcon, 
  Shirt, 
  Droplet, 
  Flame, 
  Fan, 
  Microwave as MicrowaveIcon, 
  Zap, 
  Check, 
  Wrench, 
  ArrowRight,
  ShieldAlert,
  MessageCircle
} from 'lucide-react';
import { SERVICES_DATA, COMPANY_INFO } from '../data/mockData';

export default function ServicesSection({ onSelectService }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Cooling & Heating', 'Wash & Water', 'Kitchen & Power'];

  const filterService = (service) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Cooling & Heating') {
      return service.category === 'Air Conditioner (AC)' || service.category === 'Refrigerator (Fridge)' || service.category === 'Geyser';
    }
    if (activeCategory === 'Wash & Water') {
      return service.category === 'Washing Machine' || service.category === 'RO Water Purifier';
    }
    if (activeCategory === 'Kitchen & Power') {
      return service.category === 'Kitchen Chimney' || service.category === 'Microwave & Oven' || service.category === 'Inverter & Battery';
    }
    return true;
  };

  const getIcon = (name) => {
    switch (name) {
      case 'Wind': return <Wind size={20} color="#F59E0B" />;
      case 'Refrigerator': return <FridgeIcon size={20} color="#F59E0B" />;
      case 'Shirt': return <Shirt size={20} color="#F59E0B" />;
      case 'Droplet': return <Droplet size={20} color="#F59E0B" />;
      case 'Flame': return <Flame size={20} color="#F59E0B" />;
      case 'Fan': return <Fan size={20} color="#F59E0B" />;
      case 'Microwave': return <MicrowaveIcon size={20} color="#F59E0B" />;
      case 'Zap': return <Zap size={20} color="#F59E0B" />;
      default: return <Wrench size={20} color="#F59E0B" />;
    }
  };

  return (
    <section id="services" style={{ padding: '80px 0', background: '#090C15' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 40px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 14px', borderRadius: '9999px', background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.25)', marginBottom: '14px' }}>
            <Wrench size={13} color="#F59E0B" />
            <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#FDE047', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Doorstep Repair & Maintenance
            </span>
          </div>

          <h2 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', marginBottom: '16px' }}>
            We Repair All <span className="gold-text">Major Home Appliances</span>
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '1rem', lineHeight: 1.6 }}>
            From minor electrical faults to complex compressor, PCB, and motor replacements — our Balaghat certified technician team arrives equipped to fix it right at your doorstep.
          </p>
        </div>

        {/* Filter Pills */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '40px' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '8px 20px',
                borderRadius: '9999px',
                fontSize: '0.84rem',
                fontWeight: 600,
                transition: 'all 0.25s ease',
                border: activeCategory === cat ? '1px solid #F59E0B' : '1px solid rgba(255,255,255,0.08)',
                background: activeCategory === cat ? 'linear-gradient(135deg, #FDE68A 0%, #F59E0B 50%, #B45309 100%)' : 'rgba(255,255,255,0.03)',
                color: activeCategory === cat ? '#000000' : '#CBD5E1'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid (8 Services) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', gap: '24px' }}>
          {SERVICES_DATA.filter(filterService).map((service) => (
            <div 
              key={service.id} 
              className="card-dark"
              style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
            >
              {/* Card Image Banner */}
              <div style={{ position: 'relative', height: '170px', overflow: 'hidden' }}>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }} 
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.06)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #141B2D 10%, rgba(20, 27, 45, 0.4) 60%, transparent 100%)' }} />
                
                {/* Highlight Badge */}
                <div style={{ position: 'absolute', top: '12px', left: '12px' }}>
                  <span className="badge-gold">
                    {service.highlight}
                  </span>
                </div>

                {/* Starting Price Tag */}
                <div style={{ position: 'absolute', bottom: '12px', right: '12px', background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(8px)', padding: '4px 10px', borderRadius: '8px', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
                  <span style={{ fontSize: '0.7rem', color: '#94A3B8' }}>Starts at </span>
                  <span style={{ fontSize: '0.95rem', fontWeight: 800, color: '#FDE047' }}>{service.price}</span>
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(245, 158, 11, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {getIcon(service.iconName)}
                  </div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFFFFF' }}>
                    {service.shortTitle}
                  </h3>
                </div>

                <p style={{ fontSize: '0.82rem', color: '#94A3B8', marginBottom: '16px', lineHeight: 1.5 }}>
                  {service.description}
                </p>

                {/* Checklist */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '20px', flexGrow: 1 }}>
                  {service.services.slice(0, 3).map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.78rem', color: '#CBD5E1' }}>
                      <Check size={14} color="#10B981" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Card Action Buttons */}
                <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: '8px', marginTop: 'auto' }}>
                  <button
                    onClick={() => onSelectService(service.category)}
                    className="btn-gold"
                    style={{ padding: '9px 12px', fontSize: '0.78rem', borderRadius: '10px', width: '100%' }}
                  >
                    <span>Book Service</span>
                    <ArrowRight size={13} />
                  </button>

                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hi%20Yug%20Enterprises,%20I%20need%20repair%20service%20for%20my%20${encodeURIComponent(service.category)}.`}
                    target="_blank"
                    rel="noreferrer"
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', background: 'rgba(37, 211, 102, 0.1)', border: '1px solid rgba(37, 211, 102, 0.3)', color: '#25D366', borderRadius: '10px', fontSize: '0.78rem', fontWeight: 700, textDecoration: 'none', padding: '9px' }}
                  >
                    <MessageCircle size={14} />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Appliance Breakdown Banner */}
        <div style={{ marginTop: '50px', background: 'linear-gradient(90deg, #161D30 0%, #1F2840 50%, #161D30 100%)', borderRadius: '20px', border: '1px solid rgba(245, 158, 11, 0.3)', padding: '28px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', boxShadow: '0 20px 40px -10px rgba(0,0,0,0.6)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: 'rgba(245, 158, 11, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(245, 158, 11, 0.3)', flexShrink: 0 }}>
              <ShieldAlert size={26} color="#F59E0B" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', color: '#FFFFFF', marginBottom: '4px' }}>Need Emergency Appliance Repair?</h3>
              <p style={{ color: '#94A3B8', fontSize: '0.88rem' }}>Call now for instant dispatch of certified technician to your home in Balaghat.</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <a 
              href={`tel:${COMPANY_INFO.phones[0]}`}
              className="btn-gold"
              style={{ padding: '12px 24px', fontSize: '0.88rem' }}
            >
              <span>Call Now: {COMPANY_INFO.phones[0]}</span>
            </a>
            <button
              onClick={() => onSelectService('Air Conditioner (AC)')}
              className="btn-outline-gold"
              style={{ padding: '11px 20px', fontSize: '0.86rem' }}
            >
              <span>Schedule Online</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

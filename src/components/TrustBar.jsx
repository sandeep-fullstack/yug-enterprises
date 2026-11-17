import React from 'react';
import { ShieldCheck, UserCheck, Tag, Home, Award, Headphones } from 'lucide-react';

export default function TrustBar() {
  const highlights = [
    {
      icon: <Award size={22} color="#F59E0B" />,
      title: "Quality Products",
      desc: "Top Verified Brands"
    },
    {
      icon: <UserCheck size={22} color="#F59E0B" />,
      title: "Expert Technicians",
      desc: "Skilled & Certified"
    },
    {
      icon: <Tag size={22} color="#F59E0B" />,
      title: "Affordable Pricing",
      desc: "No Hidden Costs"
    },
    {
      icon: <Home size={22} color="#F59E0B" />,
      title: "Doorstep Service",
      desc: "At Your Convenient Time"
    },
    {
      icon: <ShieldCheck size={22} color="#F59E0B" />,
      title: "90-Day Warranty",
      desc: "Guaranteed Spares"
    },
    {
      icon: <Headphones size={22} color="#F59E0B" />,
      title: "24x7 Fast Support",
      desc: "Emergency Booking"
    }
  ];

  return (
    <section style={{ background: '#0D1220', borderTop: '1px solid rgba(245, 158, 11, 0.15)', borderBottom: '1px solid rgba(245, 158, 11, 0.15)', padding: '24px 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '20px' }}>
          {highlights.map((item, idx) => (
            <div 
              key={idx} 
              style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 14px', borderRadius: '12px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)', transition: 'all 0.25s ease' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(245, 158, 11, 0.3)';
                e.currentTarget.style.background = 'rgba(245, 158, 11, 0.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
              }}
            >
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(245, 158, 11, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {item.icon}
              </div>
              <div>
                <h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '2px' }}>{item.title}</h4>
                <p style={{ fontSize: '0.74rem', color: '#94A3B8' }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

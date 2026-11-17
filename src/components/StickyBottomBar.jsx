import React from 'react';
import { Phone, MessageCircle, Wrench } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

export default function StickyBottomBar({ onOpenBooking }) {
  return (
    <div 
      className="mobile-sticky-bottom"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 40,
        background: '#0B0F1C',
        borderTop: '1px solid rgba(245, 158, 11, 0.3)',
        padding: '10px 14px',
        display: 'none',
        boxShadow: '0 -10px 25px -5px rgba(0,0,0,0.6)'
      }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1.3fr', gap: '8px' }}>
        {/* Call Now */}
        <a 
          href={`tel:${COMPANY_INFO.phones[0]}`}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2px',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '10px',
            padding: '8px 4px',
            color: '#FFFFFF',
            textDecoration: 'none',
            fontSize: '0.72rem',
            fontWeight: 700
          }}
        >
          <Phone size={16} color="#F59E0B" />
          <span>Call Now</span>
        </a>

        {/* WhatsApp */}
        <a 
          href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hi%20Yug%20Enterprises,%20I%20need%20doorstep%20appliance%20service%20in%20Balaghat.`}
          target="_blank"
          rel="noreferrer"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2px',
            background: 'rgba(37, 211, 102, 0.15)',
            border: '1px solid rgba(37, 211, 102, 0.4)',
            borderRadius: '10px',
            padding: '8px 4px',
            color: '#25D366',
            textDecoration: 'none',
            fontSize: '0.72rem',
            fontWeight: 700
          }}
        >
          <MessageCircle size={16} />
          <span>WhatsApp</span>
        </a>

        {/* Book Service */}
        <button
          onClick={() => onOpenBooking()}
          className="btn-gold"
          style={{
            padding: '8px 6px',
            fontSize: '0.75rem',
            borderRadius: '10px',
            gap: '4px'
          }}
        >
          <Wrench size={14} />
          <span>Book Service</span>
        </button>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .mobile-sticky-bottom {
            display: block !important;
          }
          body {
            padding-bottom: 60px !important;
          }
        }
      `}</style>
    </div>
  );
}

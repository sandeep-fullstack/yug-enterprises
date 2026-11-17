import React, { useState } from 'react';
import { MessageCircle, X, Send, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

export default function WhatsAppFloating({ onOpenBooking }) {
  const [isOpen, setIsOpen] = useState(false);

  const quickPrompts = [
    {
      title: "Book Doorstep Repair",
      msg: "Hi Yug Enterprises, I want to book a doorstep repair for my appliance in Balaghat."
    },
    {
      title: "Check AC / Fridge Prices",
      msg: "Hi Yug Enterprises, please share latest price list and festive offers for home appliances."
    },
    {
      title: "Emergency Breakdown Support",
      msg: "Emergency: My appliance stopped working, need urgent technician visit!"
    }
  ];

  const handleSendPrompt = (msg) => {
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 45 }}>
      {/* Popup Chat Card */}
      {isOpen && (
        <div 
          style={{
            position: 'absolute',
            bottom: '70px',
            right: '0',
            width: '320px',
            background: '#0F1626',
            borderRadius: '16px',
            border: '1px solid rgba(37, 211, 102, 0.4)',
            boxShadow: '0 20px 40px -10px rgba(0,0,0,0.8), 0 0 25px rgba(37, 211, 102, 0.2)',
            overflow: 'hidden',
            animation: 'slideUp 0.25s ease'
          }}
        >
          {/* Header */}
          <div style={{ background: '#075E54', padding: '14px 16px', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', border: '2px solid #25D366' }}>
                <img src="/logo.jpg" alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 700 }}>YUG ENTERPRISES</h4>
                <p style={{ fontSize: '0.7rem', color: '#A7F3D0' }}>● Online • Balaghat Support</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              style={{ color: '#FFFFFF', padding: '4px' }}
            >
              <X size={16} />
            </button>
          </div>

          {/* Body */}
          <div style={{ padding: '16px', background: '#0D1322' }}>
            <div style={{ background: '#172033', padding: '10px 12px', borderRadius: '10px', fontSize: '0.8rem', color: '#E2E8F0', marginBottom: '14px', lineHeight: 1.4 }}>
              Namaste! 🙏 Welcome to Yug Enterprises. How can we help you today with electronics sales or repair service?
            </div>

            <p style={{ fontSize: '0.72rem', color: '#94A3B8', textTransform: 'uppercase', fontWeight: 700, marginBottom: '8px' }}>
              Choose a quick message:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {quickPrompts.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendPrompt(p.msg)}
                  style={{
                    textAlign: 'left',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '8px',
                    padding: '8px 10px',
                    fontSize: '0.76rem',
                    color: '#F1F5F9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(37, 211, 102, 0.15)';
                    e.currentTarget.style.borderColor = 'rgba(37, 211, 102, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                  }}
                >
                  <span>{p.title}</span>
                  <Send size={12} color="#25D366" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Floating Circle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="WhatsApp Support"
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: '#25D366',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 10px 25px -5px rgba(37, 211, 102, 0.6), 0 0 15px rgba(37, 211, 102, 0.4)',
          transition: 'all 0.3s ease',
          position: 'relative'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <MessageCircle size={28} />
        {/* Pulsing indicator */}
        <span 
          style={{
            position: 'absolute',
            top: '0',
            right: '0',
            width: '14px',
            height: '14px',
            borderRadius: '50%',
            background: '#EF4444',
            border: '2px solid #FFFFFF'
          }} 
        />
      </button>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { Flame, Clock, Check, MessageCircle, Copy, Gift, Percent } from 'lucide-react';
import { OFFERS_DATA, COMPANY_INFO } from '../data/mockData';

export default function OffersSection() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 28,
    minutes: 42,
    seconds: 15
  });
  const [copiedCode, setCopiedCode] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 24, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  const getWhatsAppOfferLink = (offer) => {
    return encodeURIComponent(
      `*CLAIM SPECIAL OFFER - YUG ENTERPRISES*\n` +
      `--------------------------------\n` +
      `*Offer:* ${offer.title}\n` +
      `*Benefit:* ${offer.discount}\n` +
      `*Coupon Code:* ${offer.coupon}\n` +
      `--------------------------------\n` +
      `Hi Yug Enterprises, I want to claim this special offer for my home in Balaghat. Please share best deal details!`
    );
  };

  return (
    <section id="offers" style={{ padding: '80px 0', background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(245, 158, 11, 0.08), rgba(9, 12, 21, 0) 70%), #090C15' }}>
      <div className="container">
        {/* Header with Countdown */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 14px', borderRadius: '9999px', background: 'rgba(239, 68, 68, 0.15)', border: '1px solid rgba(239, 68, 68, 0.3)', marginBottom: '14px' }}>
            <Flame size={14} color="#EF4444" />
            <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#F87171', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Limited Time Deals • Exclusive Discounts
            </span>
          </div>

          <h2 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', marginBottom: '16px' }}>
            Special <span className="gold-text">Offers & Festive Deals</span>
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '1rem', lineHeight: 1.6, marginBottom: '24px' }}>
            Save big on your next appliance purchase or home service. Grab these limited-period coupons before stocks run out!
          </p>

          {/* Countdown Clock */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', background: '#121828', border: '1px solid rgba(245, 158, 11, 0.3)', padding: '10px 20px', borderRadius: '14px', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.5)' }}>
            <Clock size={18} color="#F59E0B" />
            <span style={{ fontSize: '0.82rem', color: '#CBD5E1', fontWeight: 600 }}>Offer Ends In:</span>
            <div style={{ display: 'flex', gap: '8px', fontWeight: 800, fontSize: '1rem', color: '#FDE047' }}>
              <span style={{ background: '#090C15', padding: '3px 8px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.08)' }}>
                {String(timeLeft.hours).padStart(2, '0')}h
              </span>
              <span>:</span>
              <span style={{ background: '#090C15', padding: '3px 8px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.08)' }}>
                {String(timeLeft.minutes).padStart(2, '0')}m
              </span>
              <span>:</span>
              <span style={{ background: '#090C15', padding: '3px 8px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.08)' }}>
                {String(timeLeft.seconds).padStart(2, '0')}s
              </span>
            </div>
          </div>
        </div>

        {/* 4 Offer Cards (From user's image) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {OFFERS_DATA.map((offer) => (
            <div 
              key={offer.id}
              className="card-dark"
              style={{ display: 'flex', flexDirection: 'column', height: '100%', border: '1px solid rgba(245, 158, 11, 0.25)' }}
            >
              {/* Header Banner */}
              <div style={{ background: 'linear-gradient(135deg, #182035 0%, #121829 100%)', padding: '24px 20px', borderBottom: '1px solid rgba(255,255,255,0.06)', position: 'relative' }}>
                <span className="badge-gold" style={{ marginBottom: '10px' }}>
                  {offer.tagline}
                </span>
                <h3 style={{ fontSize: '1.25rem', color: '#FFFFFF', fontWeight: 800, marginBottom: '6px' }}>
                  {offer.title}
                </h3>
                <div style={{ fontSize: '1.45rem', fontWeight: 900, color: '#FDE047', letterSpacing: '-0.01em' }}>
                  {offer.discount}
                </div>
              </div>

              {/* Offer Features */}
              <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px', flexGrow: 1 }}>
                  {offer.features.map((feat, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.82rem', color: '#CBD5E1' }}>
                      <Check size={14} color="#10B981" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Coupon Code Strip */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(255,255,255,0.03)', border: '1px dashed rgba(245, 158, 11, 0.4)', padding: '10px 14px', borderRadius: '10px', marginBottom: '16px' }}>
                  <div>
                    <span style={{ fontSize: '0.68rem', color: '#94A3B8', display: 'block', textTransform: 'uppercase' }}>Coupon Code</span>
                    <span style={{ fontSize: '0.95rem', fontWeight: 800, color: '#FDE047', letterSpacing: '0.05em' }}>{offer.coupon}</span>
                  </div>
                  <button
                    onClick={() => handleCopy(offer.coupon)}
                    style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.74rem', color: copiedCode === offer.coupon ? '#10B981' : '#CBD5E1', background: 'rgba(255,255,255,0.06)', padding: '5px 10px', borderRadius: '6px' }}
                  >
                    <Copy size={12} />
                    <span>{copiedCode === offer.coupon ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>

                {/* Action CTA */}
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${getWhatsAppOfferLink(offer)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-whatsapp"
                  style={{ width: '100%', padding: '11px', fontSize: '0.84rem', justifyContent: 'center' }}
                >
                  <MessageCircle size={15} />
                  <span>Grab This Offer on WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

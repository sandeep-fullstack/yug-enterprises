import React from 'react';
import { Star, CheckCircle, Quote, ThumbsUp } from 'lucide-react';
import { REVIEWS_DATA, COMPANY_INFO } from '../data/mockData';

export default function ReviewsSection() {
  return (
    <section id="reviews" style={{ padding: '80px 0', background: '#090C15' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 50px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 14px', borderRadius: '9999px', background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.25)', marginBottom: '14px' }}>
            <Star size={13} fill="#F59E0B" color="#F59E0B" />
            <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#FDE047', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              4.9★ Rated on Google • 1,420+ Reviews
            </span>
          </div>

          <h2 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', marginBottom: '16px' }}>
            What Our <span className="gold-text">Balaghat Customers Say</span>
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '1rem', lineHeight: 1.6 }}>
            Real reviews from homeowners and business owners across Balaghat who rely on us for everyday comfort and electronic appliance support.
          </p>
        </div>

        {/* Reviews Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {REVIEWS_DATA.map((rev, idx) => (
            <div 
              key={idx}
              className="card-dark"
              style={{ padding: '24px', display: 'flex', flexDirection: 'column', height: '100%' }}
            >
              {/* Top Row: Stars and Service Tag */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <div style={{ display: 'flex', gap: '3px' }}>
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={15} fill="#F59E0B" color="#F59E0B" />
                  ))}
                </div>
                <span style={{ fontSize: '0.72rem', color: '#64748B' }}>{rev.date}</span>
              </div>

              {/* Service Chip */}
              <div style={{ background: 'rgba(245, 158, 11, 0.08)', border: '1px solid rgba(245, 158, 11, 0.2)', padding: '3px 10px', borderRadius: '6px', fontSize: '0.74rem', color: '#FDE047', fontWeight: 600, display: 'inline-block', marginBottom: '14px', width: 'fit-content' }}>
                {rev.service}
              </div>

              {/* Quote Text */}
              <p style={{ fontSize: '0.86rem', color: '#CBD5E1', lineHeight: 1.6, marginBottom: '20px', flexGrow: 1, fontStyle: 'italic' }}>
                "{rev.comment}"
              </p>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '16px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #F59E0B 0%, #B45309 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#000000', fontSize: '1rem' }}>
                  {rev.name[0]}
                </div>
                <div>
                  <h4 style={{ fontSize: '0.92rem', color: '#FFFFFF', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span>{rev.name}</span>
                    <CheckCircle size={13} color="#10B981" />
                  </h4>
                  <p style={{ fontSize: '0.74rem', color: '#94A3B8' }}>{rev.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Trust Bar */}
        <div style={{ marginTop: '48px', padding: '20px', borderRadius: '16px', background: '#121828', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>
              🌟
            </div>
            <div>
              <h4 style={{ fontSize: '1rem', color: '#FFFFFF' }}>Rated 4.9 Stars on Google Local</h4>
              <p style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Based on verified customer feedback in Balaghat</p>
            </div>
          </div>

          <a 
            href={COMPANY_INFO.mapUrl} 
            target="_blank" 
            rel="noreferrer"
            className="btn-outline-gold"
            style={{ padding: '9px 18px', fontSize: '0.82rem' }}
          >
            <span>View All Reviews on Google</span>
          </a>
        </div>
      </div>
    </section>
  );
}

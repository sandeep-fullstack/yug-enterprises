import React from 'react';
import { Check, X, ShieldCheck, Clock, Award, Users, ThumbsUp, DollarSign } from 'lucide-react';

export default function WhyChooseUs() {
  const comparison = [
    {
      feature: "Technician Background",
      yug: "Verified, Certified & Background Checked",
      others: "Untrained, Freelance local mechanics"
    },
    {
      feature: "Spare Parts Used",
      yug: "100% Original Brand OEM Spares with Serial No.",
      others: "Duplicate or refurbished unbranded parts"
    },
    {
      feature: "Service Warranty",
      yug: "Official 90-Day Doorstep Guarantee",
      others: "Zero warranty once they leave your house"
    },
    {
      feature: "Pricing Transparency",
      yug: "Standard Fixed Rate Card • No Hidden Charges",
      others: "Inflated estimates & unexpected bill surprises"
    },
    {
      feature: "Response Speed in Balaghat",
      yug: "Guaranteed Doorstep Visit within 30-45 Mins",
      others: "Takes 2-3 days of constant follow up calls"
    },
    {
      feature: "Billing & Payment",
      yug: "GST Invoice + Secure UPI/Card/Cash Options",
      others: "Cash only, no invoice, no accountability"
    }
  ];

  return (
    <section id="why-us" style={{ padding: '80px 0', background: '#0D1220' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 50px' }}>
          <span className="badge-gold" style={{ marginBottom: '14px' }}>
            The YUG Enterprises Advantage
          </span>
          <h2 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', marginBottom: '16px' }}>
            Why Families in Balaghat <span className="gold-text">Trust Us Most</span>
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '1rem', lineHeight: 1.6 }}>
            Over 12,500+ households rely on YUG Enterprises for trustworthy sales and stress-free appliance repairs. Here is how we differ from ordinary repairmen.
          </p>
        </div>

        {/* Comparison Table */}
        <div style={{ background: '#121828', borderRadius: '20px', border: '1px solid rgba(245, 158, 11, 0.25)', overflow: 'hidden', boxShadow: '0 20px 40px -10px rgba(0,0,0,0.5)' }}>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
              <thead>
                <tr style={{ background: 'linear-gradient(90deg, #172036 0%, #1A243D 100%)', borderBottom: '1px solid rgba(245, 158, 11, 0.2)' }}>
                  <th style={{ padding: '20px 24px', fontSize: '0.9rem', color: '#CBD5E1', width: '30%' }}>Feature / Standard</th>
                  <th style={{ padding: '20px 24px', fontSize: '1rem', color: '#FDE047', fontWeight: 800, width: '40%', background: 'rgba(245, 158, 11, 0.08)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Award size={18} color="#F59E0B" />
                      <span>YUG Enterprises (Balaghat)</span>
                    </div>
                  </th>
                  <th style={{ padding: '20px 24px', fontSize: '0.88rem', color: '#94A3B8', width: '30%' }}>Local Roadside Mechanics</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, idx) => (
                  <tr 
                    key={idx}
                    style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', background: idx % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent' }}
                  >
                    <td style={{ padding: '16px 24px', fontSize: '0.88rem', fontWeight: 600, color: '#FFFFFF' }}>
                      {row.feature}
                    </td>
                    <td style={{ padding: '16px 24px', fontSize: '0.86rem', color: '#FFFFFF', fontWeight: 600, background: 'rgba(245, 158, 11, 0.04)' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                        <Check size={16} color="#10B981" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{row.yug}</span>
                      </div>
                    </td>
                    <td style={{ padding: '16px 24px', fontSize: '0.82rem', color: '#94A3B8' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                        <X size={15} color="#EF4444" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{row.others}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

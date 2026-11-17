import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, MapPin, Phone, User, Wrench, CheckCircle2, MessageCircle, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { COMPANY_INFO } from '../data/mockData';

export default function BookingModal({ isOpen, onClose, preselectedAppliance }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    appliance: 'Air Conditioner (AC)',
    serviceType: 'Repair & Troubleshooting',
    address: '',
    date: new Date().toISOString().split('T')[0],
    timeSlot: 'Morning (9:00 AM - 12:00 PM)',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  useEffect(() => {
    if (preselectedAppliance) {
      setFormData(prev => ({ ...prev, appliance: preselectedAppliance }));
    }
  }, [preselectedAppliance]);

  if (!isOpen) return null;

  const appliances = [
    'Air Conditioner (AC)',
    'Refrigerator (Fridge)',
    'Washing Machine',
    'RO Water Purifier',
    'Geyser',
    'Kitchen Chimney',
    'Microwave & Oven',
    'Inverter & Battery'
  ];

  const serviceTypes = [
    'Repair & Troubleshooting',
    'Deep Jet Cleaning / Maintenance',
    'New Installation / Fitting',
    'Uninstallation / Shifting',
    'Gas Leakage & Refill',
    'Emergency Inspection'
  ];

  const timeSlots = [
    'Morning (9:00 AM - 12:00 PM)',
    'Afternoon (12:00 PM - 4:00 PM)',
    'Evening (4:00 PM - 8:00 PM)',
    'Urgent / ASAP (within 45 mins)'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address) {
      alert('Please fill in your name, contact phone, and address.');
      return;
    }

    const ref = 'YUG-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(ref);
    setSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // safe fallback
    }
  };

  const getWhatsAppMessage = () => {
    return encodeURIComponent(
      `*NEW APPLIANCE SERVICE BOOKING - YUG ENTERPRISES*\n` +
      `--------------------------------\n` +
      `*Booking Ref:* ${bookingRef || 'NEW-REQUEST'}\n` +
      `*Customer Name:* ${formData.name}\n` +
      `*Phone Number:* ${formData.phone}\n` +
      `*Appliance:* ${formData.appliance}\n` +
      `*Service Type:* ${formData.serviceType}\n` +
      `*Address:* ${formData.address}, Balaghat\n` +
      `*Preferred Date:* ${formData.date}\n` +
      `*Preferred Slot:* ${formData.timeSlot}\n` +
      (formData.notes ? `*Issue Note:* ${formData.notes}\n` : '') +
      `--------------------------------\n` +
      `Please confirm technician visit time!`
    );
  };

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px', background: 'rgba(5, 7, 13, 0.85)', backdropFilter: 'blur(10px)' }}>
      <div 
        style={{ position: 'relative', width: '100%', maxWidth: '580px', maxHeight: '92vh', overflowY: 'auto', background: '#0F1626', borderRadius: '20px', border: '1px solid rgba(245, 158, 11, 0.4)', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.8), 0 0 30px rgba(245, 158, 11, 0.2)' }}
        className="modal-content"
      >
        {/* Modal Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px', borderBottom: '1px solid rgba(255,255,255,0.08)', background: '#0B101C' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(245, 158, 11, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
              <Wrench size={18} color="#F59E0B" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', color: '#FFFFFF', fontWeight: 800 }}>Book a Repair Service</h3>
              <p style={{ fontSize: '0.74rem', color: '#10B981', fontWeight: 600 }}>● Express Doorstep Arrival in Balaghat</p>
            </div>
          </div>

          <button 
            onClick={onClose}
            style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', color: '#94A3B8', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s ease' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#FFFFFF'; e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#94A3B8'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '24px' }}>
          {!submitted ? (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Row 1: Name and Phone */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#E2E8F0', marginBottom: '6px' }}>
                    Your Name *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Ramesh Verma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{ width: '100%', padding: '11px 14px 11px 38px', borderRadius: '10px', background: '#161F33', border: '1px solid rgba(255,255,255,0.1)', color: '#FFFFFF', fontSize: '0.86rem', outline: 'none' }}
                      onFocus={(e) => e.target.style.borderColor = '#F59E0B'}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                    />
                    <User size={15} color="#94A3B8" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#E2E8F0', marginBottom: '6px' }}>
                    Mobile Number *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <input 
                      type="tel" 
                      required
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{ width: '100%', padding: '11px 14px 11px 38px', borderRadius: '10px', background: '#161F33', border: '1px solid rgba(255,255,255,0.1)', color: '#FFFFFF', fontSize: '0.86rem', outline: 'none' }}
                      onFocus={(e) => e.target.style.borderColor = '#F59E0B'}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                    />
                    <Phone size={15} color="#94A3B8" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                  </div>
                </div>
              </div>

              {/* Row 2: Appliance & Service Type */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#E2E8F0', marginBottom: '6px' }}>
                    Select Appliance *
                  </label>
                  <select
                    value={formData.appliance}
                    onChange={(e) => setFormData({ ...formData, appliance: e.target.value })}
                    style={{ width: '100%', padding: '11px 14px', borderRadius: '10px', background: '#161F33', border: '1px solid rgba(255,255,255,0.1)', color: '#FFFFFF', fontSize: '0.86rem', outline: 'none' }}
                  >
                    {appliances.map(app => (
                      <option key={app} value={app} style={{ background: '#0F1626', color: '#FFFFFF' }}>{app}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#E2E8F0', marginBottom: '6px' }}>
                    Service Type Needed *
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    style={{ width: '100%', padding: '11px 14px', borderRadius: '10px', background: '#161F33', border: '1px solid rgba(255,255,255,0.1)', color: '#FFFFFF', fontSize: '0.86rem', outline: 'none' }}
                  >
                    {serviceTypes.map(st => (
                      <option key={st} value={st} style={{ background: '#0F1626', color: '#FFFFFF' }}>{st}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 3: Address in Balaghat */}
              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#E2E8F0', marginBottom: '6px' }}>
                  Your House / Street Address & Landmark in Balaghat *
                </label>
                <div style={{ position: 'relative' }}>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. Near Hanuman Temple, Ward No 14, Saraswati Nagar"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    style={{ width: '100%', padding: '11px 14px 11px 38px', borderRadius: '10px', background: '#161F33', border: '1px solid rgba(255,255,255,0.1)', color: '#FFFFFF', fontSize: '0.86rem', outline: 'none' }}
                    onFocus={(e) => e.target.style.borderColor = '#F59E0B'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                  <MapPin size={15} color="#94A3B8" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                </div>
              </div>

              {/* Row 4: Preferred Date and Time Slot */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#E2E8F0', marginBottom: '6px' }}>
                    Preferred Date
                  </label>
                  <input 
                    type="date" 
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    style={{ width: '100%', padding: '11px 14px', borderRadius: '10px', background: '#161F33', border: '1px solid rgba(255,255,255,0.1)', color: '#FFFFFF', fontSize: '0.86rem', outline: 'none' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#E2E8F0', marginBottom: '6px' }}>
                    Time Slot
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    style={{ width: '100%', padding: '11px 14px', borderRadius: '10px', background: '#161F33', border: '1px solid rgba(255,255,255,0.1)', color: '#FFFFFF', fontSize: '0.86rem', outline: 'none' }}
                  >
                    {timeSlots.map(slot => (
                      <option key={slot} value={slot} style={{ background: '#0F1626', color: '#FFFFFF' }}>{slot}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 5: Problem Description */}
              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#E2E8F0', marginBottom: '6px' }}>
                  Describe the Issue (Optional)
                </label>
                <textarea 
                  rows={2}
                  placeholder="e.g. AC is running but not cooling, error code E4 is showing..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', background: '#161F33', border: '1px solid rgba(255,255,255,0.1)', color: '#FFFFFF', fontSize: '0.86rem', outline: 'none', resize: 'vertical' }}
                />
              </div>

              {/* Submit Buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
                <button 
                  type="submit"
                  className="btn-gold"
                  style={{ width: '100%', padding: '14px', fontSize: '0.92rem' }}
                >
                  <CheckCircle2 size={18} />
                  <span>Confirm Service Booking</span>
                </button>

                <p style={{ textAlign: 'center', fontSize: '0.74rem', color: '#94A3B8' }}>
                  🔒 100% Genuine Spares • 90-Day Service Warranty • Pay after repair
                </p>
              </div>
            </form>
          ) : (
            /* Success State */
            <div style={{ textAlign: 'center', padding: '10px 0 20px' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.15)', border: '2px solid #10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                <CheckCircle2 size={36} color="#10B981" />
              </div>

              <span className="badge-gold" style={{ marginBottom: '10px' }}>Booking Confirmed</span>
              <h3 style={{ fontSize: '1.4rem', color: '#FFFFFF', fontWeight: 800, marginBottom: '8px' }}>
                Service Request Received!
              </h3>
              <p style={{ color: '#94A3B8', fontSize: '0.88rem', maxWidth: '420px', margin: '0 auto 20px', lineHeight: 1.5 }}>
                Thank you <strong>{formData.name}</strong>. Our service supervisor at Yug Enterprises Balaghat is assigning a technician for your <strong>{formData.appliance}</strong>.
              </p>

              {/* Summary Card */}
              <div style={{ background: '#141C2E', border: '1px solid rgba(245, 158, 11, 0.25)', borderRadius: '14px', padding: '16px', textAlign: 'left', marginBottom: '24px', fontSize: '0.84rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '8px', marginBottom: '8px' }}>
                  <span style={{ color: '#94A3B8' }}>Booking ID:</span>
                  <span style={{ color: '#FDE047', fontWeight: 700 }}>{bookingRef}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '8px', marginBottom: '8px' }}>
                  <span style={{ color: '#94A3B8' }}>Appliance:</span>
                  <span style={{ color: '#FFFFFF', fontWeight: 600 }}>{formData.appliance}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '8px', marginBottom: '8px' }}>
                  <span style={{ color: '#94A3B8' }}>Slot:</span>
                  <span style={{ color: '#FFFFFF' }}>{formData.date} ({formData.timeSlot})</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#94A3B8' }}>Location:</span>
                  <span style={{ color: '#FFFFFF' }}>{formData.address}</span>
                </div>
              </div>

              {/* Direct WhatsApp Share Button */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${getWhatsAppMessage()}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-whatsapp"
                  style={{ width: '100%', padding: '14px', fontSize: '0.9rem', justifyContent: 'center' }}
                >
                  <MessageCircle size={18} />
                  <span>Send Details on WhatsApp for Instant Confirmation</span>
                </a>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  style={{ background: 'rgba(255,255,255,0.06)', color: '#CBD5E1', padding: '10px', borderRadius: '10px', fontSize: '0.84rem', fontWeight: 600 }}
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

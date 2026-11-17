import React, { useState } from 'react';
import { ShoppingBag, Star, Check, Search, MessageCircle, Percent, ShieldCheck, Tag } from 'lucide-react';
import { PRODUCTS_DATA, COMPANY_INFO } from '../data/mockData';

export default function ProductsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = [
    'All',
    'Air Conditioner (AC)',
    'Refrigerator (Fridge)',
    'Washing Machine',
    'RO Water Purifier',
    'Inverter & Battery',
    'Geyser',
    'Kitchen Chimney',
    'Microwave & Oven'
  ];

  const filteredProducts = PRODUCTS_DATA.filter(prod => {
    const matchesCategory = selectedCategory === 'All' || prod.category === selectedCategory;
    const matchesSearch = prod.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          prod.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          prod.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getWhatsAppProductInquiry = (product) => {
    return encodeURIComponent(
      `*PRODUCT PURCHASE INQUIRY - YUG ENTERPRISES*\n` +
      `--------------------------------\n` +
      `*Product:* ${product.title}\n` +
      `*Brand:* ${product.brand}\n` +
      `*Offer Price:* ₹${product.price.toLocaleString('en-IN')}\n` +
      `*MRP:* ₹${product.mrp.toLocaleString('en-IN')}\n` +
      `--------------------------------\n` +
      `Hi, I want to check availability, home delivery, and best festive price/EMI for this item in Balaghat.`
    );
  };

  return (
    <section id="products" style={{ padding: '80px 0', background: '#0B0F1C', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 14px', borderRadius: '9999px', background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.25)', marginBottom: '14px' }}>
            <ShoppingBag size={13} color="#F59E0B" />
            <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#FDE047', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Electronics Showroom & Sales
            </span>
          </div>

          <h2 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', marginBottom: '16px' }}>
            Buy Top Brand Appliances at <span className="gold-text">Best Balaghat Rates</span>
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '1rem', lineHeight: 1.6 }}>
            100% Genuine, Brand New Appliances with Official Manufacturer Warranties, Free Doorstep Delivery & Zero Down Payment EMI Options.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
          {/* Search Box */}
          <div style={{ maxWidth: '520px', margin: '0 auto', width: '100%', position: 'relative' }}>
            <input 
              type="text"
              placeholder="Search by appliance, brand (Voltas, LG, Samsung, Kent...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ width: '100%', padding: '13px 18px 13px 44px', borderRadius: '9999px', background: '#141B2D', border: '1px solid rgba(245, 158, 11, 0.25)', color: '#FFFFFF', fontSize: '0.9rem', outline: 'none', boxShadow: '0 8px 20px -4px rgba(0,0,0,0.4)' }}
            />
            <Search size={18} color="#F59E0B" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
          </div>

          {/* Category Tabs */}
          <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '8px', justifyContent: 'flex-start', scrollbarWidth: 'none' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '9999px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s ease',
                  border: selectedCategory === cat ? '1px solid #F59E0B' : '1px solid rgba(255,255,255,0.08)',
                  background: selectedCategory === cat ? 'linear-gradient(135deg, #FDE68A 0%, #F59E0B 50%, #B45309 100%)' : 'rgba(255,255,255,0.03)',
                  color: selectedCategory === cat ? '#000000' : '#CBD5E1'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
          {filteredProducts.map((product) => {
            const discountPercent = Math.round(((product.mrp - product.price) / product.mrp) * 100);
            return (
              <div 
                key={product.id}
                className="card-dark"
                style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
              >
                {/* Product Image */}
                <div style={{ position: 'relative', height: '210px', overflow: 'hidden', background: '#0D1220' }}>
                  <img 
                    src={product.image} 
                    alt={product.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #141B2D 5%, transparent 60%)' }} />

                  {/* Badge */}
                  <div style={{ position: 'absolute', top: '12px', left: '12px', display: 'flex', gap: '6px' }}>
                    <span className="badge-gold">
                      {product.badge}
                    </span>
                    <span style={{ background: '#EF4444', color: '#FFFFFF', padding: '3px 8px', borderRadius: '9999px', fontSize: '0.72rem', fontWeight: 800 }}>
                      {discountPercent}% OFF
                    </span>
                  </div>

                  {/* Brand Tag */}
                  <div style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(6px)', padding: '3px 10px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 700, color: '#FDE047', border: '1px solid rgba(255,255,255,0.1)' }}>
                    {product.brand}
                  </div>
                </div>

                {/* Product Content */}
                <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  {/* Rating */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                      <Star size={13} fill="#F59E0B" color="#F59E0B" />
                      <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#FFFFFF' }}>{product.rating}</span>
                    </div>
                    <span style={{ fontSize: '0.74rem', color: '#64748B' }}>({product.reviews} reviews)</span>
                  </div>

                  {/* Title */}
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '12px', lineHeight: 1.4, minHeight: '44px' }}>
                    {product.title}
                  </h3>

                  {/* Feature Tags */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '18px', flexGrow: 1 }}>
                    {product.features.map((feat, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.76rem', color: '#94A3B8' }}>
                        <Check size={12} color="#10B981" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price Block */}
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '12px', marginBottom: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
                      <span style={{ fontSize: '1.35rem', fontWeight: 800, color: '#FDE047' }}>
                        ₹{product.price.toLocaleString('en-IN')}
                      </span>
                      <span style={{ fontSize: '0.88rem', color: '#64748B', textDecoration: 'line-through' }}>
                        ₹{product.mrp.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <p style={{ fontSize: '0.72rem', color: '#10B981', fontWeight: 600, marginTop: '2px' }}>
                      Save ₹{(product.mrp - product.price).toLocaleString('en-IN')} • Easy EMI from ₹{Math.round(product.price / 12).toLocaleString('en-IN')}/mo
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px' }}>
                    <a
                      href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${getWhatsAppProductInquiry(product)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-whatsapp"
                      style={{ padding: '10px', fontSize: '0.82rem', justifyContent: 'center' }}
                    >
                      <MessageCircle size={15} />
                      <span>Inquire / Buy on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div style={{ marginTop: '48px', padding: '20px', borderRadius: '14px', background: 'rgba(245, 158, 11, 0.05)', border: '1px dashed rgba(245, 158, 11, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'space-around', flexWrap: 'wrap', gap: '16px', textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShieldCheck size={20} color="#F59E0B" />
            <span style={{ fontSize: '0.84rem', color: '#E2E8F0', fontWeight: 600 }}>100% Brand Sealed Pack Products</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Tag size={20} color="#F59E0B" />
            <span style={{ fontSize: '0.84rem', color: '#E2E8F0', fontWeight: 600 }}>Best Offline Price in Balaghat Guaranteed</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Percent size={20} color="#F59E0B" />
            <span style={{ fontSize: '0.84rem', color: '#E2E8F0', fontWeight: 600 }}>Easy Finance (Bajaj / IDFC / TVS Credit)</span>
          </div>
        </div>
      </div>
    </section>
  );
}

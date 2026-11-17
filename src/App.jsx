import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import ServicesSection from './components/ServicesSection';
import ProductsSection from './components/ProductsSection';
import OffersSection from './components/OffersSection';
import ProcessSection from './components/ProcessSection';
import WhyChooseUs from './components/WhyChooseUs';
import ReviewsSection from './components/ReviewsSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import StickyBottomBar from './components/StickyBottomBar';
import WhatsAppFloating from './components/WhatsAppFloating';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedAppliance, setSelectedAppliance] = useState('Air Conditioner (AC)');

  const handleOpenBooking = (applianceName) => {
    if (applianceName) {
      setSelectedAppliance(applianceName);
    }
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#090C15] text-white">
      {/* Navigation Header */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main>
        {/* Hero Banner */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Trust & Value Highlights */}
        <TrustBar />

        {/* Appliance Repair & Maintenance Services */}
        <ServicesSection onSelectService={(appliance) => handleOpenBooking(appliance)} />

        {/* Electronics Sales & Products Catalog */}
        <ProductsSection />

        {/* Special Offers & Festival Deals */}
        <OffersSection />

        {/* 4-Step Easy Service Journey */}
        <ProcessSection onOpenBooking={() => handleOpenBooking()} />

        {/* Why Choose YUG Enterprises Comparison */}
        <WhyChooseUs />

        {/* Customer Testimonials & Reviews */}
        <ReviewsSection />

        {/* Frequently Asked Questions */}
        <FAQSection />

        {/* Contact, Shop Location & Working Hours */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={(appliance) => handleOpenBooking(appliance)} />

      {/* Interactive Service Booking Modal */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={handleCloseBooking} 
        preselectedAppliance={selectedAppliance} 
      />

      {/* Mobile Sticky Bottom Action Bar */}
      <StickyBottomBar onOpenBooking={() => handleOpenBooking()} />

      {/* Floating WhatsApp Help Widget */}
      <WhatsAppFloating onOpenBooking={() => handleOpenBooking()} />
    </div>
  );
}

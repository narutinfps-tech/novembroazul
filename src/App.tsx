import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { WhatYouGetSection } from './components/WhatYouGetSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { BonusesSection } from './components/BonusesSection';
import { OffersSection } from './components/OffersSection';
import { SlideViewerSection } from './components/SlideViewerSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { FooterSection } from './components/FooterSection';
import { CheckoutModal } from './components/CheckoutModal';
import { LegalModal, LegalModalType } from './components/LegalModal';
import { OfferPlan, TestimonialSlot } from './types';

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState<OfferPlan | null>(null);
  const [legalModalType, setLegalModalType] = useState<LegalModalType>(null);
  
  // State for Editor vs Published mode for Testimonials
  const [isEditorMode, setIsEditorMode] = useState(false);

  // State for customizable checkout destinations
  const [checkoutUrls, setCheckoutUrls] = useState({
    essencial: 'https://pay.wiapy.com/Br5jRytkYDzE',
    completo: 'https://pay.wiapy.com/QHvYc16V-50'
  });

  const handleUpdateCheckoutUrl = (planId: 'essencial' | 'completo', newUrl: string) => {
    setCheckoutUrls((prev) => ({
      ...prev,
      [planId]: newUrl
    }));
  };

  const scrollToOffers = () => {
    const el = document.getElementById('ofertas');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-sky-500 selection:text-white">
      <main className="flex-1">
        {/* 1. TÍTULO, SUBTÍTULO E BOTÃO */}
        <HeroSection onScrollToOffers={scrollToOffers} />

        {/* 2. O QUE VOCÊ VAI RECEBER */}
        <WhatYouGetSection />

        {/* 3. POR QUE ESCOLHER NOSSO MATERIAL? */}
        <WhyChooseSection />

        {/* 4. TRÊS BÔNUS DO KIT COMPLETO */}
        <BonusesSection />

        {/* 5. DUAS OFERTAS */}
        <OffersSection 
          onSelectPlan={(plan) => setSelectedPlan(plan)}
          checkoutUrls={checkoutUrls}
        />

        {/* 6. EXEMPLOS DO MATERIAL */}
        <SlideViewerSection onScrollToOffers={scrollToOffers} />

        {/* 7. DEPOIMENTOS (Com identificação de espaços reservados no modo de edição) */}
        <TestimonialsSection
          isEditorMode={isEditorMode}
          onToggleEditorMode={() => setIsEditorMode(!isEditorMode)}
        />

        {/* 8. GARANTIA INCONDICIONAL DE 7 DIAS */}
        <GuaranteeSection />

        {/* 9. PERGUNTAS FREQUENTES */}
        <FaqSection />
      </main>

      {/* 10. RODAPÉ */}
      <FooterSection onOpenLegal={(type) => setLegalModalType(type)} />

      {/* Interactive Checkout Modal */}
      <CheckoutModal
        plan={selectedPlan}
        onClose={() => setSelectedPlan(null)}
        checkoutUrls={checkoutUrls}
        onUpdateCheckoutUrl={handleUpdateCheckoutUrl}
      />

      {/* Legal & Support Modal */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}

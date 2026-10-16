import React from 'react';
import { Check, ShieldCheck } from 'lucide-react';
import { OfferPlan } from '../types';

interface OffersSectionProps {
  onSelectPlan: (plan: OfferPlan) => void;
  checkoutUrls?: { essencial: string; completo: string };
}

export const OffersSection: React.FC<OffersSectionProps> = ({ onSelectPlan, checkoutUrls }) => {
  const essencialUrl = checkoutUrls?.essencial || 'https://pay.wiapy.com/Br5jRytkYDzE';
  const completoUrl = checkoutUrls?.completo || 'https://pay.wiapy.com/QHvYc16V-50';

  const planEssencial: OfferPlan = {
    id: 'essencial',
    name: 'Kit Essencial',
    price: 'R$ 9,90',
    priceNumeric: 9.90,
    features: [
      'Apresentação com 23 slides estruturados',
      'Arquivo editável no Canva',
      'Versão em PDF de alta qualidade',
      'Acesso imediato após confirmação',
      'Atualizações e suporte da ClickMateriais'
    ],
    buttonText: 'QUERO O ESSENCIAL POR R$9,90',
    checkoutPlaceholderUrl: essencialUrl
  };

  const planCompleto: OfferPlan = {
    id: 'completo',
    name: 'Kit Completo',
    price: 'R$ 19,90',
    priceNumeric: 19.90,
    tag: 'Mais completo',
    isFeatured: true,
    features: [
      'Tudo do Kit Essencial (23 slides no Canva + PDF)',
      'Bônus 1: Roteiro de Palestra (passo a passo do palestrante)',
      'Bônus 2: Perguntas para Interação (10 perguntas com respostas)',
      'Bônus 3: Checklist da Ação Novembro Azul (organização pré-evento)',
      'Acesso imediato a todos os 4 materiais',
      'Garantia incondicional de 7 dias'
    ],
    buttonText: 'QUERO O COMPLETO POR R$19,90',
    checkoutPlaceholderUrl: completoUrl
  };

  return (
    <section id="ofertas" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-blue-50/50 border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-wider uppercase text-sky-700">
            Valores Acessíveis
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-950 mt-2 [text-wrap:balance]">
            Escolha a opção ideal para sua apresentação
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Pagamento único, sem mensalidades. Tenha em mãos todo o suporte visual para transformar sua campanha.
          </p>
        </div>

        {/* 2 Offer Cards side by side on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
          {/* OFERTA 1: KIT ESSENCIAL */}
          <div className="bg-white rounded-2xl border border-slate-200 p-7 sm:p-9 flex flex-col justify-between shadow-sm hover:border-slate-300 transition-all">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                Opção Básica
              </div>
              <h3 className="text-2xl font-bold text-blue-950">
                {planEssencial.name}
              </h3>
              
              <div className="mt-5 mb-6 pb-6 border-b border-slate-100">
                <div className="text-3xl sm:text-4xl font-bold text-blue-950">
                  {planEssencial.price}
                </div>
                <div className="text-xs text-slate-500 mt-1 font-medium">
                  Pagamento único · Acesso vitalício
                </div>
              </div>

              <div className="space-y-3.5 mb-8">
                <div className="text-xs font-semibold uppercase text-slate-400 tracking-wider">
                  O que está incluso:
                </div>
                {planEssencial.features.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                    <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <a
                href={essencialUrl}
                target="_top"
                rel="noopener noreferrer"
                className="w-full py-4 px-5 bg-slate-900 hover:bg-slate-800 active:scale-98 text-white font-bold text-sm tracking-wide uppercase rounded-xl transition-all shadow-sm flex items-center justify-center cursor-pointer text-center"
              >
                {planEssencial.buttonText}
              </a>
              <div className="text-center text-[11px] text-slate-400 mt-2">
                Checkout seguro · Envio imediato
              </div>
            </div>
          </div>

          {/* OFERTA 2: KIT COMPLETO */}
          <div className="relative bg-white rounded-2xl border-2 border-sky-600 p-7 sm:p-9 flex flex-col justify-between shadow-xl shadow-sky-600/10">
            {/* Visual badge: "Mais completo" without claiming most sold */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-sky-600 text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-sm">
              Mais completo
            </div>

            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-sky-700 mb-1">
                Recomendado para palestras
              </div>
              <h3 className="text-2xl font-bold text-blue-950">
                {planCompleto.name}
              </h3>

              <div className="mt-5 mb-6 pb-6 border-b border-slate-100">
                <div className="text-3xl sm:text-4xl font-bold text-sky-700">
                  {planCompleto.price}
                </div>
                <div className="text-xs text-slate-500 mt-1 font-medium">
                  Pagamento único · Acesso aos slides + 3 bônus
                </div>
              </div>

              <div className="space-y-3.5 mb-8">
                <div className="text-xs font-semibold uppercase text-slate-400 tracking-wider">
                  O que está incluso:
                </div>
                {planCompleto.features.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-800">
                    <Check className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                    <span className={idx > 0 && idx < 4 ? 'font-medium text-blue-950' : ''}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <a
                href={completoUrl}
                target="_top"
                rel="noopener noreferrer"
                className="w-full py-4 px-5 bg-sky-600 hover:bg-sky-500 active:scale-98 text-white font-bold text-sm tracking-wide uppercase rounded-xl transition-all shadow-md shadow-sky-600/30 flex items-center justify-center cursor-pointer text-center"
              >
                {planCompleto.buttonText}
              </a>
              <div className="text-center text-[11px] text-slate-500 mt-2 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
                <span>Garantia incondicional de 7 dias</span>
              </div>
            </div>
          </div>
        </div>

        {/* Required footer text below cards */}
        <div className="mt-10 text-center">
          <div className="text-sm font-medium text-slate-600">
            Compra única • Produto digital • Garantia de 7 dias
          </div>
          <div className="text-xs text-slate-400 mt-1">
            * A composição dos kits é uma proposta prática para organizar sua campanha.
          </div>
        </div>
      </div>
    </section>
  );
};

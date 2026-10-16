import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  onScrollToOffers: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToOffers }) => {
  return (
    <section id="inicio" className="relative pt-12 pb-16 md:pt-20 md:pb-24 bg-gradient-to-b from-blue-50/60 via-slate-50 to-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-800 bg-blue-100/70 px-3.5 py-1.5 rounded">
            Campanha Novembro Azul · Apresentação Pronta
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-blue-950 tracking-tight leading-tight [text-wrap:balance]">
            Sua palestra de Novembro Azul praticamente pronta, sem montar slides do zero!
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Receba 23 slides profissionais e editáveis no Canva para preparar sua apresentação com mais praticidade e levar informação sobre a saúde do homem à sua empresa, escola, clínica ou comunidade.
          </p>

          <div className="pt-2 flex flex-col items-center justify-center gap-4">
            <button
              onClick={onScrollToOffers}
              className="w-full sm:w-auto px-10 py-4 sm:py-5 bg-sky-600 hover:bg-sky-500 active:scale-98 text-white font-bold text-sm sm:text-base tracking-wide uppercase rounded-xl shadow-lg shadow-sky-600/25 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <span>QUERO MINHA APRESENTAÇÃO PRONTA</span>
              <ArrowRight className="w-5 h-5 shrink-0" />
            </button>

            {/* Unboxed Metadata directly below button */}
            <div className="pt-1 flex flex-wrap items-center justify-center gap-2.5 text-xs sm:text-sm text-slate-500 font-medium">
              <span>Material digital</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Editável no Canva</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-blue-900 font-semibold">A partir de R$9,90</span>
            </div>
          </div>

          {/* Quick trust micro-indicators */}
          <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
              <span>23 slides estruturados</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
              <span>Acesso imediato</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
              <span>Garantia de 7 dias</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { ShieldCheck, Headphones, Check } from 'lucide-react';

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-blue-200/80 shadow-md p-8 sm:p-12 relative overflow-hidden">
          {/* Subtle decorative background glow */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-sky-100 rounded-full blur-2xl pointer-events-none"></div>

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">
            {/* Visual Guarantee Seal (Novo selo dourado com fundo 100% transparente) */}
            <div className="shrink-0 text-center flex items-center justify-center">
              <img
                src="/src/assets/images/selo_garantia_7_dias.png"
                alt="Selo de Garantia Incondicional de 7 Dias"
                className="w-36 h-36 sm:w-40 sm:h-40 object-contain drop-shadow-md select-none"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Guarantee Text Content */}
            <div className="flex-1 text-center md:text-left space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-950 [text-wrap:balance]">
                Você tem 7 dias para decidir com tranquilidade
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Acesse o material e veja se ele atende às suas necessidades. Se não for o que você esperava, solicite o reembolso em até 7 dias após a compra, sem precisar justificar.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center md:items-start gap-4 text-xs text-slate-500 font-medium">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Devolução total do valor pago</span>
                </div>
                <div className="flex items-center gap-2">
                  <Headphones className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Solicitação pelo canal de suporte informado na compra.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

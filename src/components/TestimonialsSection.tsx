import React from 'react';
import { UserCheck, ShieldAlert, Edit3 } from 'lucide-react';
import { TestimonialSlot } from '../types';

interface TestimonialsSectionProps {
  isEditorMode: boolean;
  onToggleEditorMode: () => void;
  testimonials?: TestimonialSlot[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  isEditorMode,
  onToggleEditorMode,
  testimonials = []
}) => {
  // Check if there are any real, authorized testimonials filled
  const hasRealTestimonials = testimonials.some((t) => t.isFilled && t.feedback.trim() !== '');

  // As required: "Ocultar esta seção na versão publicada enquanto não houver depoimentos reais."
  if (!isEditorMode && !hasRealTestimonials) {
    return (
      <div className="bg-slate-100 py-3 px-4 border-t border-b border-slate-200 text-center">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-1.5 text-left">
            <span className="w-2 h-2 rounded-full bg-slate-400"></span>
            <span>
              Seção 7 (Depoimentos) oculta para o público geral conforme política de transparência (aguardando relatos autorizados).
            </span>
          </div>
          <button
            onClick={onToggleEditorMode}
            className="text-xs font-semibold text-blue-900 hover:text-blue-700 underline flex items-center gap-1 cursor-pointer shrink-0"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>Alternar para Modo Editor</span>
          </button>
        </div>
      </div>
    );
  }

  const defaultSlots: TestimonialSlot[] = [
    {
      id: 'slot-1',
      name: '[Nome autorizado do cliente]',
      role: '[Área de atuação, se autorizada: RH / Saúde / Educação]',
      feedback: '[Depoimento real sobre a experiência prática com o material de slides de Novembro Azul]',
      isFilled: false
    },
    {
      id: 'slot-2',
      name: '[Nome autorizado do cliente]',
      role: '[Área de atuação, se autorizada: Empresa / Clínica / Escola]',
      feedback: '[Depoimento real sobre a experiência prática com o material de slides de Novembro Azul]',
      isFilled: false
    },
    {
      id: 'slot-3',
      name: '[Nome autorizado do cliente]',
      role: '[Área de atuação, se autorizada: Organização Comunitária]',
      feedback: '[Depoimento real sobre a experiência prática com o material de slides de Novembro Azul]',
      isFilled: false
    }
  ];

  const slotsToDisplay = hasRealTestimonials ? testimonials : defaultSlots;

  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold tracking-wider uppercase text-sky-700">
            Experiências Reais
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-950 mt-2 [text-wrap:balance]">
            Quem já usou, conta como foi
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Relatos verídicos de profissionais que aplicaram os slides em suas instituições.
          </p>
        </div>

        {/* Notice in Editor Mode */}
        {isEditorMode && !hasRealTestimonials && (
          <div className="mb-8 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm flex items-start gap-3 max-w-3xl mx-auto">
            <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <strong className="font-semibold">Modo de Edição Ativo (Espaços Reservados):</strong>
              <p className="mt-0.5">
                Nenhum relato ou foto falsa foi inventado. Os cards abaixo são modelos prontos para receber depoimentos autorizados com nome e área de atuação antes da veiculação oficial.
              </p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {slotsToDisplay.map((slot, index) => (
            <div
              key={slot.id || index}
              className={`p-6 sm:p-7 rounded-2xl border flex flex-col justify-between text-left transition-all ${
                slot.isFilled
                  ? 'bg-slate-50 border-slate-200 shadow-sm'
                  : 'bg-slate-50/70 border-dashed border-slate-300'
              }`}
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-blue-100/70 text-blue-900 flex items-center justify-center mb-4">
                  <UserCheck className="w-5 h-5 text-sky-700" />
                </div>
                
                <p className="text-sm text-slate-700 italic leading-relaxed mb-6">
                  "{slot.feedback}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <div className="font-bold text-sm text-blue-950">
                  {slot.name}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  {slot.role}
                </div>
                {!slot.isFilled && (
                  <div className="text-[11px] text-sky-800 font-medium mt-2 bg-sky-50 px-2 py-1 rounded inline-block">
                    Espaço reservado para depoimento real
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={onToggleEditorMode}
            className="text-xs text-slate-500 hover:text-slate-800 underline cursor-pointer"
          >
            {isEditorMode ? 'Ocultar espaços reservados (Modo Publicado)' : 'Visualizar espaços reservados (Modo Edição)'}
          </button>
        </div>
      </div>
    </section>
  );
};

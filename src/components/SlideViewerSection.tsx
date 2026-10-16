import React, { useState, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  X, 
  ArrowRight,
  ShieldAlert,
  HelpCircle,
  Activity,
  HeartPulse,
  Calendar,
  CheckCircle2,
  XCircle
} from 'lucide-react';
import { SlideItem } from '../types';

interface SlideViewerSectionProps {
  onScrollToOffers: () => void;
}

export const SlideViewerSection: React.FC<SlideViewerSectionProps> = ({ onScrollToOffers }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  // Touch tracking for mobile swipe
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const slides: SlideItem[] = [
    {
      id: 'slide-1',
      number: 1,
      title: 'Capa',
      category: 'Abertura',
      description: 'Slide inicial com design sóbrio, espaço para logo da sua instituição e chamada acolhedora.',
      previewContent: {
        badge: 'CAMPANHA NACIONAL · NOVEMBRO AZUL',
        headline: 'Conscientização e Cuidado com a Saúde do Homem',
        subheadline: 'Prevenção, diagnóstico precoce e qualidade de vida para quem você ama.',
        points: [],
        footerNote: 'ClickMateriais · Apresentação Editável no Canva'
      }
    },
    {
      id: 'slide-2',
      number: 2,
      title: 'Introdução ao Novembro Azul',
      category: 'Contextualização',
      description: 'Explica a origem da campanha e por que superar a resistência masculina ao autocuidado é urgente.',
      previewContent: {
        badge: 'SLIDE 02 · CONTEXTO HISTÓRICO',
        headline: 'Por que o Novembro Azul é tão importante?',
        subheadline: 'Uma mobilização global para quebrar tabus e salvar vidas através da informação.',
        points: [
          { title: 'Origem do Movimento', text: 'Criado para conscientizar a população masculina sobre exames de rotina.' },
          { title: 'A Barreira do Tabu', text: 'Muitos homens adiam consultas por preconceito ou falsa sensação de invulnerabilidade.' },
          { title: 'Cuidado Contínuo', text: 'Prevenção não se resume a um único mês: é um compromisso diário com a vida.' }
        ],
        highlightBox: {
          label: 'Dado Relevante',
          text: 'Homens vivem em média 7 anos a menos que mulheres, em grande parte pela falta de prevenção preventiva primária.'
        }
      }
    },
    {
      id: 'slide-3',
      number: 3,
      title: 'Saúde do Homem',
      category: 'Cuidado Integral',
      description: 'Aborda a saúde integral masculina: hábitos alimentares, atividade física e saúde cardiovascular.',
      previewContent: {
        badge: 'SLIDE 05 · VISÃO HOLÍSTICA',
        headline: 'Saúde Integral: Muito além do Câncer de Próstata',
        subheadline: 'O corpo funciona como um sistema integrado. Cuidar de si é um ato de responsabilidade.',
        points: [
          { title: 'Controle Cardiovascular', text: 'Monitoramento regular de pressão arterial, colesterol e glicemia.' },
          { title: 'Atividade Física Regular', text: 'Pelo menos 150 minutos semanais de exercícios moderados reduzem riscos.' },
          { title: 'Saúde Mental & Estresse', text: 'Conversar, buscar auxílio psicológico e equilibrar trabalho e descanso.' }
        ],
        highlightBox: {
          label: 'Pilares de Bem-Estar',
          text: 'Alimentação equilibrada + sono reparador + consultas médicas periódicas.'
        }
      }
    },
    {
      id: 'slide-4',
      number: 4,
      title: 'Fatores de Risco',
      category: 'Prevenção & Dados',
      description: 'Apresenta com clareza os grupos que precisam de atenção redobrada aos exames preventivos.',
      previewContent: {
        badge: 'SLIDE 09 · CRITÉRIOS DE ATENÇÃO',
        headline: 'Fatores de Risco do Câncer de Próstata',
        subheadline: 'Identificar a predisposição é o primeiro passo para um acompanhamento assertivo.',
        points: [
          { title: 'Idade Avançada', text: 'A incidência aumenta consideravelmente a partir dos 50 anos de idade.' },
          { title: 'Histórico Familiar', text: 'Pai ou irmão com histórico de câncer de próstata antes dos 60 anos eleva o risco.' },
          { title: 'Origem Étnica', text: 'Homens negros apresentam maior incidência e devem iniciar acompanhamento aos 45 anos.' }
        ],
        highlightBox: {
          label: 'Recomendação Médica',
          text: 'A partir dos 50 anos (ou 45 com histórico/fatores de risco), consulte anualmente o urologista.'
        }
      }
    },
    {
      id: 'slide-5',
      number: 5,
      title: 'Sinais de Atenção',
      category: 'Sintomatologia',
      description: 'Orienta sobre sintomas suspeitos e enfatiza que a fase inicial costuma ser assintomática.',
      previewContent: {
        badge: 'SLIDE 14 · SINAIS DE ALERTA',
        headline: 'Sinais e Sintomas que Exigem Investigação',
        subheadline: 'Atenção aos sinais corporais que justificam uma consulta médica sem demora.',
        points: [
          { title: 'Dificuldade para Urinar', text: 'Demora para iniciar ou fluxo urinário fraco e entrecortado.' },
          { title: 'Frequência Noturna Aumentada', text: 'Necessidade de acordar várias vezes à noite para ir ao banheiro.' },
          { title: 'Presença de Sangue', text: 'Qualquer vestígio na urina ou no sêmen exige avaliação médica imediata.' }
        ],
        highlightBox: {
          label: 'Atenção Crucial',
          text: 'Na fase inicial, o câncer de próstata NÃO costuma causar sintomas. Não espere sentir dor para realizar exames!'
        }
      }
    },
    {
      id: 'slide-6',
      number: 6,
      title: 'Mitos e Verdades',
      category: 'Desmistificação',
      description: 'Lâmina dinâmica com comparativo direto de mitos populares vs fatos científicos comprovados.',
      previewContent: {
        badge: 'SLIDE 18 · QUEBRANDO TABUS',
        headline: 'Mitos e Verdades sobre a Saúde Masculina',
        subheadline: 'Informação descomplica o cuidado e combate o medo irracional dos exames.',
        points: [
          { title: 'Mito: "Se não sinto nada, estou 100% saudável."', text: 'Verdade: Doenças silenciosas como hipertensão e câncer inicial não avisam com dor.' },
          { title: 'Mito: "O exame de sangue (PSA) substitui o toque retal."', text: 'Verdade: Eles são complementares; cerca de 20% dos tumores não alteram o PSA.' },
          { title: 'Mito: "Câncer de próstata sempre leva à perda de virilidade."', text: 'Verdade: Diagnósticos precoces preservam a integridade e têm até 90% de cura.' }
        ]
      }
    }
  ];

  const handleNext = () => {
    setActiveSlideIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setActiveSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      handleNext();
    } else if (distance < -50) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const currentSlide = slides[activeSlideIndex];

  // Render faithful 16:9 slide layout
  const renderSlideContent = (slide: SlideItem, isModal: boolean = false) => {
    const isCover = slide.id === 'slide-1';
    const isMyths = slide.id === 'slide-6';

    if (isCover) {
      return (
        <div className={`w-full h-full bg-gradient-to-br from-blue-950 via-slate-900 to-sky-950 text-white p-6 sm:p-10 flex flex-col justify-between select-none relative overflow-hidden ${isModal ? 'md:p-14' : ''}`}>
          {/* Subtle geometric graphic ribbon accent */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-sky-400 uppercase">
              <span className="w-2.5 h-2.5 bg-sky-400 rounded-xs"></span>
              {slide.previewContent.badge}
            </div>
            <div className="text-[11px] sm:text-xs text-slate-400">
              Slide 01 de 23
            </div>
          </div>

          <div className="my-auto py-6 max-w-2xl">
            {/* Visual ribbon symbol */}
            <div className="inline-flex items-center gap-2 bg-sky-500/20 text-sky-300 border border-sky-400/30 px-3 py-1 rounded text-xs font-semibold mb-4">
              <span>🎗️</span>
              <span>Saúde do Homem</span>
            </div>
            <h3 className={`font-bold tracking-tight text-white leading-tight ${isModal ? 'text-3xl sm:text-4xl lg:text-5xl' : 'text-2xl sm:text-3xl lg:text-4xl'}`}>
              {slide.previewContent.headline}
            </h3>
            <p className={`text-slate-300 mt-4 leading-relaxed ${isModal ? 'text-base sm:text-lg' : 'text-xs sm:text-sm'}`}>
              {slide.previewContent.subheadline}
            </p>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-white/10 text-[11px] sm:text-xs text-slate-400">
            <span>[Espaço para Logotipo da sua Empresa / Instituição]</span>
            <span>ClickMateriais • Template Canva</span>
          </div>
        </div>
      );
    }

    if (isMyths) {
      return (
        <div className={`w-full h-full bg-white text-slate-900 p-6 sm:p-8 flex flex-col justify-between select-none border border-slate-200 ${isModal ? 'md:p-12' : ''}`}>
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <span className="text-xs font-bold text-sky-700 tracking-wider uppercase">
              {slide.previewContent.badge}
            </span>
            <span className="text-xs text-slate-400">Slide {slide.number} de 23</span>
          </div>

          <div className="my-2">
            <h3 className={`font-bold text-blue-950 ${isModal ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'}`}>
              {slide.previewContent.headline}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              {slide.previewContent.subheadline}
            </p>

            <div className="mt-4 space-y-2.5 sm:space-y-3">
              {slide.previewContent.points.map((pt, i) => (
                <div key={i} className="bg-slate-50 border border-slate-200/80 rounded-lg p-3 sm:p-4 text-xs sm:text-sm">
                  <div className="flex items-start gap-2 text-rose-700 font-semibold mb-1">
                    <XCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{pt.title}</span>
                  </div>
                  <div className="flex items-start gap-2 text-emerald-700 font-normal pl-6">
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600" />
                    <span className="text-slate-700">{pt.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-[11px] text-slate-400 pt-2 border-t border-slate-100 flex justify-between">
            <span>ClickMateriais · Novembro Azul</span>
            <span>Edite textos e cores no Canva</span>
          </div>
        </div>
      );
    }

    // Default slides 2, 3, 4, 5
    return (
      <div className={`w-full h-full bg-white text-slate-900 p-6 sm:p-8 flex flex-col justify-between select-none border border-slate-200 ${isModal ? 'md:p-12' : ''}`}>
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <span className="text-xs font-bold text-sky-700 tracking-wider uppercase">
            {slide.previewContent.badge}
          </span>
          <span className="text-xs text-slate-400">Slide {slide.number} de 23</span>
        </div>

        <div className="my-auto py-2">
          <h3 className={`font-bold text-blue-950 leading-tight ${isModal ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'}`}>
            {slide.previewContent.headline}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            {slide.previewContent.subheadline}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-5">
            {slide.previewContent.points.map((pt, i) => (
              <div key={i} className="bg-blue-50/50 border border-blue-100 rounded-lg p-3 sm:p-4 text-left">
                <div className="w-2 h-2 rounded-full bg-sky-600 mb-2"></div>
                <h4 className="font-bold text-blue-950 text-xs sm:text-sm mb-1">
                  {pt.title}
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                  {pt.text}
                </p>
              </div>
            ))}
          </div>

          {slide.previewContent.highlightBox && (
            <div className="mt-4 p-3 rounded-lg bg-amber-50/80 border border-amber-200 text-left flex items-start gap-2.5">
              <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <div className="text-xs text-amber-900">
                <strong className="font-semibold">{slide.previewContent.highlightBox.label}: </strong>
                {slide.previewContent.highlightBox.text}
              </div>
            </div>
          )}
        </div>

        <div className="text-[11px] text-slate-400 pt-2 border-t border-slate-100 flex justify-between">
          <span>ClickMateriais · Apresentação Editável</span>
          <span>Preserva formatação original</span>
        </div>
      </div>
    );
  };

  return (
    <section id="exemplos" className="py-12 md:py-20 bg-slate-100/70 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Carousel & Slide Display Container */}
        <div className="max-w-4xl mx-auto">
          {/* Main 16:9 Display Window with Touch Listeners */}
          <div
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="relative bg-white rounded-2xl shadow-xl overflow-hidden aspect-[16/9] border border-slate-300/80 group"
          >
            {renderSlideContent(currentSlide)}

            {/* Previous Button */}
            <button
              onClick={handlePrev}
              aria-label="Slide anterior"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-md text-slate-800 hover:bg-white hover:text-blue-900 flex items-center justify-center transition-all cursor-pointer opacity-90 hover:opacity-100"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              aria-label="Próximo slide"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-md text-slate-800 hover:bg-white hover:text-blue-900 flex items-center justify-center transition-all cursor-pointer opacity-90 hover:opacity-100"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Zoom / Fullscreen Button */}
            <button
              onClick={() => setIsZoomOpen(true)}
              aria-label="Ampliar slide"
              className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-blue-950/80 hover:bg-blue-950 text-white text-xs font-medium flex items-center gap-1.5 backdrop-blur-xs transition-colors cursor-pointer"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Ampliar</span>
            </button>
          </div>

          {/* Slide Metadata & Description */}
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs sm:text-sm text-slate-600 px-2">
            <div>
              <strong className="text-blue-950 font-semibold">{currentSlide.title}</strong> — {currentSlide.description}
            </div>
            <div className="text-slate-400 shrink-0">
              {activeSlideIndex + 1} de {slides.length} lâminas demonstradas
            </div>
          </div>

          {/* Slide Thumbnails Selector */}
          <div className="mt-6 flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-none">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setActiveSlideIndex(idx)}
                className={`px-3 py-2 text-xs font-medium rounded-lg transition-all border whitespace-nowrap cursor-pointer ${
                  activeSlideIndex === idx
                    ? 'bg-blue-900 text-white border-blue-900 shadow-xs'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                }`}
              >
                {s.title}
              </button>
            ))}
          </div>

          {/* Required Button Below: "QUERO RECEBER ESSE MATERIAL" */}
          <div className="mt-12 text-center">
            <button
              onClick={onScrollToOffers}
              className="px-8 py-4 bg-sky-600 hover:bg-sky-500 active:scale-98 text-white font-bold text-sm sm:text-base tracking-wide uppercase rounded-lg shadow-lg shadow-sky-600/20 transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <span>QUERO RECEBER ESSE MATERIAL</span>
              <ArrowRight className="w-5 h-5 shrink-0" />
            </button>
            <div className="text-xs text-slate-500 mt-2">
              Direciona para a escolha entre o Kit Essencial ou Completo
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Zoom Modal */}
      {isZoomOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden aspect-[16/9]">
            {/* Close Button */}
            <button
              onClick={() => setIsZoomOpen(false)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white transition-colors"
              aria-label="Fechar ampliação"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Slide Renderer */}
            <div className="w-full h-full">
              {renderSlideContent(currentSlide, true)}
            </div>

            {/* Modal Controls */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 shadow-lg text-slate-800 hover:bg-white flex items-center justify-center"
              aria-label="Slide anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 shadow-lg text-slate-800 hover:bg-white flex items-center justify-center"
              aria-label="Próximo slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

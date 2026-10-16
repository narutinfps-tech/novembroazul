import React from 'react';
import { BookOpen, MessagesSquare, CheckSquare2 } from 'lucide-react';

export const BonusesSection: React.FC = () => {
  const bonuses = [
    {
      badge: "Bônus 1",
      title: "Roteiro de Palestra",
      description: "Um guia para organizar a abertura, as transições entre assuntos e o encerramento da sua apresentação.",
      image: "/src/assets/images/bonus_roteiro_palestra_1792171966373.jpg",
      icon: BookOpen,
      alt: "Mockup do Roteiro de Palestra Novembro Azul"
    },
    {
      badge: "Bônus 2",
      title: "Perguntas para Interação",
      description: "Dez perguntas com orientações de resposta para incentivar a participação do público durante a palestra.",
      image: "/src/assets/images/bonus_perguntas_interacao_1792171984170.jpg",
      icon: MessagesSquare,
      alt: "Mockup dos cartões de Perguntas para Interação Novembro Azul"
    },
    {
      badge: "Bônus 3",
      title: "Checklist da Ação Novembro Azul",
      description: "Uma lista prática para conferir materiais, equipamentos e organização antes do evento.",
      image: "/src/assets/images/bonus_checklist_acao_1792171999762.jpg",
      icon: CheckSquare2,
      alt: "Mockup do Checklist da Ação Novembro Azul"
    }
  ];

  return (
    <section id="bonus" className="py-16 md:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-wider uppercase text-sky-700">
            Exclusivo no Kit Completo
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-950 mt-2 [text-wrap:balance]">
            No Kit Completo, você também recebe três materiais de apoio
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Ferramentas pensadas para dar ainda mais segurança ao palestrante e engajamento aos participantes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bonuses.map((bonus, idx) => {
            const Icon = bonus.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200/90 rounded-2xl overflow-hidden flex flex-col hover:border-sky-300 hover:shadow-lg transition-all duration-200"
              >
                {/* Visual Mockup Container */}
                <div className="relative aspect-[4/3] bg-slate-200 overflow-hidden">
                  <img
                    src={bonus.image}
                    alt={bonus.alt}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-blue-900/90 text-white text-xs font-bold px-3 py-1 rounded">
                    {bonus.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-900 flex items-center justify-center mb-4 shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-blue-950 mb-2">
                    {bonus.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {bonus.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clear Note as instructed */}
        <p className="mt-8 text-center text-xs text-slate-500 max-w-2xl mx-auto">
          Estes materiais são propostos como complementos de apoio no Kit Completo para facilitar a execução da palestra.
        </p>
      </div>
    </section>
  );
};

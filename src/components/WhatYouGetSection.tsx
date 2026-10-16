import React from 'react';
import { 
  Presentation, 
  HeartHandshake, 
  AlertTriangle, 
  HelpCircle, 
  Palette, 
  FileCheck 
} from 'lucide-react';

export const WhatYouGetSection: React.FC = () => {
  const items = [
    {
      icon: Presentation,
      title: "23 slides estruturados",
      description: "23 slides com uma sequência organizada para conduzir sua apresentação do início ao fim com clareza."
    },
    {
      icon: HeartHandshake,
      title: "Saúde do Homem e Conscientização",
      description: "Conteúdo completo sobre Novembro Azul, autocuidado masculino e prevenção de doenças."
    },
    {
      icon: AlertTriangle,
      title: "Fatores de Risco e Sinais",
      description: "Temas essenciais como câncer de próstata, fatores de risco genéticos/idade e sinais de atenção."
    },
    {
      icon: HelpCircle,
      title: "Mitos e Verdades",
      description: "Perguntas e respostas desmistificando tabus para apoiar a conscientização e quebrar o preconceito."
    },
    {
      icon: Palette,
      title: "Arquivo Editável no Canva",
      description: "Link direto para abrir no Canva e personalizar textos, cores, logos e identidade visual da sua instituição."
    },
    {
      icon: FileCheck,
      title: "Versão em PDF de Alta Resolução",
      description: "Arquivo em formato PDF pronto para impressão de apostilas ou visualização offline imediata."
    }
  ];

  return (
    <section id="conteudo" className="py-16 md:py-24 bg-white border-y border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-wider uppercase text-sky-700">
            Conteúdo Incluso
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-950 mt-2 [text-wrap:balance]">
            Um material organizado para facilitar sua palestra
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Cada slide foi planejado para entregar informação precisa, visual agradável e comunicação acessível a qualquer público.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-slate-50 border border-slate-200/80 rounded-xl p-6 sm:p-8 flex flex-col items-center text-center hover:border-sky-300 hover:shadow-md transition-all duration-200"
              >
                {/* Centralized Icon */}
                <div className="w-14 h-14 rounded-full bg-blue-100/80 text-blue-900 flex items-center justify-center mb-5 shrink-0">
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="text-base sm:text-lg font-bold text-blue-950 mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

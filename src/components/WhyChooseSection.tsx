import React from 'react';
import { 
  Clock, 
  ListOrdered, 
  Sliders, 
  Sparkles, 
  Building2, 
  RotateCw
} from 'lucide-react';

export const WhyChooseSection: React.FC = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Economize tempo",
      text: "Tenha uma base pronta para começar, sem passar horas na frente de uma tela em branco montando layout do zero."
    },
    {
      icon: ListOrdered,
      title: "Apresente com organização",
      text: "Siga uma sequência lógica de assuntos com introdução, dados, conscientização, exames e fechamento acolhedor."
    },
    {
      icon: Sliders,
      title: "Personalize com facilidade",
      text: "Adapte o material ao seu público: altere textos, adicione o logotipo da sua instituição e troque detalhes com poucos cliques."
    },
    {
      icon: Sparkles,
      title: "Valorize sua ação",
      text: "Utilize um visual profissional e consistente, transmitindo credibilidade e respeito a um tema tão sensível."
    },
    {
      icon: Building2,
      title: "Use em diferentes ambientes",
      text: "Perfeito para palestras e dinâmicas em empresas, escolas, clínicas, hospitais, igrejas e eventos comunitários."
    },
    {
      icon: RotateCw,
      title: "Reutilize o material",
      text: "O arquivo é seu de forma definitiva: adapte para novas apresentações, campanhas anuais e treinamentos internos."
    }
  ];

  return (
    <section id="vantagens" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-wider uppercase text-sky-700">
            Praticidade e Eficiência
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-950 mt-2 [text-wrap:balance]">
            Menos tempo preparando slides. Mais tempo para preparar sua apresentação.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Você foca na sua mensagem e na conexão com as pessoas; o design e a estrutura visual já estão solucionados.
          </p>
        </div>

        {/* 6 Cards with Centered Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 rounded-xl p-6 sm:p-8 flex flex-col items-center text-center shadow-xs hover:border-blue-400 hover:shadow-md transition-all duration-200"
              >
                {/* Centralized Icon */}
                <div className="w-14 h-14 rounded-full bg-sky-50 text-sky-700 border border-sky-100 flex items-center justify-center mb-5 shrink-0">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-base sm:text-lg font-bold text-blue-950 mb-2">
                  {benefit.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {benefit.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

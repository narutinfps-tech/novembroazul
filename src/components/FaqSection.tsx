import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FaqItem } from '../types';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default for immediate context

  const faqs: FaqItem[] = [
    {
      question: "1. O material é físico ou digital?",
      answer: "É um produto totalmente digital. Você recebe acesso aos arquivos, sem envio de material físico."
    },
    {
      question: "2. Posso editar os slides?",
      answer: "Sim. A apresentação é editável no Canva, permitindo personalizar textos, cores e outros elementos conforme sua necessidade."
    },
    {
      question: "3. Para quem esse material é indicado?",
      answer: "Para profissionais e organizadores de palestras e ações de Novembro Azul em empresas, escolas, clínicas, igrejas e outras instituições."
    },
    {
      question: "4. Qual a diferença entre os dois kits?",
      answer: "O Essencial inclui os 23 slides editáveis no Canva e a versão em PDF. O Completo inclui esse mesmo material e os três bônus de apoio à apresentação."
    },
    {
      question: "5. E se o material não atender às minhas expectativas?",
      answer: "Você pode solicitar o reembolso em até 7 dias após a compra, conforme a garantia apresentada nesta página."
    }
  ];

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-white border-t border-slate-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-wider uppercase text-sky-700">
            Dúvidas Comuns
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-950 mt-2 [text-wrap:balance]">
            Perguntas Frequentes
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Tire suas dúvidas antes de adquirir seu material de apresentação.
          </p>
        </div>

        {/* 5 Sanfona Accordions */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-slate-200 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-4 sm:p-5 bg-slate-50/70 hover:bg-slate-100 flex items-center justify-between gap-4 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-sm sm:text-base text-blue-950">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-sky-700' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="p-4 sm:p-5 bg-white border-t border-slate-100 text-sm text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

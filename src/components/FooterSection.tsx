import React from 'react';
import { LegalModalType } from './LegalModal';

interface FooterSectionProps {
  onOpenLegal: (type: LegalModalType) => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onOpenLegal }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800 text-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800 text-center md:text-left">
          {/* Brand */}
          <div>
            <div className="text-lg font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <span className="w-2.5 h-2.5 rounded-sm bg-sky-500 inline-block"></span>
              <span>ClickMateriais</span>
            </div>
            <p className="text-xs text-slate-400 mt-1 max-w-sm">
              Materiais digitais práticos, estruturados e editáveis para palestrantes e organizadores de campanhas.
            </p>
          </div>

          {/* Links for Suporte, Termos de Uso e Política de Privacidade */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm">
            <button
              onClick={() => onOpenLegal('suporte')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Suporte ao Cliente
            </button>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <button
              onClick={() => onOpenLegal('privacidade')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Política de Privacidade
            </button>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <button
              onClick={() => onOpenLegal('termos')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Termos de Uso
            </button>
          </div>
        </div>

        {/* Legal Disclaimers & Copyright */}
        <div className="space-y-4 text-xs text-slate-400 leading-relaxed text-center md:text-left">
          <p>
            © 2026 ClickMateriais. Todos os direitos reservados.
          </p>
          <p className="text-[11px] text-slate-400">
            Aviso legal: Este produto é um modelo digital independente desenvolvido pela ClickMateriais e não possui nenhum vínculo institucional, patrocínio ou afiliação oficial com o Canva®, com o Ministério da Saúde ou com quaisquer sociedades médicas ou governamentais. Os conteúdos destinam-se a apoio educacional e organizativo para eventos de conscientização sobre a saúde do homem.
          </p>
        </div>
      </div>
    </footer>
  );
};

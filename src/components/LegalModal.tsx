import React from 'react';
import { X, ShieldCheck, FileText, Headphones } from 'lucide-react';

export type LegalModalType = 'termos' | 'privacidade' | 'suporte' | null;

interface LegalModalProps {
  type: LegalModalType;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'termos' && (
          <div className="space-y-4 text-slate-700 text-sm">
            <div className="flex items-center gap-2 text-blue-950 font-bold text-xl pb-2 border-b">
              <FileText className="w-6 h-6 text-sky-600" />
              <h3>Termos de Uso · ClickMateriais</h3>
            </div>
            <p>
              Ao adquirir o produto digital <strong>Slides Prontos para o Novembro Azul</strong>, você recebe uma licença de uso pessoal e institucional não-exclusiva para conduzir apresentações, palestras e dinâmicas educativas em sua empresa, escola, clínica ou comunidade.
            </p>
            <h4 className="font-bold text-blue-950">1. Direitos e Uso Permitido</h4>
            <p>
              Você tem total liberdade para editar os textos, cores, logos e elementos visuais dentro da plataforma Canva ou utilizando o arquivo PDF fornecido.
            </p>
            <h4 className="font-bold text-blue-950">2. Restrições</h4>
            <p>
              É expressamente proibida a revenda, sublicenciamento, redistribuição gratuita ou comercialização dos arquivos como seus próprios modelos ou produtos digitais.
            </p>
            <h4 className="font-bold text-blue-950">3. Natureza do Material</h4>
            <p>
              O material destina-se exclusivamente a fins educativos e organizacionais. Não substitui orientações médicas nem consultas com especialistas.
            </p>
          </div>
        )}

        {type === 'privacidade' && (
          <div className="space-y-4 text-slate-700 text-sm">
            <div className="flex items-center gap-2 text-blue-950 font-bold text-xl pb-2 border-b">
              <ShieldCheck className="w-6 h-6 text-sky-600" />
              <h3>Política de Privacidade · ClickMateriais</h3>
            </div>
            <p>
              A ClickMateriais valoriza a segurança e privacidade de seus clientes.
            </p>
            <h4 className="font-bold text-blue-950">1. Coleta de Dados</h4>
            <p>
              Os dados coletados no ato da compra (como nome e e-mail) destinam-se exclusivamente ao envio do link de acesso aos arquivos digitais e à emissão de comprovantes fiscais/financeiros.
            </p>
            <h4 className="font-bold text-blue-950">2. Não Compartilhamento</h4>
            <p>
              Seus dados nunca serão vendidos, alugados ou transferidos para terceiros não relacionados ao processamento seguro do pagamento.
            </p>
            <h4 className="font-bold text-blue-950">3. Segurança dos Pagamentos</h4>
            <p>
              Todas as transações são protegidas com criptografia SSL de 256 bits pelos gateways oficiais integrados.
            </p>
          </div>
        )}

        {type === 'suporte' && (
          <div className="space-y-4 text-slate-700 text-sm">
            <div className="flex items-center gap-2 text-blue-950 font-bold text-xl pb-2 border-b">
              <Headphones className="w-6 h-6 text-sky-600" />
              <h3>Canal de Atendimento e Suporte</h3>
            </div>
            <p>
              Precisa de ajuda com o acesso ao Canva, download dos arquivos em PDF ou dúvidas sobre sua compra?
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
              <p className="font-medium text-blue-950">
                Informações de Atendimento:
              </p>
              <p className="text-xs text-slate-600">
                • E-mail do suporte oficial: <strong>suporte@clickmateriais.com</strong> (ou pelo canal informado no seu e-mail de confirmação da compra).
              </p>
              <p className="text-xs text-slate-600">
                • Horário de atendimento: Segunda a sexta-feira, das 09h às 18h.
              </p>
              <p className="text-xs text-slate-600">
                • Prazo de resposta: Até 24 horas úteis.
              </p>
            </div>
          </div>
        )}

        <div className="mt-6 pt-4 border-t flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold uppercase tracking-wider rounded-lg cursor-pointer"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

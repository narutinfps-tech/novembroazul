import React, { useState } from 'react';
import { X, ShieldCheck, Check, QrCode, CreditCard, ExternalLink, Settings2, CheckCircle2, Copy } from 'lucide-react';
import { OfferPlan } from '../types';

interface CheckoutModalProps {
  plan: OfferPlan | null;
  onClose: () => void;
  checkoutUrls: { essencial: string; completo: string };
  onUpdateCheckoutUrl: (planId: 'essencial' | 'completo', url: string) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  plan,
  onClose,
  checkoutUrls,
  onUpdateCheckoutUrl
}) => {
  if (!plan) return null;

  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix');
  const [customerEmail, setCustomerEmail] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isConfiguringUrl, setIsConfiguringUrl] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const currentConfiguredUrl = checkoutUrls[plan.id];
  const isDefaultPlaceholder = currentConfiguredUrl.startsWith('[LINK_CHECKOUT');

  const handleSimulatePayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerEmail || !customerEmail.includes('@')) {
      alert('Por favor, informe um e-mail válido para receber os materiais.');
      return;
    }
    setIsSuccess(true);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentConfiguredUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
        {/* Header */}
        <div className="bg-blue-950 text-white p-5 sm:p-6 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-sky-400">
              Checkout Seguro · ClickMateriais
            </span>
            <h3 className="text-xl font-bold mt-0.5">
              {plan.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {!isSuccess ? (
            <>
              {/* Order Summary */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-500">Valor com desconto único</div>
                  <div className="text-2xl font-bold text-blue-950">{plan.price}</div>
                  <div className="text-[11px] text-emerald-600 font-medium flex items-center gap-1 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                    <span>Acesso vitalício aos materiais</span>
                  </div>
                </div>

                <div className="text-right text-xs text-slate-500">
                  <div className="font-semibold text-slate-700">Entrega Digital</div>
                  <div>Via e-mail imediato</div>
                </div>
              </div>

              {/* Destination Link Info & Customization */}
              <div className="p-3 bg-blue-50/70 border border-blue-200/80 rounded-xl text-xs space-y-2">
                <div className="flex items-center justify-between text-blue-950 font-semibold">
                  <span>Destino de Checkout configurado:</span>
                  <button
                    type="button"
                    onClick={() => setIsConfiguringUrl(!isConfiguringUrl)}
                    className="text-sky-700 hover:text-sky-900 flex items-center gap-1 text-[11px] underline cursor-pointer"
                  >
                    <Settings2 className="w-3 h-3" />
                    <span>{isConfiguringUrl ? 'Concluir' : 'Personalizar link'}</span>
                  </button>
                </div>

                {isConfiguringUrl ? (
                  <div className="space-y-2 pt-1">
                    <input
                      type="text"
                      value={currentConfiguredUrl}
                      onChange={(e) => onUpdateCheckoutUrl(plan.id, e.target.value)}
                      placeholder="https://pay.kiwify.com.br/... ou link Hotmart"
                      className="w-full text-xs p-2 bg-white border border-slate-300 rounded focus:outline-sky-600"
                    />
                    <div className="text-[11px] text-slate-500">
                      Cole seu link oficial de gateway para conectar este botão ao seu checkout externo.
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-between bg-white px-2.5 py-1.5 rounded border border-blue-100 text-[11px] text-slate-700">
                    <span className="truncate max-w-[280px]">{currentConfiguredUrl}</span>
                    <button
                      onClick={handleCopyLink}
                      className="text-sky-700 hover:text-sky-900 ml-2 shrink-0 cursor-pointer"
                      title="Copiar link de checkout"
                    >
                      {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                )}
              </div>

              {/* Interactive payment flow */}
              <form onSubmit={handleSimulatePayment} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Seu melhor e-mail (para envio dos slides)
                  </label>
                  <input
                    type="email"
                    required
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    placeholder="exemplo@empresa.com.br"
                    className="w-full text-sm p-3 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    Forma de Pagamento
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('pix')}
                      className={`p-3 rounded-lg border text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer transition-all ${
                        paymentMethod === 'pix'
                          ? 'border-sky-600 bg-sky-50 text-sky-900'
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <QrCode className="w-4 h-4 text-emerald-600" />
                      <span>PIX (Acesso Imediato)</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`p-3 rounded-lg border text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer transition-all ${
                        paymentMethod === 'card'
                          ? 'border-sky-600 bg-sky-50 text-sky-900'
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <CreditCard className="w-4 h-4 text-blue-900" />
                      <span>Cartão de Crédito</span>
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-sky-600 hover:bg-sky-500 active:scale-98 text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-sky-600/25 transition-all cursor-pointer"
                >
                  Confirmar e Liberar Acesso ({plan.price})
                </button>

                {!isDefaultPlaceholder && (
                  <a
                    href={currentConfiguredUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center text-xs text-sky-700 hover:underline pt-1"
                  >
                    Ir diretamente para a página de pagamento externa ↗
                  </a>
                )}
              </form>
            </>
          ) : (
            /* Success confirmation */
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="text-xl font-bold text-blue-950">
                Acesso Confirmado com Sucesso!
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
                Enviamos o link de acesso aos <strong>23 slides editáveis no Canva</strong> e aos arquivos em PDF para <strong>{customerEmail}</strong>.
              </p>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-left text-xs space-y-2">
                <div className="font-semibold text-blue-950">Seu pacote inclui:</div>
                <div>• Apresentação Canva 23 slides (link aberto)</div>
                <div>• Download PDF em alta resolução</div>
                {plan.id === 'completo' && (
                  <>
                    <div>• Bônus 1: Roteiro do Palestrante</div>
                    <div>• Bônus 2: 10 Perguntas para Interação</div>
                    <div>• Bônus 3: Checklist do Evento</div>
                  </>
                )}
              </div>

              <button
                onClick={() => {
                  setIsSuccess(false);
                  onClose();
                }}
                className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
              >
                Concluir e Voltar à Página
              </button>
            </div>
          )}

          {/* Trust badges */}
          <div className="flex items-center justify-center gap-4 pt-2 text-[11px] text-slate-400">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Ambiente 100% Criptografado</span>
            </span>
            <span>·</span>
            <span>Garantia de 7 dias</span>
          </div>
        </div>
      </div>
    </div>
  );
};

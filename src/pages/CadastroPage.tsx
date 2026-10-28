import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface FormData {
  nome: string;
  empresa: string;
  segmento: string;
  telefone: string;
  email: string;
  cidade: string;
  bairro: string;
  mensagem: string;
}

const segmentOptions = [
  {
    group: 'Comércio e Serviços',
    options: [
      { value: 'moda', label: 'Moda e vestuário' },
      { value: 'calcados_acessorios', label: 'Calçados, bolsas e acessórios' },
      { value: 'joias_relogios', label: 'Joias e relógios' },
      { value: 'eletronicos', label: 'Eletrônicos e celulares' },
      { value: 'alimentacao', label: 'Restaurantes, cafés e docerias' },
      { value: 'beleza_salao', label: 'Salão e barbearia' },
      { value: 'casa_decoracao', label: 'Casa e decoração' },
      { value: 'papelaria_presentes', label: 'Papelaria e presentes' },
      { value: 'servicos_gerais', label: 'Serviços gerais' },
      { value: 'escritorios_coworking', label: 'Escritórios e coworking' },
      { value: 'turismo', label: 'Turismo' },
      { value: 'cursos_livres', label: 'Cursos e idiomas' },
      { value: 'pet_shop', label: 'Pet shop' },
      { value: 'telefonia', label: 'Telefonia' },
    ],
  },
  {
    group: 'Comércio com Regras Específicas',
    options: [
      { value: 'otica', label: 'Ótica' },
      { value: 'farmacia', label: 'Farmácia' },
      { value: 'suplementos', label: 'Suplementos' },
      { value: 'imobiliaria', label: 'Imobiliária' },
      { value: 'credito_financeira', label: 'Crédito' },
    ],
  },
  {
    group: 'Saúde e Profissões Regulamentadas',
    options: [
      { value: 'clinica_medica', label: 'Clínica médica' },
      { value: 'odontologia', label: 'Odontologia' },
      { value: 'psicologia', label: 'Psicologia' },
      { value: 'nutricao', label: 'Nutrição' },
      { value: 'fisioterapia', label: 'Fisioterapia' },
      { value: 'estetica_procedimentos', label: 'Estética com procedimentos' },
      { value: 'veterinaria', label: 'Veterinária' },
    ],
  },
];

const inputClass =
  'w-full bg-white/[0.03] border border-white/[0.06] rounded-lg px-5 py-4 text-off-white font-body text-sm focus:outline-none focus:border-amber/40 focus:bg-white/[0.05] transition-all duration-300 placeholder:text-off-white/20';

const CadastroPage: React.FC = () => {
  const [form, setForm] = useState<FormData>({
    nome: '',
    empresa: '',
    segmento: '',
    telefone: '',
    email: '',
    cidade: '',
    bairro: '',
    mensagem: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-petroleo">
      <Header />

      <main className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-off-white/30 hover:text-amber transition-colors mb-12 font-body text-sm"
          >
            <ArrowLeft size={16} />
            Voltar
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-14"
          >
            <span className="label-caps text-amber/50 mb-6 block">Cadastro</span>
            <h1 className="heading-xl text-off-white text-[clamp(2.5rem,6vw,4.5rem)] mb-6">
              Cadastre a sua loja
            </h1>
            <p className="text-off-white/50 text-base lg:text-lg font-body max-w-md">
              Leva dois minutos. A equipe Retoma confere os dados e manda o seu acesso ao portal pelo WhatsApp.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl overflow-hidden border border-white/[0.04] bg-white/[0.01]"
          >
            {!submitted ? (
              <form onSubmit={onSubmit} className="p-8 lg:p-14">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nome" className="label-caps text-off-white/30 mb-3 block">
                      Seu nome *
                    </label>
                    <input type="text" id="nome" name="nome" value={form.nome} onChange={onChange} required maxLength={80} className={inputClass} placeholder="Como podemos te chamar?" />
                  </div>

                  <div>
                    <label htmlFor="empresa" className="label-caps text-off-white/30 mb-3 block">
                      Nome da loja ou consultório *
                    </label>
                    <input type="text" id="empresa" name="empresa" value={form.empresa} onChange={onChange} required maxLength={80} className={inputClass} placeholder="Nome que aparece na vitrine" />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="segmento" className="label-caps text-off-white/30 mb-3 block">
                      Tipo de negócio *
                    </label>
                    <select id="segmento" name="segmento" value={form.segmento} onChange={onChange} required className={`${inputClass} appearance-none cursor-pointer`}>
                      <option value="">Selecione o segmento</option>
                      {segmentOptions.map((g) => (
                        <optgroup key={g.group} label={g.group}>
                          {g.options.map((o) => (
                            <option key={o.value} value={o.value}>{o.label}</option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="telefone" className="label-caps text-off-white/30 mb-3 block">
                      WhatsApp *
                    </label>
                    <input type="tel" id="telefone" name="telefone" value={form.telefone} onChange={onChange} required className={inputClass} placeholder="(21) 99999-9999" />
                  </div>

                  <div>
                    <label htmlFor="email" className="label-caps text-off-white/30 mb-3 block">
                      E-mail *
                    </label>
                    <input type="email" id="email" name="email" value={form.email} onChange={onChange} required className={inputClass} placeholder="seu@email.com" />
                  </div>

                  <div>
                    <label htmlFor="cidade" className="label-caps text-off-white/30 mb-3 block">
                      Cidade *
                    </label>
                    <input type="text" id="cidade" name="cidade" value={form.cidade} onChange={onChange} required className={inputClass} placeholder="Rio de Janeiro" />
                  </div>

                  <div>
                    <label htmlFor="bairro" className="label-caps text-off-white/30 mb-3 block">
                      Bairro ou galeria *
                    </label>
                    <input type="text" id="bairro" name="bairro" value={form.bairro} onChange={onChange} required className={inputClass} placeholder="Onde fica sua loja?" />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="mensagem" className="label-caps text-off-white/30 mb-3 block">
                      Quer contar algo mais?
                    </label>
                    <textarea id="mensagem" name="mensagem" value={form.mensagem} onChange={onChange} rows={4} className={`${inputClass} resize-none`} placeholder="Conte-nos sobre sua loja, produtos ou qualquer dúvida..." />
                  </div>
                </div>

                <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  <button type="submit" disabled={submitting} className="btn-primary disabled:opacity-50 disabled:pointer-events-none">
                    {submitting ? 'Enviando...' : 'Enviar cadastro'}
                    {!submitting && <ArrowRight size={16} />}
                  </button>
                  <p className="text-off-white/20 text-xs font-body">
                    Ao enviar, você concorda com nossos termos de uso e política de privacidade.
                  </p>
                </div>
              </form>
            ) : (
              <div className="p-14 lg:p-20 text-center">
                <div className="w-16 h-16 rounded-full bg-verde-agua/10 border border-verde-agua/20 flex items-center justify-center mx-auto mb-8">
                  <Check size={32} className="text-verde-agua" />
                </div>
                <h2 className="heading-lg text-off-white text-3xl mb-6">Cadastro enviado</h2>
                <p className="text-off-white/50 font-body max-w-sm mx-auto mb-10 leading-relaxed">
                  A equipe Retoma vai conferir seus dados e entrar em contato pelo WhatsApp com o acesso ao portal em até 24 horas úteis.
                </p>
                <Link to="/" className="btn-secondary">Voltar para home</Link>
              </div>
            )}
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CadastroPage;

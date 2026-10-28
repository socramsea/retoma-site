import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';

const commerce = [
  'Moda e vestuário', 'Calçados, bolsas e acessórios', 'Joias e relógios',
  'Eletrônicos e celulares', 'Restaurantes, cafés e docerias', 'Salão e barbearia',
  'Casa e decoração', 'Papelaria e presentes', 'Serviços gerais',
  'Escritórios e coworking', 'Turismo', 'Cursos e idiomas', 'Pet shop',
  'Telefonia', 'Ótica', 'Farmácia', 'Suplementos', 'Imobiliárias',
  'Crédito', 'Produtos infantis', 'Academias', 'Bares',
];

const health = [
  'Clínicas médicas', 'Odontologia', 'Psicologia', 'Nutrição',
  'Fisioterapia', 'Estética com procedimentos', 'Veterinária',
];

const Segments: React.FC = () => {
  const { ref, isInView } = useScrollReveal(0.1);

  return (
    <section id="segmentos" className="relative py-32 lg:py-44 overflow-hidden" style={{ background: 'linear-gradient(180deg, #0B1F26 0%, #0f2a34 50%, #0B1F26 100%)' }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 lg:mb-28"
        >
          <span className="label-caps text-amber/50 mb-6 block">Público</span>
          <h2 className="heading-xl text-off-white text-[clamp(2.5rem,6vw,5.5rem)] mb-6">
            Para quem é
          </h2>
          <p className="text-off-white/40 font-body text-lg max-w-lg">
            O anunciante é o pequeno e médio negócio que já está dentro do prédio. Ele fala com quem está a poucos metros da porta dele.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr,1fr] gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-8 h-[2px] bg-amber" />
              <h3 className="font-display font-extrabold text-off-white/90 uppercase tracking-[0.1em] text-sm">
                Comércio e Serviços
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {commerce.map((seg, i) => (
                <span
                  key={i}
                  className="px-4 py-2 text-off-white/50 font-body text-[13px] border border-white/[0.05] rounded bg-white/[0.01] hover:border-amber/20 hover:text-off-white/70 transition-all duration-300 cursor-default"
                >
                  {seg}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-8 h-[2px] bg-verde-agua" />
              <h3 className="font-display font-extrabold text-off-white/90 uppercase tracking-[0.1em] text-sm">
                Saúde e Profissões Regulamentadas
              </h3>
            </div>

            <div className="flex flex-wrap gap-2 mb-10">
              {health.map((seg, i) => (
                <span
                  key={i}
                  className="px-4 py-2 text-off-white/50 font-body text-[13px] border border-white/[0.05] rounded bg-white/[0.01] hover:border-verde-agua/20 hover:text-off-white/70 transition-all duration-300 cursor-default"
                >
                  {seg}
                </span>
              ))}
            </div>

            <div className="p-6 rounded-xl border border-verde-agua/10 bg-verde-agua/[0.03]">
              <p className="text-off-white/50 font-body text-sm leading-relaxed">
                <span className="text-verde-agua font-bold">Atenção:</span> O portal aplica as regras de publicidade do seu conselho profissional e pede o seu número de registro.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Segments;

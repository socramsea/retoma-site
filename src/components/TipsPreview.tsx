import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowUpRight } from 'lucide-react';

const tips = [
  {
    id: 1,
    title: 'Como tirar fotos que vendem',
    excerpt: 'A qualidade da foto impacta diretamente o resultado do seu anúncio. Luz natural, fundo limpo e detalhes reais.',
    cat: 'Produção',
    time: '3 min',
  },
  {
    id: 2,
    title: '5 erros comuns em anúncios de galeria',
    excerpt: 'Texto longo, preço escondido, localização confusa. Evite os erros que fazem seu anúncio passar despercebido.',
    cat: 'Estratégia',
    time: '4 min',
  },
  {
    id: 3,
    title: 'O timing perfeito para sua campanha',
    excerpt: 'O fluxo da galeria muda ao longo do dia. Descubra os melhores horários para exibir seu anúncio.',
    cat: 'Planejamento',
    time: '3 min',
  },
];

const TipsPreview: React.FC = () => {
  const { ref, isInView } = useScrollReveal(0.1);

  return (
    <section className="relative py-32 lg:py-44 overflow-hidden" style={{ background: 'linear-gradient(180deg, #0B1F26 0%, #0f2a34 50%, #0B1F26 100%)' }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 lg:mb-20"
        >
          <div>
            <span className="label-caps text-amber/50 mb-6 block">Conteúdo</span>
            <h2 className="heading-xl text-off-white text-[clamp(2.5rem,6vw,5.5rem)]">
              Dicas para anunciar melhor
            </h2>
          </div>
          <Link
            to="/dicas"
            className="flex items-center gap-2 text-off-white/40 hover:text-amber font-display uppercase tracking-[0.15em] text-xs mt-8 lg:mt-0 transition-colors duration-300"
          >
            Ver todas
            <ArrowUpRight size={14} />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {tips.map((tip, idx) => (
            <motion.div
              key={tip.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * idx, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                to={`/dicas#${tip.id}`}
                className="block h-full p-8 lg:p-10 rounded-2xl border border-white/[0.04] bg-white/[0.01] hover:border-white/[0.08] hover:bg-white/[0.02] transition-all duration-500 group"
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="label-caps text-amber/30">{tip.cat}</span>
                  <span className="text-off-white/20 text-xs font-body">{tip.time}</span>
                </div>

                <h3 className="font-display font-extrabold text-off-white uppercase tracking-wide text-base mb-4 group-hover:text-amber transition-colors duration-300">
                  {tip.title}
                </h3>

                <p className="text-off-white/35 font-body text-sm leading-relaxed">
                  {tip.excerpt}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TipsPreview;

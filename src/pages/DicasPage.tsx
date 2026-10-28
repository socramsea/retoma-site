import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface Tip {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  readTime: string;
  category: string;
}

const tips: Tip[] = [
  {
    id: 1,
    title: 'Como tirar fotos que vendem',
    excerpt: 'A qualidade da foto impacta diretamente o resultado do seu anúncio.',
    content: 'Uma boa foto é o primeiro passo para um anúncio de sucesso. Use luz natural, prefira o início da manhã ou final da tarde. Evite flash direto. Posicione o produto sobre fundo neutro e limpo. Mostre detalhes importantes como textura e cor real. A Retoma transforma essa foto em um vídeo cinematográfico, mas a qualidade original importa.',
    readTime: '3 min',
    category: 'Produção',
  },
  {
    id: 2,
    title: '5 erros comuns em anúncios de galeria',
    excerpt: 'Evite os erros que fazem seu anúncio passar despercebido.',
    content: '1) Texto longo demais: as telas não têm som, então a mensagem precisa ser rápida. 2) Preço escondido: mostre o valor com destaque. 3) Localização confusa: diga exatamente onde fica sua loja. 4) Oferta sem urgência: coloque prazo ou "enquanto durar estoque". 5) Foto de baixa qualidade: pixelada não vende.',
    readTime: '4 min',
    category: 'Estratégia',
  },
  {
    id: 3,
    title: 'O timing perfeito para sua campanha',
    excerpt: 'Descubra os melhores horários e dias para exibir seu anúncio.',
    content: 'O fluxo da galeria muda ao longo do dia. No almoço, público de escritório. À tarde, público geral. No fim de semana, famílias. Pense no seu produto: roupas de trabalho vendem mais no almoço; presentes no fim de semana. A Retoma permite escolher os horários e dias para otimizar seu investimento.',
    readTime: '3 min',
    category: 'Planejamento',
  },
  {
    id: 4,
    title: 'Como medir o resultado do seu anúncio',
    excerpt: 'Métricas que importam e como interpretar os números.',
    content: 'O portal da Retoma mostra cada exibição: data, hora, tela. Mas o mais importante é o que acontece na sua loja. Anote quantos clientes mencionaram a tela. Compare vendas antes e depois. Teste diferentes ofertas e veja qual gera mais movimento. O comprovante de exibição é sua garantia.',
    readTime: '5 min',
    category: 'Resultados',
  },
  {
    id: 5,
    title: 'Falar com quem está a poucos metros',
    excerpt: 'A vantagem única do anúncio em galeria.',
    content: 'Diferente do Instagram ou Google, sua mensagem chega para quem pode entrar na sua loja em minutos. Use isso a seu favor: mostre produtos que estão na vitrine, ofertas do dia, novidades que acabaram de chegar. O cliente vê na tela e olha para sua porta. Essa proximidade é seu maior diferencial.',
    readTime: '3 min',
    category: 'Estratégia',
  },
  {
    id: 6,
    title: 'Anúncios de última hora que funcionam',
    excerpt: 'Como criar urgência sem parecer desesperado.',
    content: 'Promoção relâmpago? Últimas peças? Promoção só hoje? Esses anúncios funcionam muito bem em galeria porque o cliente pode aproveitar na hora. A Retoma permite trocar seu anúncio rapidamente. Use para liquidar estoque, promover happy hour ou avisar que vai fechar mais cedo. A urgência real gera movimento real.',
    readTime: '4 min',
    category: 'Táticas',
  },
];

const DicasPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-petroleo">
      <Header />

      <main className="pt-32 pb-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
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
            className="mb-16 lg:mb-20"
          >
            <span className="label-caps text-amber/50 mb-6 block">Conteúdo</span>
            <h1 className="heading-xl text-off-white text-[clamp(2.5rem,6vw,5.5rem)] mb-6">
              Dicas para anunciar melhor
            </h1>
            <p className="text-off-white/40 text-lg font-body max-w-lg">
              Aprenda a tirar o máximo proveito das telas da Retoma e fazer seu anúncio gerar resultados.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {tips.map((tip, idx) => (
              <motion.article
                key={tip.id}
                id={tip.id.toString()}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 * idx, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="p-8 lg:p-10 rounded-2xl border border-white/[0.04] bg-white/[0.01] hover:border-white/[0.08] hover:bg-white/[0.02] transition-all duration-500 group"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="label-caps text-amber/30">{tip.category}</span>
                  <span className="text-off-white/20 text-xs font-body">{tip.readTime}</span>
                </div>

                <h2 className="font-display font-extrabold text-off-white uppercase tracking-wide text-base mb-4 group-hover:text-amber transition-colors duration-300">
                  {tip.title}
                </h2>

                <p className="text-off-white/35 font-body text-sm leading-relaxed mb-6">
                  {tip.excerpt}
                </p>

                <p className="text-off-white/25 font-body text-sm leading-relaxed">
                  {tip.content}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DicasPage;

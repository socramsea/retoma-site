import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TotemNoite, { poster, video } from '../components/TotemNoite';
import { DICAS, dataPorExtenso } from '../conteudo/dicas';
import { GRUPOS, PILOTO } from '../conteudo/segmentos';
import { img } from '../config';

const PASSOS = [
  { t: 'Cadastre a sua loja', d: 'Preencha o cadastro. A equipe Retoma libera o seu acesso ao portal.' },
  { t: 'Mande o material', d: 'Fotos do celular, logo, preço, prazo da oferta e onde fica a loja.' },
  { t: 'Aprove a prévia', d: 'A Retoma cria o vídeo. Você assiste no portal, pede ajuste ou aprova.' },
  { t: 'Acompanhe na tela', d: 'O anúncio entra nas telas combinadas e o portal mostra cada exibição.' },
];

const COMPROMISSOS = [
  { t: 'Nada vai ao ar sem a sua aprovação', d: 'Você vê a prévia no portal e decide.' },
  { t: 'Prova de cada exibição', d: 'Comprovante por anúncio, tela e dia. Exibição interrompida não conta.' },
  { t: 'Sai do ar quando você quiser', d: 'Pedido de retirada pelo portal.' },
  { t: 'Seus dados só para você', d: 'Login próprio. Nenhum outro cliente vê seus pedidos ou arquivos.' },
  { t: 'Custo de produção combinado antes', d: 'Nenhum gasto antes de você aprovar o orçamento.' },
  { t: 'Regras do seu ramo respeitadas', d: 'O sistema confere o texto do anúncio conforme o tipo de negócio.' },
];

const HomePage: React.FC = () => {
  const reduzir = useReducedMotion();
  const entra = (atraso: number) =>
    reduzir ? {} : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { delay: atraso, duration: 0.9, ease: [0.22, 1, 0.36, 1] as const } };

  return (
    <div className="min-h-screen bg-petroleo">
      <Header />
      <main>
        {/* Abertura: o totem aceso no corredor é a peça que vende */}
        <section className="relative overflow-hidden">
          <div className="bloco grid items-center gap-10 pb-16 pt-6 md:grid-cols-[1.05fr_.95fr] md:gap-6 md:pb-0 md:pt-0">
            <div className="md:py-24">
              <motion.h1 {...entra(0.05)} className="titulo text-[clamp(3.4rem,8.4vw,7.4rem)] text-off-white">
                Sua loja na tela da galeria
              </motion.h1>
              <motion.p {...entra(0.25)} className="mt-7 max-w-[34rem] font-body text-lg leading-relaxed text-off-white/85 md:text-xl">
                Mande a foto do produto, o preço e onde fica a sua loja. A Retoma transforma isso num anúncio em vídeo e coloca
                nas telas por onde os seus clientes já passam.
              </motion.p>
              <motion.div {...entra(0.4)} className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link to="/cadastro" className="btn-primario">Cadastrar minha loja <ArrowRight size={18} aria-hidden /></Link>
                <a href="#como-funciona" className="btn-secundario">Ver como funciona</a>
              </motion.div>
              <motion.p {...entra(0.55)} className="mt-8 font-body text-[15px] text-off-white/65">
                Telas verticais de 55 polegadas em galerias, shoppings e centros médicos do Rio de Janeiro.
              </motion.p>
            </div>
            <motion.div
              initial={reduzir ? false : { opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto w-full max-w-[460px] md:max-w-none"
            >
              <TotemNoite className="max-h-[78vh] md:max-h-[calc(100vh-7rem)] md:[mask-image:linear-gradient(to_right,transparent,black_14%)] [mask-image:linear-gradient(to_bottom,black_80%,transparent)] rounded-2xl md:rounded-none" />
            </motion.div>
          </div>
        </section>

        {/* Como funciona (fundo claro para dar ritmo à página) */}
        <section id="como-funciona" className="scroll-mt-4 bg-off-white text-petroleo">
          <div className="bloco py-20 md:py-28">
            <h2 className="titulo text-[clamp(2.8rem,6vw,5rem)]">Como funciona</h2>
            <p className="mt-5 max-w-[38rem] font-body text-lg text-tinta">
              Você cuida do que conhece: o seu produto e o seu preço. A produção do vídeo, a programação das telas e a prova de
              exibição ficam com a Retoma.
            </p>
            <ol className="mt-12 grid gap-10 border-t-[3px] border-petroleo pt-8 sm:grid-cols-2 lg:grid-cols-4">
              {PASSOS.map((p, i) => (
                <li key={p.t}>
                  <span className="font-display text-6xl font-extrabold leading-none text-amber [-webkit-text-stroke:1.5px_#0B1F26]">{i + 1}</span>
                  <h3 className="mt-4 font-body text-xl font-bold">{p.t}</h3>
                  <p className="mt-2 font-body text-tinta">{p.d}</p>
                </li>
              ))}
            </ol>

            {/* Anúncios de verdade, feitos pelo motor da Retoma */}
            <div className="mt-20 rounded-3xl bg-petroleo p-8 text-off-white md:p-12">
              <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
                <div>
                  <h3 className="titulo text-4xl md:text-5xl">Feito pelo motor da Retoma</h3>
                  <p className="mt-4 max-w-md font-body text-lg text-off-white/85">
                    Estes anúncios foram criados pelo próprio motor da Retoma, no formato da tela: vertical, 15 segundos,
                    sem som, mensagem curta e o nome da loja em destaque.
                  </p>
                  <p className="mt-4 font-body text-sm text-off-white/60">Anúncios de demonstração com empresas fictícias.</p>
                </div>
                <div className="grid grid-cols-3 gap-3 sm:gap-5">
                  {['moda-praia', 'coworking', 'otica'].map((n) => (
                    <div key={n} className="rounded-xl bg-black p-[5px] shadow-2xl ring-1 ring-white/10 sm:p-[7px]">
                      <video src={video(n)} poster={poster(n)} autoPlay={!reduzir} muted loop playsInline preload="metadata"
                        className="aspect-[9/16] w-full rounded-[6px] object-cover" aria-label="Anúncio de demonstração feito pelo motor da Retoma" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Onde aparece */}
        <section className="bloco py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-[.9fr_1.1fr] md:items-center">
            <div>
              <h2 className="titulo text-[clamp(2.8rem,6vw,5rem)]">Escolha onde aparecer</h2>
              <p className="mt-5 max-w-md font-body text-lg text-off-white/85">
                As telas ficam onde as pessoas passam ou esperam. Você combina em quais pontos o seu anúncio entra: o mais perto
                da sua loja, o mais movimentado, ou todos.
              </p>
              <ul className="mt-8 divide-y divide-white/10 border-y border-white/10 font-body text-lg">
                {['Térreo e entrada principal', 'Corredores das lojas', 'Hall dos elevadores', 'Recepção de centros médicos'].map((x) => (
                  <li key={x} className="flex items-center gap-3 py-3.5"><span className="h-2 w-2 rounded-full bg-verde-agua" aria-hidden />{x}</li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <figure>
                <img src={img('totem-corredor.webp')} alt="Totem Retoma no corredor de uma galeria" loading="lazy" width={720} height={1280} className="aspect-[9/14] w-full rounded-2xl object-cover object-top" />
                <figcaption className="mt-2 font-body text-off-white/75">Corredor das lojas</figcaption>
              </figure>
              <figure className="mt-12">
                <img src={img('totem-elevadores.webp')} alt="Totem Retoma no hall dos elevadores" loading="lazy" width={720} height={1280} className="aspect-[9/14] w-full rounded-2xl object-cover object-top" />
                <figcaption className="mt-2 font-body text-off-white/75">Hall dos elevadores</figcaption>
              </figure>
              <p className="col-span-2 font-body text-sm text-off-white/55">Imagens ilustrativas do totem Retoma.</p>
            </div>
          </div>
        </section>

        {/* Compromissos */}
        <section id="garantias" className="border-t border-white/10">
          <div className="bloco py-20 md:py-28">
            <h2 className="titulo max-w-3xl text-[clamp(2.8rem,6vw,5rem)]">O que você pode cobrar da Retoma</h2>
            <ul className="mt-12 grid gap-x-16 gap-y-8 md:grid-cols-2">
              {COMPROMISSOS.map((c) => (
                <li key={c.t} className="border-l-4 border-verde-agua pl-5">
                  <h3 className="font-body text-xl font-bold text-off-white">{c.t}</h3>
                  <p className="mt-1 font-body text-off-white/80">{c.d}</p>
                </li>
              ))}
            </ul>
            <p className="mt-12 max-w-2xl font-body text-off-white/65">Durante o lançamento, a equipe Retoma confere cada cadastro e cada anúncio antes de ir ao ar.</p>
          </div>
        </section>

        {/* Para quem é */}
        <section id="para-quem" className="scroll-mt-4 bg-off-white text-petroleo">
          <div className="bloco py-20 md:py-28">
            <h2 className="titulo text-[clamp(2.8rem,6vw,5rem)]">Para quem é</h2>
            <p className="mt-5 max-w-[38rem] font-body text-lg text-tinta">
              Para quem tem loja ou serviço dentro da galeria, do shopping ou do centro comercial e quer ser visto por
              quem já está no prédio.
            </p>
            <div className="mt-12 grid gap-12 lg:grid-cols-2">
              <div>
                <h3 className="font-body text-xl font-bold">Atendemos agora</h3>
                <p className="mt-2 font-body text-tinta">No lançamento, começamos por estes negócios.</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {PILOTO.map((s) => (
                    <li key={s.valor} className="rounded-full border-2 border-verde-agua bg-white px-4 py-2 font-body text-[15px]">{s.nome}</li>
                  ))}
                </ul>
                <p className="mt-4 font-body text-sm text-tinta">Moda, calçados e eletrônicos: por enquanto, produtos sem marca de outras empresas. Alimentação: sem bebidas alcoólicas.</p>
              </div>
              <div>
                <h3 className="font-body text-xl font-bold">Em breve</h3>
                <p className="mt-2 font-body text-tinta">Clínicas, consultórios e outros segmentos abrem nas próximas fases, com as regras de publicidade de cada conselho. Cadastre-se para entrar na lista de interesse.</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {GRUPOS[1].segmentos.map((s) => (
                    <li key={s.valor} className="rounded-full border border-petroleo/15 bg-white/60 px-4 py-2 font-body text-[15px] text-tinta">{s.nome}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Administradoras */}
        <section className="bloco py-20 md:py-24">
          <div className="grid gap-8 rounded-3xl bg-petroleo-light p-8 md:grid-cols-[1fr_auto] md:items-center md:p-12">
            <div>
              <h2 className="titulo text-4xl md:text-5xl">Para administradoras de galerias e shoppings</h2>
              <p className="mt-4 max-w-2xl font-body text-lg text-off-white/85">
                A galeria recebe espaço garantido nas telas para os próprios avisos e define as categorias que não podem ser
                anunciadas no seu espaço.
              </p>
            </div>
            <Link to="/cadastro?origem=administradora" className="btn-secundario">Falar com a Retoma</Link>
          </div>
        </section>

        {/* Dicas */}
        <section className="border-t border-white/10">
          <div className="bloco py-20 md:py-24">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="titulo text-[clamp(2.6rem,5vw,4.4rem)]">Dicas para anunciar melhor</h2>
              <Link to="/dicas" className="font-body text-lg text-amber underline underline-offset-4">Ver todas as dicas</Link>
            </div>
            <div className="mt-10 grid gap-10 md:grid-cols-3">
              {DICAS.slice(0, 3).map((d) => (
                <Link key={d.slug} to={`/dicas/${d.slug}`} className="group block">
                  <time dateTime={d.data} className="font-body text-sm text-off-white/60">{dataPorExtenso(d.data)}</time>
                  <h3 className="mt-2 font-body text-xl font-bold leading-snug text-off-white underline decoration-amber decoration-2 underline-offset-[6px] group-hover:text-amber">{d.titulo}</h3>
                  <p className="mt-3 font-body text-off-white/80">{d.resumo}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Chamada final */}
        <section className="bg-amber text-petroleo">
          <div className="bloco flex flex-col items-start justify-between gap-8 py-16 md:flex-row md:items-center">
            <h2 className="titulo max-w-2xl text-[clamp(2.6rem,5.4vw,4.6rem)]">Sua loja pode estar na tela da galeria</h2>
            <Link to="/cadastro" className="btn-primario !bg-petroleo !text-off-white">Cadastrar minha loja <ArrowRight size={18} aria-hidden /></Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;

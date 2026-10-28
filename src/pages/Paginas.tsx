import React from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { DICAS, NOVIDADES, dataPorExtenso } from '../conteudo/dicas';

const Moldura: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen bg-petroleo">
    <Header />
    <main className="bloco max-w-[760px] pb-24 pt-10">{children}</main>
    <Footer />
  </div>
);

/** **negrito** simples nos textos das dicas */
const Rico: React.FC<{ t: string }> = ({ t }) => (
  <>{t.split(/(\*\*[^*]+\*\*)/g).map((p, i) => (p.startsWith('**') ? <strong key={i} className="text-off-white">{p.slice(2, -2)}</strong> : p))}</>
);

export const CadastroEnviadoPage: React.FC = () => {
  const [q] = useSearchParams();
  return (
    <Moldura>
      <h1 className="titulo text-[clamp(3rem,7vw,5rem)]">Cadastro enviado</h1>
      <p role="status" className="mt-8 rounded-xl border-l-4 border-verde-agua bg-petroleo-light px-5 py-4 font-body text-lg text-off-white">
        {q.get('demo')
          ? 'Versão de avaliação: o formulário foi validado, mas nada foi enviado.'
          : 'Recebemos os seus dados. A equipe Retoma confere o cadastro e manda o seu acesso ao portal pelo WhatsApp informado.'}
      </p>
      <p className="mt-8 font-body text-lg text-off-white/85">
        Enquanto isso, veja <Link to="/dicas/como-fotografar-seu-produto" className="text-amber underline underline-offset-4">como fotografar o seu produto</Link> para o primeiro anúncio.
      </p>
    </Moldura>
  );
};

export const DicasPage: React.FC = () => (
  <Moldura>
    <h1 className="titulo text-[clamp(3rem,7vw,5rem)]">Dicas</h1>
    <p className="mt-5 font-body text-lg text-off-white/85">Como aproveitar melhor as telas da Retoma.</p>
    <div className="mt-12 space-y-12">
      {DICAS.map((d) => (
        <Link key={d.slug} to={`/dicas/${d.slug}`} className="group block">
          <time dateTime={d.data} className="font-body text-sm text-off-white/60">{dataPorExtenso(d.data)}</time>
          <h2 className="mt-2 font-body text-2xl font-bold leading-snug underline decoration-amber decoration-2 underline-offset-[6px] group-hover:text-amber">{d.titulo}</h2>
          <p className="mt-3 font-body text-lg text-off-white/80">{d.resumo}</p>
        </Link>
      ))}
    </div>
    <h2 className="titulo mt-20 text-4xl">Novidades no portal</h2>
    <ul className="mt-6 space-y-4 font-body text-off-white/85">
      {NOVIDADES.map((n) => (
        <li key={n.texto}><time dateTime={n.data} className="text-off-white/60">{dataPorExtenso(n.data)}</time> · {n.texto}</li>
      ))}
    </ul>
  </Moldura>
);

export const DicaPage: React.FC = () => {
  const { slug } = useParams();
  const d = DICAS.find((x) => x.slug === slug);
  if (!d) return <NaoEncontradaPage />;
  return (
    <Moldura>
      <Link to="/dicas" className="font-body text-off-white/75 underline underline-offset-4">Todas as dicas</Link>
      <article className="mt-8">
        <h1 className="titulo text-[clamp(2.6rem,6vw,4.2rem)]">{d.titulo}</h1>
        <time dateTime={d.data} className="mt-4 block font-body text-off-white/60">{dataPorExtenso(d.data)}</time>
        <div className="mt-8 space-y-5 font-body text-lg leading-relaxed text-off-white/85">
          {d.blocos.map((b, i) =>
            b.tipo === 'p' ? <p key={i}><Rico t={b.itens[0]} /></p>
              : b.tipo === 'ol' ? <ol key={i} className="list-decimal space-y-3 pl-6 marker:font-bold marker:text-amber">{b.itens.map((x) => <li key={x}><Rico t={x} /></li>)}</ol>
                : <ul key={i} className="list-disc space-y-3 pl-6 marker:text-amber">{b.itens.map((x) => <li key={x}><Rico t={x} /></li>)}</ul>,
          )}
        </div>
      </article>
      <Link to="/cadastro" className="btn-primario mt-14">Cadastrar minha loja</Link>
    </Moldura>
  );
};

export const NaoEncontradaPage: React.FC = () => (
  <Moldura>
    <h1 className="titulo text-[clamp(3rem,7vw,5rem)]">Página não encontrada</h1>
    <p className="mt-6 font-body text-lg text-off-white/85">O endereço pode ter mudado. <Link to="/" className="text-amber underline underline-offset-4">Voltar para o início</Link>.</p>
  </Moldura>
);

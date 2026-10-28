import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CadastroPage from './pages/CadastroPage';
import { CadastroEnviadoPage, DicaPage, DicasPage, NaoEncontradaPage } from './pages/Paginas';

/** Ao trocar de página, volta ao topo; com #âncora, rola até a seção. */
function Rolagem() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) { el.scrollIntoView(); return; }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <Rolagem />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cadastro" element={<CadastroPage />} />
        <Route path="/cadastro/enviado" element={<CadastroEnviadoPage />} />
        <Route path="/dicas" element={<DicasPage />} />
        <Route path="/dicas/:slug" element={<DicaPage />} />
        <Route path="*" element={<NaoEncontradaPage />} />
      </Routes>
    </BrowserRouter>
  );
}

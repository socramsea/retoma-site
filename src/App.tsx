import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CadastroPage from './pages/CadastroPage';
import DicasPage from './pages/DicasPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cadastro" element={<CadastroPage />} />
        <Route path="/dicas" element={<DicasPage />} />
      </Routes>
    </Router>
  );
}

export default App;

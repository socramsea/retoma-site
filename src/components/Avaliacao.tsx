import React from 'react';
import { AVALIACAO } from '../config';

const Avaliacao: React.FC = () =>
  AVALIACAO ? (
    <div className="bg-amber px-4 py-1.5 text-center font-body text-sm font-bold text-petroleo">
      Versão de avaliação · o cadastro ainda não é enviado
    </div>
  ) : null;

export default Avaliacao;

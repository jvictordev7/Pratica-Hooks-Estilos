import { useState } from 'react';

export default function BotaoDinamico() {
  const [clicado, setClicado] = useState(false);

  const estiloBotao = {
    backgroundColor: clicado ? '#10B981' : '#3B82F6',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'filter .2s',
  };

  return (
    <button
      style={estiloBotao}
      onClick={() => setClicado((v) => !v)}
      onMouseDown={(e) => (e.currentTarget.style.filter = 'brightness(0.9)')}
      onMouseUp={(e) => (e.currentTarget.style.filter = 'none')}
    >
      {clicado ? 'Ativado!' : 'Clique Aqui'}
    </button>
  );
}

import { useEffect, useState } from 'react';

export default function UseEffectDemo() {
  const [count, setCount] = useState(0);
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    console.log('🚀 EFEITO EXECUTADO: O contador mudou para', count);
    document.title = `Cliques: ${count}`;

    if (count > 0) {
      setMensagem('Contador atualizado com sucesso!');
      const timer = setTimeout(() => setMensagem(''), 2000);
      return () => {
        console.log('🧹 LIMPANDO O TIMER ANTERIOR');
        clearTimeout(timer);
      };
    }
  }, [count]);

  console.log('🎨 COMPONENTE RENDERIZADO');

  return (
    <div style={{ marginTop: 16, color: '#333' }}>
      <p style={{ color: '#333', fontSize: '16px' }}>Você clicou {count} vezes</p>
      <button 
        onClick={() => setCount((c) => c + 1)}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          fontSize: '14px',
          fontWeight: '500'
        }}
      >
        Clique aqui
      </button>
      {mensagem && <p style={{ color: 'green', marginTop: 10, fontSize: '14px' }}>{mensagem}</p>}
    </div>
  );
}

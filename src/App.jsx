import { useState } from 'react';
import './index.css';
import BotaoDinamico from './components/BotaoDinamico.jsx';
import Alerta from './components/Alerta.jsx';
import CardProduto from './components/CardProduto.jsx';
import UseEffectDemo from './components/UseEffectDemo.jsx';
import Interruptor from './components/Interruptor.jsx';
import CardProdutoMUI from './components/CardProdutoMUI.jsx';

export default function App() {
  const [atividadeAtual, setAtividadeAtual] = useState(1);

  const atividades = [
    {
      id: 1,
      titulo: "Atividade 1: Botão com Estilo Dinâmico",
      componente: <BotaoDinamico />
    },
    {
      id: 2,
      titulo: "Atividade 2: Alertas com CSS Modules",
      componente: (
        <>
          <Alerta type="sucesso" message="Operação realizada com sucesso!" />
          <Alerta type="erro" message="Falha ao processar a requisição." />
        </>
      )
    },
    {
      id: 3,
      titulo: "Atividade 3: Styled Components",
      componente: <CardProduto nome="Café Especial" preco="45,00" />
    },
    {
      id: 4,
      titulo: "Atividade 4: useEffect em Ação",
      componente: <UseEffectDemo />
    },
    {
      id: 5,
      titulo: "Atividade 5: Hook Personalizado",
      componente: <Interruptor />
    },
    {
      id: 6,
      titulo: "Atividade 6 (Desafio): Card com Material-UI",
      componente: (
        <CardProdutoMUI
          imagem="../../public/tila.png"
          nome="Café Torrado Premium"
          descricao="Notas de chocolate e caramelo. Corpo médio."
          preco="59,90"
          onComprar={() => alert('Compra iniciada!')}
        />
      )
    }
  ];

  const atividadeSelecionada = atividades.find(atividade => atividade.id === atividadeAtual);

  const estiloContainer = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: window.innerWidth <= 768 ? '10px' : '20px',
    width: '100%'
  };

  const estiloNavegacao = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: window.innerWidth <= 768 ? '8px' : '10px',
    marginBottom: window.innerWidth <= 768 ? '20px' : '30px',
    padding: window.innerWidth <= 768 ? '15px' : '20px',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    border: '1px solid #dee2e6',
    justifyContent: 'center'
  };

  const estiloBotao = (isAtivo) => ({
    padding: window.innerWidth <= 768 ? '8px 12px' : '10px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: window.innerWidth <= 768 ? '12px' : '14px',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    backgroundColor: isAtivo ? '#007bff' : '#6c757d',
    color: 'white',
    boxShadow: isAtivo ? '0 2px 4px rgba(0,123,255,0.3)' : '0 1px 2px rgba(0,0,0,0.1)',
    minWidth: window.innerWidth <= 768 ? '120px' : 'auto',
    textAlign: 'center'
  });

  const estiloConteudo = {
    minHeight: window.innerWidth <= 768 ? '300px' : '400px',
    padding: window.innerWidth <= 768 ? '15px' : '30px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    border: '1px solid #dee2e6',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    overflow: 'auto'
  };

  const estiloTitulo = {
    color: '#333',
    marginBottom: window.innerWidth <= 768 ? '15px' : '20px',
    borderBottom: '2px solid #007bff',
    paddingBottom: '10px',
    textAlign: 'center',
    fontSize: window.innerWidth <= 768 ? '18px' : '24px'
  };

  return (
    <div style={estiloContainer}>
      <h1 style={{ 
        textAlign: 'center', 
        color: '#333', 
        marginBottom: window.innerWidth <= 768 ? '20px' : '30px',
        fontSize: window.innerWidth <= 768 ? '24px' : '32px'
      }}>
        Aula Prática - Ciclo 4
      </h1>

      <nav style={estiloNavegacao}>
        {atividades.map((atividade) => (
          <button
            key={atividade.id}
            style={estiloBotao(atividade.id === atividadeAtual)}
            onClick={() => setAtividadeAtual(atividade.id)}
            onMouseEnter={(e) => {
              if (atividade.id !== atividadeAtual) {
                e.target.style.backgroundColor = '#5a6268';
                e.target.style.transform = 'translateY(-1px)';
              }
            }}
            onMouseLeave={(e) => {
              if (atividade.id !== atividadeAtual) {
                e.target.style.backgroundColor = '#6c757d';
                e.target.style.transform = 'translateY(0)';
              }
            }}
          >
            Mostrar Atividade {atividade.id}
          </button>
        ))}
      </nav>

      <main style={estiloConteudo}>
        <h2 style={estiloTitulo}>{atividadeSelecionada.titulo}</h2>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          minHeight: window.innerWidth <= 768 ? '200px' : '300px',
          flexDirection: 'column',
          gap: window.innerWidth <= 768 ? '15px' : '20px'
        }}>
          {atividadeSelecionada.componente}
        </div>
      </main>
    </div>
  );
}

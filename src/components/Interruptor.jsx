import { useToggle } from '../hooks/useToggle';

export default function Interruptor() {
  const [ligado, toggleLuz] = useToggle(false);

  return (
    <div style={{ marginTop: 16, color: '#333' }}>
      <p style={{ color: '#333', fontSize: '16px', marginBottom: '15px' }}>
        A luz está: {ligado ? 'Ligada 💡' : 'Desligada 🌑'}
      </p>
      <button 
        onClick={toggleLuz}
        style={{
          padding: '10px 20px',
          backgroundColor: ligado ? '#28a745' : '#dc3545',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          fontSize: '14px',
          fontWeight: '500',
          transition: 'background-color 0.3s ease'
        }}
      >
        Alternar Luz
      </button>
    </div>
  );
}

import styles from './Alerta.module.css';

export default function Alerta({ type = 'sucesso', message = '' }) {
  const tipoClasse = type === 'sucesso' ? styles.sucesso : styles.erro;
  return <div className={`${styles.alertaCard} ${tipoClasse}`}>{message}</div>;
}

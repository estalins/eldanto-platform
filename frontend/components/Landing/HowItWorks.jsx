import styles from '../../styles/landing.module.css';

export default function HowItWorks() {
  return (
    <section className={styles.howitworks}>
      <h2>¿Cómo funciona?</h2>
      <ol>
        <li>Regístrate gratis en menos de 1 minuto.</li>
        <li>Detecta automáticamente tu ubicación.</li>
        <li>Explora ofertas cercanas según tus preferencias.</li>
        <li>Expande tu radio de búsqueda o filtra por categorías.</li>
        <li>Reserva, compra o comparte las mejores ofertas.</li>
      </ol>
    </section>
  );
}
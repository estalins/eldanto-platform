import styles from '../../styles/landing.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <h1>Descubre ofertas cerca de ti</h1>
      <p>Las mejores promociones geolocalizadas en tu ciudad.</p>
      <button onClick={() => window.location.href='/register'} className={styles.cta}>
        ¡Regístrate Gratis!
      </button>
    </section>
  );
}
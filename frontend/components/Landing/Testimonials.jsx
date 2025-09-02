import styles from '../../styles/landing.module.css';

const testimonials = [
  { user: "Marta G.", text: "¡Encontré ofertas increíbles cerca de mi casa!" },
  { user: "Carlos R.", text: "La app recomendó justo lo que me gusta. Muy útil." },
  { user: "Lucía P.", text: "Me encantan las ofertas premium, ¡son reales y cercanas!" }
];

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <h2>Testimonios de Usuarios</h2>
      <div className={styles.testiList}>
        {testimonials.map((t, i) => (
          <div key={i} className={styles.testiCard}>
            <p>"{t.text}"</p>
            <span>- {t.user}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
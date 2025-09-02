import styles from '../../styles/landing.module.css';

const categories = [
  { name: "Restaurantes", icon: "🍔" },
  { name: "Belleza", icon: "💇‍♂️" },
  { name: "Moda", icon: "👗" },
  { name: "Tecnología", icon: "💻" },
  { name: "Deporte", icon: "🏋️" }
];

export default function Categories() {
  return (
    <section className={styles.categories}>
      <h2>Categorías Populares</h2>
      <div className={styles.catList}>
        {categories.map((cat, i) => (
          <div key={i} className={styles.catCard}>
            <span className={styles.icon}>{cat.icon}</span>
            <span>{cat.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
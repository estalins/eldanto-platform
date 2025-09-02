import styles from '../../styles/landing.module.css';

// Simulación de ofertas destacadas
const offers = [
  { title: "2x1 en pizzas", description: "Solo hoy en PizzaNaranja", price: "8€", category: "Restaurantes" },
  { title: "Descuento 40% en peluquería", description: "Cerca de ti", price: "12€", category: "Belleza" },
  { title: "Zapatos deportivos -30%", description: "Tienda local", price: "25€", category: "Moda" },
];

export default function FeaturedOffers() {
  return (
    <section className={styles.featured}>
      <h2>Ofertas Destacadas</h2>
      <div className={styles.offers}>
        {offers.map((offer, i) => (
          <div key={i} className={styles.offerCard}>
            <h3>{offer.title}</h3>
            <p>{offer.description}</p>
            <span className={styles.price}>{offer.price}</span>
            <span className={styles.category}>{offer.category}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
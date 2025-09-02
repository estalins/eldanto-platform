export default function RecommendedOffers({ offers, history }) {
  // Simulación simple de recomendación por historial (categoría)
  const lastCats = [...new Set(history.map(o => o.category))];
  const recommended = offers.filter(o => lastCats.includes(o.category));
  return (
    <div>
      <h4>Ofertas Recomendadas</h4>
      <ul>
        {recommended.map(o => (
          <li key={o._id}>
            <b>{o.title}</b> - {o.priceOffer}€
          </li>
        ))}
      </ul>
    </div>
  );
}
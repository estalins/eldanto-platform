export default function PremiumOffers({ offers }) {
  const premium = offers.filter(o => o.isPremium);
  return (
    <div>
      <h4>Ofertas Premium</h4>
      <ul>
        {premium.map(o => (
          <li key={o._id}>
            <b>{o.title}</b> - {o.priceOffer}€
          </li>
        ))}
      </ul>
    </div>
  );
}
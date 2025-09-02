export default function OfferStats({ offers }) {
  return (
    <div>
      <h3>Estadísticas por oferta</h3>
      <ul>
        {offers.map(o => (
          <li key={o._id}>
            <b>{o.title}</b>: {o.stats.views} vistas / {o.stats.conversions} conversiones
          </li>
        ))}
      </ul>
    </div>
  );
}
export default function MostViewed({ offers }) {
  const sorted = offers.slice().sort((a, b) => b.stats.views - a.stats.views).slice(0, 5);
  return (
    <div>
      <h4>Más vistas en tu zona</h4>
      <ul>
        {sorted.map(o => (
          <li key={o._id}>
            <b>{o.title}</b> - {o.stats.views} vistas
          </li>
        ))}
      </ul>
    </div>
  );
}
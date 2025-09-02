import { useEffect, useState } from "react";
import axios from "axios";

export default function OffersNearby() {
  const [offers, setOffers] = useState([]);
  const [location, setLocation] = useState(null);
  const [radius, setRadius] = useState(5);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        setLocation({ longitude: pos.coords.longitude, latitude: pos.coords.latitude });
      });
    }
  }, []);

  useEffect(() => {
    if (location) {
      axios.get(`${process.env.NEXT_PUBLIC_API_URL}/offers/nearby`, {
        params: { ...location, radius }
      }).then(res => setOffers(res.data));
    }
  }, [location, radius]);

  return (
    <div>
      <h3>Ofertas cerca de ti</h3>
      <label>
        Radio: 
        <select value={radius} onChange={e => setRadius(Number(e.target.value))}>
          <option value={5}>5km</option>
          <option value={10}>10km</option>
          <option value={20}>20km</option>
          <option value={50}>50km</option>
        </select>
      </label>
      <ul>
        {offers.map(o => (
          <li key={o._id}>
            <b>{o.title}</b> - {o.priceOffer}€
            <span> ({o.category})</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
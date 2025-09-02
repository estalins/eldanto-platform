import { useEffect, useState } from "react";
import axios from "axios";

export default function OfferModeration() {
  const [offers, setOffers] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/admin/offers`, {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setOffers(res.data));
  }, []);
  return (
    <div>
      <h3>Moderación de Ofertas</h3>
      <ul>
        {offers.map(o => (
          <li key={o._id}>
            {o.title} - Estado: {o.approved ? "Aprobada" : "Pendiente"}
          </li>
        ))}
      </ul>
    </div>
  );
}
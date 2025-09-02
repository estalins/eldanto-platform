import { useEffect, useState } from "react";
import axios from "axios";

export default function StoreDashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/stores/dashboard`, {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setData(res.data));
  }, []);

  if (!data) return <div>Cargando...</div>;
  return (
    <div>
      <h2>Panel de Tienda</h2>
      <p>Ofertas creadas: {data.stats.totalOffers}</p>
      <p>Vistas totales: {data.stats.totalViews}</p>
      <p>Conversiones totales: {data.stats.totalConversions}</p>
    </div>
  );
}
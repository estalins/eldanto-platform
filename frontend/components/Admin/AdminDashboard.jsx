import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminDashboard() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/admin/dashboard`, {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setStats(res.data));
  }, []);

  if (!stats) return <div>Cargando...</div>;
  return (
    <div>
      <h2>Panel de Administración</h2>
      <p>Usuarios registrados: {stats.totalUsers}</p>
      <p>Tiendas registradas: {stats.totalStores}</p>
      <p>Ofertas totales: {stats.totalOffers}</p>
      <p>Ofertas activas: {stats.activeOffers}</p>
    </div>
  );
}
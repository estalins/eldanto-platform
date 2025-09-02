import { useState, useEffect } from 'react';
import axios from 'axios';

export default function StoreDashboard() {
  const [store, setStore] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) window.location.href = '/login';
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/stores/dashboard`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => setStore(res.data))
      .catch(() => window.location.href = '/login');
  }, []);

  if (!store) return <div>Cargando...</div>;
  return (
    <div>
      <h2>Panel de Tienda</h2>
      <p>Ofertas creadas: {store.stats.totalOffers}</p>
      <p>Vistas totales: {store.stats.totalViews}</p>
      <p>Conversiones totales: {store.stats.totalConversions}</p>
      {/* Aquí puedes agregar la gestión de ofertas */}
    </div>
  );
}
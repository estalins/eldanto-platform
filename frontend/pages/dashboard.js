import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) window.location.href = '/login';
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/profile`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => setProfile(res.data))
      .catch(() => window.location.href = '/login');
  }, []);

  if (!profile) return <div>Cargando...</div>;

  return (
    <div>
      <h2>Bienvenido, {profile.name}</h2>
      <p>Email: {profile.email}</p>
      <p>Radio de búsqueda: {profile.preferences?.radius || 5} km</p>
      <h3>Historial de ofertas vistas:</h3>
      <ul>
        {profile.history.map(o => <li key={o._id}>{o.title}</li>)}
      </ul>
      {/* Aquí puedes agregar componentes para filtrar, mostrar ofertas cercanas, etc. */}
    </div>
  );
}
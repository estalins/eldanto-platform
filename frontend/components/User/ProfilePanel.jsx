import { useEffect, useState } from "react";
import axios from "axios";

export default function ProfilePanel() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/profile`, {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setProfile(res.data));
  }, []);

  if (!profile) return <div>Cargando...</div>;

  return (
    <div>
      <h2>Mi Perfil</h2>
      <p>Nombre: {profile.name}</p>
      <p>Email: {profile.email}</p>
      <p>Radio búsqueda: {profile.preferences?.radius || 5} km</p>
      <h3>Categorías favoritas:</h3>
      <ul>
        {profile.preferences?.categories?.map((cat, i) => <li key={i}>{cat}</li>)}
      </ul>
    </div>
  );
}
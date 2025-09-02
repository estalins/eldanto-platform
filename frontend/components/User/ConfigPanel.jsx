import { useState } from "react";
import axios from "axios";

export default function ConfigPanel({ profile, setProfile }) {
  const [radius, setRadius] = useState(profile.preferences?.radius || 5);
  const [categories, setCategories] = useState(profile.preferences?.categories || []);
  const [push, setPush] = useState(profile.notificationSettings?.push || true);

  const saveConfig = async () => {
    const token = localStorage.getItem("token");
    await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/users/preferences`,
      { preferences: { radius, categories }, notificationSettings: { push } },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setProfile({ ...profile, preferences: { radius, categories }, notificationSettings: { push } });
    alert("Configuración guardada");
  };

  return (
    <div>
      <h4>Configuración</h4>
      <label>
        Radio de búsqueda:
        <select value={radius} onChange={e => setRadius(Number(e.target.value))}>
          <option value={5}>5km</option>
          <option value={10}>10km</option>
          <option value={20}>20km</option>
          <option value={50}>50km</option>
        </select>
      </label>
      <label>
        Notificaciones push:
        <input type="checkbox" checked={push} onChange={e => setPush(e.target.checked)} />
      </label>
      <button onClick={saveConfig}>Guardar preferencias</button>
    </div>
  );
}
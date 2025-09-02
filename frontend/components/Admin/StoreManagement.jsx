import { useEffect, useState } from "react";
import axios from "axios";

export default function StoreManagement() {
  const [stores, setStores] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/admin/stores`, {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setStores(res.data));
  }, []);
  return (
    <div>
      <h3>Gestión de Tiendas</h3>
      <ul>
        {stores.map(s => (
          <li key={s._id}>{s.name} - {s.email} - Estado: {s.approved ? "Aprobada" : "Pendiente"}</li>
        ))}
      </ul>
    </div>
  );
}
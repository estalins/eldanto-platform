import { useEffect, useState } from "react";
import axios from "axios";

export default function UserManagement() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/admin/users`, {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setUsers(res.data));
  }, []);
  return (
    <div>
      <h3>Gestión de Usuarios</h3>
      <ul>
        {users.map(u => (
          <li key={u._id}>{u.name} - {u.email}</li>
        ))}
      </ul>
    </div>
  );
}
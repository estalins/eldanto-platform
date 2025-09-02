import { useState } from 'react';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const [error, setError] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const path = role === 'user' ? '/auth/login' : '/auth/store/login';
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}${path}`,
        { email, password }
      );
      // Guarda el token en localStorage y redirige
      localStorage.setItem('token', data.token);
      window.location.href = role === 'user' ? '/dashboard' : '/store';
    } catch (err) {
      setError(err.response?.data?.error || 'Error al ingresar');
    }
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <select value={role} onChange={e => setRole(e.target.value)}>
          <option value="user">Usuario</option>
          <option value="store">Tienda/Negocio</option>
        </select>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="password" placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)} required />
        <button type="submit">Ingresar</button>
        {error && <div style={{color: 'red'}}>{error}</div>}
      </form>
    </div>
  );
}
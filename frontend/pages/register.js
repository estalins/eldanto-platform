import { useState } from 'react';
import axios from 'axios';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [location, setLocation] = useState(null);

  // Detección de geolocalización
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        setLocation({
          type: 'Point',
          coordinates: [pos.coords.longitude, pos.coords.latitude]
        });
      });
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const path = role === 'user' ? '/auth/register' : '/auth/store/register';
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}${path}`,
        { name, email, password, location }
      );
      setSuccess('¡Registro exitoso! Ahora puedes ingresar.');
      setError('');
    } catch (err) {
      setError(err.response?.data?.error || 'Error al registrar');
      setSuccess('');
    }
  };

  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <select value={role} onChange={e => setRole(e.target.value)}>
          <option value="user">Usuario</option>
          <option value="store">Tienda/Negocio</option>
        </select>
        <input type="text" placeholder="Nombre" value={name} onChange={e => setName(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="password" placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)} required />
        <button type="button" onClick={getLocation}>Detectar Ubicación</button>
        {location && <span>Ubicación detectada ✔</span>}
        <button type="submit">Registrarse</button>
        {error && <div style={{color: 'red'}}>{error}</div>}
        {success && <div style={{color: 'green'}}>{success}</div>}
      </form>
    </div>
  );
}
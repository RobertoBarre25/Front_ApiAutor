import './BuscarPorIdCard.css';
import { useState } from 'react';

const API_BASE = import.meta.env.MODE === 'development'
  ? '/api/Autor' // usa proxy en desarrollo
  : 'https://www.robpostgress.somee.com/api/Autor'; // usa backend real en producción

const BuscarPorIdCard = ({ setResultado }) => {
  const [id, setId] = useState('');

  const buscar = async () => {
    if (!id.trim()) return;
    try {
      const res = await fetch(`${API_BASE}/${id}`);
      if (!res.ok) throw new Error();
      const data = await res.json();
      setResultado(data);
    } catch {
      alert('No se encontró el autor con ese GUID');
      setResultado(null);
    }
  };

  return (
    <>
      <h2>Buscar por ID (GUID)</h2>
      <div className="buscar-id">
        <input
          type="text" // <-- antes era type="number"
          placeholder="GUID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <button onClick={buscar}>Buscar</button>
      </div>
    </>
  );
};

export default BuscarPorIdCard;

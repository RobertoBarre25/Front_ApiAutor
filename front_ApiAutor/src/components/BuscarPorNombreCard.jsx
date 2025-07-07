import './BuscarPorNombreCard.css';
import { useState } from 'react';

const BuscarPorNombreCard = ({ setResultados }) => {
  const [nombre, setNombre] = useState('');

  const buscar = async () => {
    if (!nombre) return;
    try {
      const res = await fetch(`/api/api/Autor/buscar?nombre=${nombre}`);
      if (!res.ok) throw new Error();
      const data = await res.json();
      setResultados(data);
    } catch {
      alert('No se encontraron autores con ese nombre');
      setResultados([]);
    }
  };

  return (
    <>
      <h2>Buscar por Nombre</h2>
      <div className="buscar-nombre">
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <button onClick={buscar}>Buscar</button>
      </div>
    </>
  );
};

export default BuscarPorNombreCard;

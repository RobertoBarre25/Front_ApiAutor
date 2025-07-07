import './CrearAutorCard.css';
import { useState } from 'react';
const API_BASE = import.meta.env.VITE_API_BASE;

const CrearAutorCard = ({ onCreated }) => {
  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    fechaNacimiento: '',
  });

  const crear = async () => {
    const res = await fetch(`${API_BASE}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert('Autor creado con éxito');
      setForm({ nombre: '', apellido: '', fechaNacimiento: '' });
      onCreated(); // refrescar tabla
    } else {
      alert('Error al crear autor');
    }
  };

  return (
    <>
      <h2>Crear Nuevo Autor</h2>
      <div className="crear-form">
        <input
          type="text"
          placeholder="Nombre"
          value={form.nombre}
          onChange={(e) => setForm({ ...form, nombre: e.target.value })}
        />
        <input
          type="text"
          placeholder="Apellido"
          value={form.apellido}
          onChange={(e) => setForm({ ...form, apellido: e.target.value })}
        />
        <input
          type="datetime-local"
          value={form.fechaNacimiento}
          onChange={(e) => setForm({ ...form, fechaNacimiento: e.target.value })}
        />
        <button onClick={crear}>Crear Autor</button>
      </div>
    </>
  );
};

export default CrearAutorCard;

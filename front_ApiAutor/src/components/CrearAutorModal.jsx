// CrearAutorModal.jsx
import './CrearAutorModal.css';
import { useState } from 'react';

const API_BASE = import.meta.env.MODE === 'development'
  ? '/api/Autor'
  : 'https://www.robpostgress.somee.com/api/Autor';

const CrearAutorModal = ({ onClose, onCreated }) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');

  const crear = async () => {
    if (!nombre || !apellido || !fechaNacimiento) {
      alert('Completa todos los campos');
      return;
    }

    const fechaISO = new Date(fechaNacimiento).toISOString();

    const nuevo = {
      Nombre: nombre,
      Apellido: apellido,
      FechaNacimiento: fechaISO,
    };

    try {
      const res = await fetch(API_BASE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nuevo),
      });

      if (res.ok) {
        onCreated();
        onClose();
      } else {
        const error = await res.text();
        console.error('Error al crear autor:', error);
        alert('Error al crear autor: ' + error);
      }
    } catch (err) {
      console.error('Error de red:', err);
      alert('Error en la petición');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-flotante">
        <h3>Crear Nuevo Autor</h3>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={e => setNombre(e.target.value)}
        />
        <input
          type="text"
          placeholder="Apellido"
          value={apellido}
          onChange={e => setApellido(e.target.value)}
        />
        <input
          type="date"
          value={fechaNacimiento}
          onChange={e => setFechaNacimiento(e.target.value)}
        />

        <div className="modal-buttons">
          <button onClick={crear}>Crear</button>
          <button onClick={onClose}>Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default CrearAutorModal;

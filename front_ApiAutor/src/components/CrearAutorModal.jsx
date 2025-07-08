import './CrearAutorModal.css';
import { useState } from 'react';
const API_BASE = '/api/Autor';

const CrearAutorModal = ({ onClose, onCreated }) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');

  const crear = async () => {
    if (!nombre || !apellido || !fechaNacimiento) {
      alert('Completa todos los campos');
      return;
    }

    const nuevo = {
      nombre,
      apellido,
      fechaNacimiento
    };

    try {
      const res = await fetch(`${API_BASE}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nuevo),
      });
      if (res.ok) {
        onCreated();
        onClose();
      } else {
        alert('Error al crear autor');
      }
    } catch (err) {
      console.error(err);
      alert('Error en la petición');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Crear Nuevo Autor</h2>
        <input type="text" placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} />
        <input type="text" placeholder="Apellido" value={apellido} onChange={e => setApellido(e.target.value)} />
        <input type="datetime-local" value={fechaNacimiento} onChange={e => setFechaNacimiento(e.target.value)} />

        <div className="modal-buttons">
          <button onClick={crear} className="btn-crear">Crear</button>
          <button onClick={onClose} className="btn-cancelar">Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default CrearAutorModal;

import { useState } from 'react';

const API_BASE = 'http://www.robpostgress.somee.com/api/Autor';
const ModalEditarAutor = ({ autor, onCerrar, onActualizado }) => {
  const [form, setForm] = useState({
    nombre: autor.nombre,
    apellido: autor.apellido,
    // Convertimos fecha a formato compatible datetime-local yyyy-MM-ddTHH:mm
    fechaNacimiento: autor.fechaNacimiento
      ? new Date(autor.fechaNacimiento).toISOString().slice(0, 16)
      : '',
  });

  const guardarCambios = async () => {
    const payload = {
      autorGuid: autor.autorLibroGuid,
      nombre: form.nombre,
      apellido: form.apellido,
      fechaNacimiento: new Date(form.fechaNacimiento).toISOString(),
    };

    const res = await fetch(
      `http://www.robpostgress.somee.com/api/Autor/${autor.autorLibroGuid}`,
      {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }
    );

    if (res.ok) {
      alert('Autor actualizado con éxito');
      // Recarga la página para que se reflejen los cambios
      window.location.reload();
      // Opcional: llamar funciones pasadas aunque se recarga toda la página
      if (onActualizado) onActualizado();
      if (onCerrar) onCerrar();
    } else {
      alert('Error al actualizar autor');
    }
  };

    return (
    <>
      <h3>Editar Autor</h3>
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
      <div className="modal-buttons">
        <button onClick={guardarCambios}>Guardar</button>
        <button onClick={onCerrar}>Cancelar</button>
      </div>
    </>
  );

};

export default ModalEditarAutor;

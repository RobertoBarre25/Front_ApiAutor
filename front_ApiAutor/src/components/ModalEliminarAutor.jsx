const ModalEliminarAutor = ({ autor, onCerrar, onEliminado }) => {
  const eliminarAutor = async () => {
    const res = await fetch(
      `https://tienda-microservicios-autor-api.onrender.com/api/Autor/${autor.autorLibroGuid}`,
      { method: 'DELETE' }
    );

    if (res.ok) {
      alert('Autor eliminado con éxito');
      // Recarga la página para refrescar la tabla
      window.location.reload();
      // Opcional: si quieres llamar estas funciones igual, aunque se recarga todo
      if (onEliminado) onEliminado();
      if (onCerrar) onCerrar();
    } else {
      alert('Error al eliminar autor');
    }
  };

  return (
    <>
      <h3>Eliminar Autor</h3>
      <p>
        ¿Seguro que quieres eliminar a{' '}
        <strong>{autor.nombre} {autor.apellido}</strong>?
      </p>
      <div className="modal-buttons">
        <button onClick={eliminarAutor}>Sí, eliminar</button>
        <button onClick={onCerrar}>Cancelar</button>
      </div>
    </>
  );
};

export default ModalEliminarAutor;

import { useState } from "react";
import ModalEditarAutor from "./ModalEditarAutor";
import ModalEliminarAutor from "./ModalEliminarAutor";
import "./AutorTable.css";
import "./Modal.css";  // Importa tu CSS de modal aquí

import { FaEdit, FaTrashAlt } from "react-icons/fa";

const API_BASE = 'http://www.robpostgress.somee.com/api/Autor';
const AutorTable = ({ autores, onRefrescar }) => {
  const [autorSeleccionado, setAutorSeleccionado] = useState(null);
  const [modalEditarAbierto, setModalEditarAbierto] = useState(false);
  const [modalEliminarAbierto, setModalEliminarAbierto] = useState(false);

  const abrirModalEditar = (autor) => {
    setAutorSeleccionado(autor);
    setModalEditarAbierto(true);
  };

  const abrirModalEliminar = (autor) => {
    setAutorSeleccionado(autor);
    setModalEliminarAbierto(true);
  };

  const cerrarModales = () => {
    setAutorSeleccionado(null);
    setModalEditarAbierto(false);
    setModalEliminarAbierto(false);
  };

  return (
    <>
      <table className="autor-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Fecha de Nacimiento</th>
            <th>GUID</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {autores.map((autor) => (
            <tr key={autor.autorLibroGuid}>
              <td>{autor.nombre}</td>
              <td>{autor.apellido}</td>
              <td>{new Date(autor.fechaNacimiento).toLocaleString()}</td>
              <td>{autor.autorLibroGuid}</td>
              <td>
                <div className="botones-acciones">
                  <button
                    className="btn-editar"
                    onClick={() => abrirModalEditar(autor)}
                    title="Editar autor"
                  >
                    <FaEdit />
                    Editar
                  </button>

                  <button
                    className="btn-eliminar"
                    onClick={() => abrirModalEliminar(autor)}
                    title="Eliminar autor"
                  >
                    <FaTrashAlt />
                    Eliminar
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

       {/* Modal Editar - Ahora posicionado absolutamente */}
      {modalEditarAbierto && autorSeleccionado && (
        <div className="modal-overlay" onClick={cerrarModales}>
          <div
            className="modal-flotante"
            onClick={(e) => e.stopPropagation()}
          >
            <ModalEditarAutor
              autor={autorSeleccionado}
              onCerrar={cerrarModales}
              onActualizado={onRefrescar}
            />
          </div>
        </div>
      )}

      {/* Modal Eliminar - Ahora posicionado absolutamente */}
      {modalEliminarAbierto && autorSeleccionado && (
        <div className="modal-overlay" onClick={cerrarModales}>
          <div
            className="modal-flotante"
            onClick={(e) => e.stopPropagation()}
          >
            <ModalEliminarAutor
              autor={autorSeleccionado}
              onCerrar={cerrarModales}
              onEliminado={onRefrescar}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default AutorTable;

import './Home.css';
import { useEffect, useState } from 'react';
import AutorTable from '../components/AutorTable';
import BuscarPorIdCard from '../components/BuscarPorIdCard';
import BuscarPorNombreCard from '../components/BuscarPorNombreCard';
import CrearAutorModal from '../components/CrearAutorModal'; // Asegúrate de que la ruta esté correcta

const API_BASE = import.meta.env.VITE_API_BASE;

export default function Home() {
  const [autores, setAutores] = useState([]);
  const [resultadoPorId, setResultadoPorId] = useState(null);
  const [resultadosPorNombre, setResultadosPorNombre] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false); // <- controla visibilidad del modal

  const fetchAll = async () => {
    try {
      const res = await fetch(API_BASE);
      const data = await res.json();
      setAutores(data);
    } catch (err) {
      console.error('Error al obtener autores:', err);
    }
  };

  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <div className="container">
      <div className="section">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2>Autores Registrados</h2>
          <button onClick={() => setMostrarModal(true)} className="btn-agregar">Agregar Autor</button>
        </div>
        <AutorTable autores={autores} />
      </div>

      <div className="cards-grid">
        <div className="card-section">
          <BuscarPorIdCard setResultado={setResultadoPorId} />
          {resultadoPorId && (
            <div className="subresult">
              <h3>Resultado por ID</h3>
              <AutorTable autores={[resultadoPorId]} />
            </div>
          )}
        </div>

        <div className="card-section">
          <BuscarPorNombreCard setResultados={setResultadosPorNombre} />
          {resultadosPorNombre.length > 0 && (
            <div className="subresult">
              <h3>Resultados por Nombre</h3>
              <AutorTable autores={resultadosPorNombre} />
            </div>
          )}
        </div>
      </div>

      {mostrarModal && (
        <CrearAutorModal
          onClose={() => setMostrarModal(false)}
          onCreated={fetchAll}
        />
      )}
    </div>
  );
}

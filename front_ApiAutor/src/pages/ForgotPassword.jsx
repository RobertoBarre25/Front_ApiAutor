import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import { verificarUsuario } from "../api/auth";
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [username, setUsername] = useState("");
  const [pregunta, setPregunta] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleBuscar = async () => {
    try {
      const res = await verificarUsuario(username);
      setPregunta(res.data.pregunta);
    } catch (err) {
      setError("Usuario no encontrado");
    }
  };

  const continuar = () => navigate("/cambiar", { state: { username, pregunta } });

  return (
    <div className="forgot-container">
  <div className="forgot-box fade-in">
    <h2 className="forgot-title">Recuperar Contraseña</h2>
    <Input label="Usuario" value={username} onChange={(e) => setUsername(e.target.value)} />
    <Button onClick={handleBuscar}>Buscar</Button>
    {error && <p className="forgot-error">{error}</p>}

    {pregunta && (
      <div className="security-question">
        <p>Pregunta de seguridad:</p>
        <p className="italic">{pregunta}</p>
        <Button onClick={continuar}>Responder</Button>
      </div>
    )}
  </div>

  <br />
  <div className="login-link-footer">
    <p>¿Ya tienes cuenta? <Link to="/">Inicia sesión</Link></p>
  </div>
</div>

  );
};

export default ForgotPassword;

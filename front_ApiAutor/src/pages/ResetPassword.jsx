import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { verificarRespuesta, cambiarPassword } from "../api/auth";
import './ResetPassword.css';

const ResetPassword = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [respuesta, setRespuesta] = useState("");
  const [nueva, setNueva] = useState("");
  const [verificada, setVerificada] = useState(false);
  const [error, setError] = useState("");

  const verificar = async () => {
    try {
      await verificarRespuesta(state.username, respuesta);
      setVerificada(true);
    } catch {
      setError("Respuesta incorrecta");
    }
  };

  const cambiar = async () => {
    await cambiarPassword(state.username, nueva);
    navigate("/");
  };

  return (
    <div className="reset-container">
      <div className="reset-box fade-in">
        <h2 className="reset-title">Cambiar Contraseña</h2>
        <div className="register-footer">
          <Link to="/">¿Ya tienes cuenta? Inicia sesión</Link>
        </div>

        {!verificada ? (
          <>
            <p className="reset-question">Pregunta: {state?.pregunta}</p>
            <Input label="Respuesta" value={respuesta} onChange={(e) => setRespuesta(e.target.value)} />
            <Button onClick={verificar}>Verificar</Button>
            {error && <p className="reset-error">{error}</p>}
          </>
        ) : (
          <>
            <Input
              label="Nueva contraseña"
              type="password"
              value={nueva}
              onChange={(e) => setNueva(e.target.value)}
            />
            <Button onClick={cambiar}>Cambiar contraseña</Button>
          </>
          
        )}
      </div>
    </div>
  );
};

export default ResetPassword;

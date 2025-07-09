import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import Spinner from "../components/Spinner";
import { login } from "../api/auth";
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await login(username, password);
      navigate("/home");
    } catch (err) {
      setError("Usuario o contraseña incorrectos");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form fade-in">
        <h2 className="login-title">Iniciar Sesión</h2>
        <Input label="Usuario" value={username} onChange={(e) => setUsername(e.target.value)} />
        <Input
          label="Contraseña"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="login-error">{error}</p>}
        <Button type="submit" disabled={
          !username.trim() || !password.trim() || loading
        }>
          {loading ? <Spinner /> : "Entrar"}
        </Button>


        <div className="login-links">
          <Link to="/recuperar">¿Olvidaste tu contraseña?</Link>
          <Link to="/registro">Crear cuenta</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;

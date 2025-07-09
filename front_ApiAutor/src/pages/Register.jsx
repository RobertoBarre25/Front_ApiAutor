import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import Spinner from "../components/Spinner";
import { register } from "../api/auth";
import './Register.css';

const Register = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
    pregunta: "",
    respuesta: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await register(form);
    navigate("/");
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} className="register-form fade-in">
        <h2 className="register-title">Registro</h2>
        <Input label="Usuario" name="username" value={form.username} onChange={handleChange} />
        <Input
          label="Contraseña"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
        />
        <Input
          label="Pregunta de seguridad"
          name="pregunta"
          value={form.pregunta}
          onChange={handleChange}
        />
        <Input
          label="Respuesta"
          name="respuesta"
          value={form.respuesta}
          onChange={handleChange}
        />
        <Button type="submit" disabled={
          !form.username.trim() ||
          !form.password.trim() ||
          !form.pregunta.trim() ||
          !form.respuesta.trim() ||
          loading
        }>
          {loading ? <Spinner /> : "Registrar"}
        </Button>


        <div className="register-footer">
          <Link to="/">¿Ya tienes cuenta? Inicia sesión</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;

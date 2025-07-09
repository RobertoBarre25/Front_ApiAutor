import axios from 'axios';

const API_URL = 'https://loginmongo.onrender.com/api'; // Cámbialo si estás usando Render u otro

export const login = (username, password) =>
  axios.post(`${API_URL}/login`, { username, password });

export const register = (data) =>
  axios.post(`${API_URL}/register`, data);

export const verificarUsuario = (username) =>
  axios.post(`${API_URL}/verificar-usuario`, { username });

export const verificarRespuesta = (username, respuesta) =>
  axios.post(`${API_URL}/verificar-respuesta`, { username, respuesta });

export const cambiarPassword = (username, nuevaPassword) =>
  axios.put(`${API_URL}/cambiar-password`, { username, nuevaPassword });

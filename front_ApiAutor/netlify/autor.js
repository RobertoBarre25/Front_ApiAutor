export default async function handler(req, res) {
  const { id } = req.query;

  const url = id
    ? `http://www.robpostgress.somee.com/api/Autor/${id}`
    : `http://www.robpostgress.somee.com/api/Autor`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error al conectar con Somee' });
  }
}

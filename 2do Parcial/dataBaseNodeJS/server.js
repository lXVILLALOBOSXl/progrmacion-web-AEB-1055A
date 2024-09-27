const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const bodyParser = require('body-parser');  // <-- Necesario para parsear JSON en solicitudes POST y PUT
const app = express();
const port = 3000;

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'biblioteca'
});

// Conexión a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conexión exitosa a la base de datos');
});

// Middleware para servir archivos estáticos y parsear el body de las solicitudes
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

// Ruta para obtener todos los libros
app.get('/libros', (req, res) => {
  connection.query('SELECT * FROM libros', (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Error al obtener los libros' });
      return;
    }
    res.json(results);
  });
});

// Ruta para agregar un nuevo libro
app.post('/libros', (req, res) => {
  const { titulo, autor, anio_publicacion } = req.body;
  const query = 'INSERT INTO libros (titulo, autor, anio_publicacion) VALUES (?, ?, ?)';
  connection.query(query, [titulo, autor, anio_publicacion], (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Error al agregar el libro' });
      return;
    }
    res.json({ message: 'Libro agregado con éxito' });
  });
});

// Ruta para buscar libros por título o autor
app.get('/libros/buscar', (req, res) => {
  const { q } = req.query;
  const query = `SELECT * FROM libros WHERE titulo LIKE ? OR autor LIKE ?`;
  connection.query(query, [`%${q}%`, `%${q}%`], (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Error al buscar libros' });
      return;
    }
    res.json(results);
  });
});

// Ruta para editar un libro existente
app.put('/libros/:id', (req, res) => {
  const { id } = req.params;
  const { titulo, autor, anio_publicacion } = req.body;
  const query = 'UPDATE libros SET titulo = ?, autor = ?, anio_publicacion = ? WHERE id = ?';
  connection.query(query, [titulo, autor, anio_publicacion, id], (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Error al actualizar el libro' });
      return;
    }
    res.json({ message: 'Libro actualizado con éxito' });
  });
});

// Ruta para eliminar un libro existente
app.delete('/libros/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM libros WHERE id = ?';
  connection.query(query, [id], (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Error al eliminar el libro' });
      return;
    }
    res.json({ message: 'Libro eliminado con éxito' });
  });
});

// Ruta para obtener un libro por su ID
app.get('/libros/:id', (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM libros WHERE id = ?';
  connection.query(query, [id], (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Error al obtener el libro' });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ error: 'Libro no encontrado' });
      return;
    }
    res.json(results[0]); // Devolver solo el primer resultado ya que el ID es único
  });
});


// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});


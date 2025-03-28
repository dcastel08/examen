const mysql = require('mysql2/promise');

// Ajusta usuario/contraseña si hace falta
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'academico'
});

module.exports = pool;

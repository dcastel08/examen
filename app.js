const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Rutas
const facultadRoutes = require('./routes/facultad');
const carreraRoutes = require('./routes/carrera');
const estudianteRoutes = require('./routes/estudiante');
const profesorRoutes = require('./routes/profesor');
const materiaRoutes = require('./routes/materia');
const decanoRoutes = require('./routes/decano');
const estudianteCarreraRoutes = require('./routes/estudiante_carrera');
const estudianteFacultadRoutes = require('./routes/estudiante_facultad');
const profesorFacultadRoutes = require('./routes/profesor_facultad');
const profesorEstudianteRoutes = require('./routes/profesor_estudiante');
const materiaProfesorRoutes = require('./routes/materia_profesor');
const materiaEstudianteRoutes = require('./routes/materia_estudiante');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Asignamos los endpoints
app.use('/api/facultad', facultadRoutes);
app.use('/api/carrera', carreraRoutes);
app.use('/api/estudiante', estudianteRoutes);
app.use('/api/profesor', profesorRoutes);
app.use('/api/materia', materiaRoutes);
app.use('/api/decano', decanoRoutes);
app.use('/api/estudiante_carrera', estudianteCarreraRoutes);
app.use('/api/estudiante_facultad', estudianteFacultadRoutes);
app.use('/api/profesor_facultad', profesorFacultadRoutes);
app.use('/api/profesor_estudiante', profesorEstudianteRoutes);
app.use('/api/materia_profesor', materiaProfesorRoutes);
app.use('/api/materia_estudiante', materiaEstudianteRoutes);

const port = 3000;
app.listen(port, () => {
  console.log("Servidor backend corriendo en el puerto", port);
});

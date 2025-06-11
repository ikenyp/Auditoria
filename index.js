import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

// Convierte JSON entrante
app.use(express.json());

// Rutas
app.use('/api/auditoria', auditoriaRutas);

// Conexion a la base de datos
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Conectado a MongoDB');
    app.listen(process.env.PORT, () => 
        console.log(`Servidor escuchando en el puerto ${process.env.PORT}`)
    );
}).catch(err => {
    console.error('Error al conectar a MongoDB:', err);

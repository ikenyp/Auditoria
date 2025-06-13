import mongoose from 'mongoose';

const auditoriaSchema = new mongoose.Schema({
    usuario: { type: String, required: true },
    accion: { type: String, required: true },
    tipo: { type: String, required: true },
    codigoDocumento: { type: String, required: true },
    detalleAnterior: { type: Object, default: {} },
    detalleNuevo: { type: Object, default: {} },
}, {timestamps: true});

export default mongoose.model('Auditoria', auditoriaSchema);
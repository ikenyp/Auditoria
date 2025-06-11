import Auditoria from "../models/Auditoria.js";

export const crearRegistro = async (req, res) => {
    try {
        const nuevo = new Auditoria(req.body);
        const guardado = await nuevo.save();
        res.status(201).json(guardado);
        } catch (err) {
          res.status(500).json({ error: err.message });
        }
};

export const obtenerRegistros = async (req, res) => {
    try {
        const registros = await Auditoria.find();
        res.status(200).json(registros);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
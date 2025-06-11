import express from 'express';
import {body, validationResult} from 'express-validator';
import {crearRegistro, obtenerRegistros} from '../controllers/auditoriaController.js';

const router = express.Router();

// Validaciones para crear un registro
const validar = [
    body('usuario').notEmpty().withMessage('El campo usuario es obligatorio'),
    body('accion').notEmpty().withMessage('El campo accion es obligatorio'),
    body('tipo').notEmpty().withMessage('El campo tipo de documento es obligatorio'),
    body('codigoDocumento').notEmpty().withMessage('El campo codigo de documento es obligatorio'),
    body('detalleActual').isObject().withMessage('El campo detalle actual debe ser un objeto'),
    body('detalleAnterior').isObject().withMessage('El campo detalle anterior debe ser un objeto'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

router.post('/', validar, crearRegistro);
router.get('/', obtenerRegistros);

export default router;
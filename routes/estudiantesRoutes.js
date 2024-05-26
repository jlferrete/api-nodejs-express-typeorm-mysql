const express = require ('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({msg : 'Consulta Estudiante'})
});

router.post('/', (req, res) => {
    res.json({msg : 'Ingreso Estudiante'})
});

router.put('/', (req, res) => {
    res.json({msg : 'Actualización Estudiante'})
});

router.delete('/', (req, res) => {
    res.json({msg : 'Borrado Estudiante'})
});

module.exports = router;

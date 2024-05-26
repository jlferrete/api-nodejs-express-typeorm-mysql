const express = require ('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({msg : 'Consulta Estudiantes'})
});


router.post('/', (req, res) => {
    res.json({msg : 'Ingreso Estudiante'})
});

router.route("/:id")
    .get((req, res) => {
        res.json({msg : 'Consulta de un Estudiante'})
    })
    .put((req, res) => {
        res.json({msg : 'Actualización Estudiante'})
    })
    .delete((req, res) => {
        res.json({msg : 'Borrado Estudiante'})
    });

module.exports = router;

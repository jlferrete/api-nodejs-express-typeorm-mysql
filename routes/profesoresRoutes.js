const express = require ('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({msg : 'Consulta Profesor'})
});


router.post('/', (req, res) => {
    res.json({msg : 'Ingreso Profesor'})
});

router.route("/:id")
    .get((req, res) => {
        res.json({msg : 'Consulta de un Profesor'})
    })
    .put((req, res) => {
        res.json({msg : 'Actualización Profesor'})
    })
    .delete((req, res) => {
        res.json({msg : 'Borrado Profesor'})
    });

module.exports = router;
const db = require('../database/conexion.js');


class CursosController{
    constructor(){

    }

    consultar(req, res) {
        res.json({msg : 'Consulta Cursos'})
    }
    
    ingresar(req, res) {
        res.json({msg : 'Ingreso Curso'})
    }
    
    consultarDetalle(req, res) {
        const { id } = req.params;
        res.json({msg : `Consulta de un Curso con id ${id}`})
    }

    actualizar(req, res) {
        res.json({msg : 'Actualización Curso'})
    }

    borrar(req, res) {
        res.json({msg : 'Borrado Curso'})
    }

}

module.exports = new CursosController(); 
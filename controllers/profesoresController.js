class ProfesoresController{
    constructor(){

    }

    consultar(req, res) {
        res.json({msg : 'Consulta Profesores'})
    }
    
    ingresar(req, res) {
        res.json({msg : 'Ingreso Profesor'})
    }
    
    consultarDetalle(req, res) {
        res.json({msg : 'Consulta de un Profesor'})
    }

    actualizar(req, res) {
        res.json({msg : 'Actualización Profesor'})
    }

    borrar(req, res) {
        res.json({msg : 'Borrado Profesor'})
    }

}

module.exports = new ProfesoresController(); 
class EstudiantesController{
    constructor(){

    }

    consultar(req, res) {
        res.json({msg : 'Consulta Estudiantes'})
    }
    
    ingresar(req, res) {
        res.json({msg : 'Ingreso Estudiante'})
    }
    
    consultarDetalle(req, res) {
        const { id } = req.params;
        res.json({msg : `Consulta de un Estudiante con id ${id}`})
    }

    actualizar(req, res) {
        res.json({msg : 'Actualización Estudiante'})
    }

    borrar(req, res) {
        res.json({msg : 'Borrado Estudiante'})
    }

}

module.exports = new EstudiantesController(); 
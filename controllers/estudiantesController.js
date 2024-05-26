const db = require('../database/conexion.js');

class EstudiantesController{
    constructor(){

    }

    consultar(req, res) {
        res.json({msg : 'Consulta Estudiantes'})
    }
    
    ingresar(req, res) {
        try {
            const { dni, nombre, apellido, email } = req.body;

            console.log(dni, nombre, apellido, email)

            // Utiliza ? para los valores de la consulta SQL
            const query = `INSERT INTO estudiantes (dni, nombre, apellido, email) VALUES (?, ?, ?, ?)`;
            
            // Pasa los valores en un array en el orden correcto
            db.query(query, [dni, nombre, apellido, email], (err, rows) => {
                if(err){
                    res.status(400).send(err);
                }
                res.status(201).json( {id: rows.insertId })
            }
        );
        } catch (err) {
            console.log(err);
            res.status(500).send(err.message);
        }
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
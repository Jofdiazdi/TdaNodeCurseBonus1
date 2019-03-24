const opciones = {
    id:{
        demand : true,
    },
    nombre:{
        demand : true,
    },
    cedula:{
        alias: 'cc',
        demand : true,
    }
}

const cursos = require ('./cursos.js');
const fs = require ('fs');
var express = require('express')
var app = express()
 



let inscribir = (idCurso, nombrePreinscripcion, cedulaPreinscripcion) => {
    let resultado = cursos.cursos[idCurso];
    if(resultado === undefined){
        console.log('El id del curso no se encuentra');
    }else{
        console.log('Id del curso: ' + resultado.id);
        console.log('Nombre del curso: ' + resultado.nombre);
        console.log('Duracion del curso: ' + resultado.duracion);
        console.log('Precio del curso: ' + resultado.valor);
        console.log('');
        console.log('Se hara la preinscripcion al curso');

        texto = "Curso: " + resultado.nombre + "\n" + "Id: " + resultado.id+ "\n"+'Duracion: ' + resultado.duracion  + "\n" + 'Costo: ' + resultado.valor +"\n" +
        "Estudiante: " + nombrePreinscripcion + "\n" + 'Cedula: ' + cedulaPreinscripcion;

        fs.writeFile('Preinscripcion.txt',texto, (err)=> {
            if(err) throw (err);
            console.log('se ha creado el archivo');
            console.log(texto);
        });
        
        app.get('/', function (req, res) {
        res.send(texto)
  })
    }
}

const argv = require('yargs')
            .command ('inscribir', 'Inscribirme a un curso',opciones, (argv)=>{
                inscribir(argv.id,argv.nombre,argv.cedula);
            })
            .command ('$0', ' the default command', () => {} , (argv) => {
                cursos.listarCursos()
            } )
            .argv

   
  app.listen(3000)




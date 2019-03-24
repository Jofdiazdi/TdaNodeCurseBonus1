let cursos = [
    {
        id: 0,
        nombre: 'Programacion',
        duracion:'40 horas',
        valor: 250000,
    },
    {
        id: 1,
        nombre: 'Matematicas',
        duracion:'20 horas',
        valor: 300000,
    },
    {
        id: 2,
        nombre: 'Fisica',
        duracion:'50 horas',
        valor: 800000,
    },
    {
        id: 3,
        nombre: 'Unity3D',
        duracion:'120 horas',
        valor: 700000,
    }
];

let listarCursos = (callback)=>{
    console.log('');
    cursos.forEach(element => {
        setTimeout(function(){
            let resultado = element;
            console.log('Id del curso: ' + resultado.id);
            console.log('Nombre del curso: ' + resultado.nombre);
            console.log('Duracion del curso: ' + resultado.duracion);
            console.log('Precio del curso: ' + resultado.valor);
            console.log('');
        },2000*(element.id+1));
    });
    
}

module.exports = {
    cursos,
    listarCursos,
};
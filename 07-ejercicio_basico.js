//Crear un array con objetos en su interior y que se desplieguen en pantalla

var estudiantes = [
    {
        nombre: 'Brandon',
        semestre: '8',
        edad: 21
    },
    {
        nombre: 'Oscar',
        semestre: '8',
        edad: 23
    },
    {
        nombre: 'Brayan',
        semestre: '8',
        edad: 31
    },
    {
        nombre: 'Pedro',
        semestre: '8',
        edad: 24
    },
    {
        nombre: 'Elian',
        semestre: '8',
        edad: 24
    },
]

/**
 * for (var estudiante of estudiantes){
    console.log(estudiante.nombre)
}

for (var estudiante in estudiantes){
    console.log(estudiantes(estudiante.nombre))
}

 */

//Dentro de los objetos se pueden crear más objetos y a su vez arreglos 
var persona = {
    nombre: 'martha',
    edad: 23,
    estudiante: {
        semestre: 6,
        promedio: 8.8,
        materias: ["Cálculo I", "Administración de empresa", "Gestión de proyectos"],
    },
}
var materias = persona.estudiante.materias
for (var materia of materias){
    console.log(materia)
}

/**Los objetos no se pueden iterar, en cambio los arreglos SI se puede. */
var nuevoArreglo = materias.map(materia => {
    return materia
})

console.log(nuevoArreglo)
nuevoArreglo.push('Algebra')
console.log(nuevoArreglo)
console.log(materia)
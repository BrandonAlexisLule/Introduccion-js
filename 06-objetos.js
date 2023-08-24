/**
 * Objetos: Se inicializan con llaves [], y son considerados como objetos
 *Sintaxis: key, value
 */
var objecto = {}
console.log(objecto)

var brandon = {
    nombre: 'Brandon',
    edad: 22,
    semestre: "8vo",
    materia: "Desarrollo Web I",
    carrera: "Sistemas"
}
//template String
console.log(`hola ${brandon.nombre} bienvenido al curso de programación ${brandon.materia} del semestre ${brandon.semestre}`)

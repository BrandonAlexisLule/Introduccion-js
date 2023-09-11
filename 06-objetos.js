/**
 * Objetos: Se inicializan con llaves {}, y son considerados como objetos
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

var inf_personal = {
    estado: 'Baja California',
    ciudad: 'Ensenada',
    capital: 'Mexicali',
    pais: 'México',
    trabajo: 'Cinepolis, Macroplaza del Mar.'
}

//Práctica con objetos
console.log(`Hola, ${brandon.nombre}, eres del estado de ${inf_personal.estado}, que recide en la ciudad de ${inf_personal.ciudad}, del país de ${inf_personal.pais}, y trabajas actualmente en la cadena de cines mas importante con nombre ${inf_personal.trabajo} Buen día.`)
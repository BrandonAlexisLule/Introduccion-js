/**Flujo de ejecución: Arriba hacia abajo
 * Primero: Ejecuta la sección de "Alerta al usuario"
 * Segundo: Ejecuta la sección de DOM
 * Tercero: Ejecuta la sección del Modal de confirmación.
 */

/**ALERTA A USUARIO */
var mensaje = "Soy una alerta"
window.alert(mensaje)
console.log("Continua el código ...")

/**DOCUMENT OBJECT MODEL --> DOM */
//Para obtener datos del usuario a través de la alerta e imprimirlos en pantalla
//Declaramos una variable edad y le asignamos en una alerta
var edad = prompt("¿Cuantos años tienes?")
document.getElementById('parrafo').textContent = edad

/**Modal de confirmación.*/
var resultado = window.confirm('¿Trabajas?')
console.log(resultado)
//Alerta al usuario
var mensaje = "soy una alerta"
window.alert(mensaje)
console.log("Continua el código ...")

/**Para obtener datos del usuario a través de la alerta e imprimirlos en pantalla*/
//Declaramos una variable edad y le asignamos en una alerta
var edad = prompt("Cuantos años tienes")
document.getElementById('parrafo').textContent = edad

/**Usar un modal para confirmar */
var resultado = window.confirm('Trabajas')
console.log(resultado)
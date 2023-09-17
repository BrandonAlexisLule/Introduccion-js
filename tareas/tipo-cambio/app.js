// Creamos los elementos necesarios.
const titulo = document.createElement('h1')
const cuadro = document.createElement('input')
const enviar = document.createElement('button')
const resultado = document.createElement('p')

// Creamos un título para la aplicación, en este caso es un "Convertir de pesos a dólares".
titulo.innerText = 'App para convertir de MXN a USD.'
document.body.appendChild(titulo)
// Creamos el cuadro donde se registrará el valor en pesos para convertir.
document.body.appendChild(cuadro)
document.body.appendChild(enviar)
//Se crea un párrafo en donde se mostrará el resultado de la conversión.
document.body.appendChild(resultado)

//Se crea un botón personalizable.
enviar.innerText = 'CALCULAR' 

// Creamos la función en la cual se va a guardar la fórmula 
enviar.addEventListener('click', e => {
    e.preventDefault()
    const dolar = 0.06
    const pesos = parseFloat(cuadro.value)
    const cambio = pesos * dolar
    resultado.innerText = '💵 Tu cambio es de: $' + cambio + ' Dólares'
})









 
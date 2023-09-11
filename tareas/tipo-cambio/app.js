// Creamos los elementos necesarios.
const titulo = document.createElement('h1')
const cuadro = document.createElement('input')
const enviar = document.createElement('button')
const resultado = document.createElement('p')

// Creamos un título para la aplicación, en este caso es un "Convertir de pesos a dólares".
titulo.innerText = 'App para convertir de MXN a USD.'
document.body.appendChild(titulo)

// Creamos el cuadro donde se registrará el valor en pesos para convertir.
cuadro.innerText = Text
document.body.appendChild(cuadro)

// Creamos la función en la cual se va a guardar la fórmula 
function formula(e){
    e.preventDefault()
    const dolar = 0.06
    const pesos = parseFloat(`${cuadro.value}`)
    const resultado = pesos * dolar
    resultado.innerText = calcular
}

//Se crea un botón personalizable.
enviar.innerText = 'CALCULAR' 
enviar.addEventListener('click', formula)
document.body.appendChild(enviar)

//Se crea un párrafo en donde se mostrará el resultado de la conversión.
resultado.innerText = formula
document.body.appendChild(resultado)


/**
 * // Creamos los elementos necesarios.
const titulo = document.createElement('h1')
const resultado = document.createElement('p')
const pesos = document.createElement('input')
const boton = document.createElement('button')

// Hacemos la etiqueta para indicar la instrucción.
titulo.innerText = 'Digite la cantidad de pesos que desea convertir a dólares.'


document.body.appendChild(titulo)
document.body.appendChild(input)
document.body.appendChild(boton)
document.body.appendChild(resultado)

boton.innerText ='Calcular'
boton.addEventListener('click', (e) => {
    e.preventDefault()
    let resultado = parseFloat(pesos.value) * 0.06
    resultado.innerText = resultado
})

resultado.innerText
 */


// Creamos la función en la cual se va a guardar la fórmula 





 
// La función InnerText Sirve para reemplazar un texto en una etiqueta proveniente del documento HTML.


const parrafo = document.createElement('p')
const boton = document.createElement('button')
const persona = document.createElement('h1')
/**parrafo.innerHTML = 'lorem impsu' // Sirve para agregar un texto adicional.  */

document.body.appendChild(parrafo)

function numAzar (){
    parrafo.innerText = (Math.floor(Math.random() * 1000))
    document.body.appendChild(parrafo)
}

parrafo.innerText = numAzar() 

boton.innerText = 'Random' // La función InnerText sirve para Registrar en el elemento el textoq que se desea.
boton.addEventListener('click', numAzar)
document.body.appendChild(boton) 

persona.innerText = 'Brandon'
document.body.appendChild(persona)
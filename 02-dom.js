/**Usando el DOM API - (Document Object Model) */

//Forma 1:
document.getElementById('parrafo').textContent = "Brandon Alexis"

//Forma 2:
var parrafo = document.getElementById('parrafo')
parrafo.textContent = "Aprendiendo JS DOM API"

/**Creando elementos desde JS a HTML*/
var element = document.createElement('p')
element.textContent = "Creando elementos"
document.body.appendChild(element)
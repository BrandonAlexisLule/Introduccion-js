//repaso de objetos

var computadoras = {
    marca: 'HP Victus',
    procesador: 'ADM Ryzen',
    almacenamiento: 500,
    componentes: {
        teclado_num: ['.', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '/', '+', '*', '-'],
        mouse: true,  
        cargador: false
    }
}

var computadora = computadoras.componentes.teclado_num

//Acceso a Objeto principal >> Objeto Secundario (Si lo hay) >> Arreglo (Si lo hay).
for (var i in computadora){
    console.log(i) //Se muestra el INDICE de cada uno de los elementos del arreglo
}

for (var i of computadora){
    console.log(i) //Se muestra el CONTENIDO de cada uno de los elementos del arreglo.
}

//Se muestra el array completo de los elementos introducidos.
console.log(computadora)    
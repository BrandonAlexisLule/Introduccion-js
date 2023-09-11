//const arreglo = [23, 24, 67, 90]

//const varz1 = arr[0]
//const var2 = arr[1] 
//const var3 = arr[2]
//const var4 = arr[3]

//const [var1, var2, var3, var4] = arreglo
//console.log(var1, var2, var3, var4)


// Obtener 3 y 4 en dos variables diferentes

//const [, , [a, b]] = arreglo
//console.log(a, b)


/**
 * Ejemplo 1
 */

/**Tenemos el objeto, como un ejemplo, lo usamos para un Restaurante
 * 1. Creamos el nombre del restaurante
 * 2. Establecimos su ubicación
 * 3. Creamos las categorías, junto con el menú de inicio y principal.
 * 4. Hicimos una función para entragar a domicilio, que con los argumentos startedIndex y mainIndex, podemos llamar al valor dentro de los arreglos. Esto es posible con la función "this".
 */
const restaurant = {
    nombre: 'Angelos Pizzas',
    ubicacion: 'Plaza San Jerónimo 34',
    categorias: ['Italian', 'Mexican', 'Vegetarian', 'Asiatic'],
    MenuInicio: ['Finger Cheese', 'Nuggets', 'Garlic Bread', 'Boneless'],
    mainMenu: ['Pizza', 'Pasta', 'Beverages'],
    orden: function(startedIndex, mainIndex){
        return [this.MenuInicio[startedIndex], this.mainMenu[mainIndex]]
    },
    openingHours:{
        fri:{
            open: 11,
            close: 23,
        },
        sat:{
            open: 9,
            close: 23 
        },
        sun:{
            open: 10,
            close: 15
        }
    },
    entregasDomicilio: function({time, address, mainIndex, startedIndex}){
        console.log(`Entrega recibida: ${this.MenuInicio[startedIndex]} and ${this.mainMenu[mainIndex]}`)
    }
}

//mandamos a llamar a los argumentos y les asignamos un valor.
const [startedIndex, mainIndex] = restaurant.orden(3, 0)

const orden = document.createElement('p')
orden.innerHTML = `Tu pedido contiene ${startedIndex.toUpperCase()} y ${mainIndex.toUpperCase()}`
document.body.appendChild(orden)

// Aquí se renombra los objetos como el nombre, horarios y categorías
const {
    nombre: nombreRestaurante, 
    openingHours: laborDays,
    categorias: etiquetas
} = restaurant
console.log(nombreRestaurante, laborDays, etiquetas)

//Se destructuriza el objeto OpeningHours, para llamar al objeto Fri
const {
    sun: {open, close}
} = laborDays
console.log(open, close)

/**
 * Agregar la funcionalidad al restaurante para hacer entregas online
 */

restaurant.entregasDomicilio({
    time: '12:56',
    address: 'San Benito, Ave',
    mainIndex: 2,
    startedIndex: 0
}) 






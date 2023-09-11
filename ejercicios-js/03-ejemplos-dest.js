/**Ejercicios Destructuring */

const cinepolis = {
    nombre: 'Cinépolis Macroplaza del Mar',
    ubicacion: 'Carretera Transpeninsular',
    palomitasLlevar: ['P/LL 1/4 Mantequilla', 'P/LL 1/4 Caramelo', 'P/LL 1/4 Chettos', 'P/LL 1/4 Takis Azules', 'P/LL 1/4 Doritos'],
    palomitasJumbo: ['JMB 1/2 Mantequilla', 'JMB 1/2 Caramelo', 'JMB 1/2 Chettos', 'JMB 1/2 Takis Azules', 'JMB 1/2 Doritos'],
    saborBebidas: ['Coca-Cola Regular', 'Sprite S/A', 'Fanta S/A', 'Coca-Cola Light', 'Coca-Cola S/A', 'Fuze Tea', 'Sidral-Mundet S/A'],
    cantidadHielo: ['Hielo Regular', 'Poco Hielo', 'Sin hielo'],
    saborIcee: ['1/2: Cereza / Rojo', '1/2 Frambueza / Azul', '1/2 Mango / Amarillo'],
    horarios:{
        viernes:{
            abrir: '14:20',
            cerrar: '22:30',
        },
        sábado:{
            abrir: '10:40',
            cerrar: '22.30',
        },
        domingo:{
            abrir: '10:40',
            cerrar: '22:30',
        },
    },
    orden: function(producto1, producto2, producto3, producto4, producto5){
        return [this.palomitasJumbo[producto1], this.palomitasJumbo[producto2], this.palomitasLlevar[producto3]]
    },
    entregasDomicilio: function(hora, fecha, producto1, producto2, producto3, producto4, producto5 ){
        console.log(`Nuevo Pedido: ${this.palomitasJumbo[producto1].toUpperCase()} y ${this.palomitasJumbo[producto2].toUpperCase()}. --> ${this.palomitasLlevar[producto3].toUpperCase} `)
    }
}

const [producto1, producto2, producto3] = cinepolis.orden(1, 2, 0)

const orden = document.createElement('p')
orden.innerHTML = `Tu pedido contiene ${producto1.toUpperCase()} y ${producto2.toUpperCase()}. Además tiene ${producto3.toUpperCase()}   `
document.body.appendChild(orden)

//Se reenombran los objetos para que sea más entendible.
const {
    nombre: nombreCine,
    horarios: diasLaborales,
    palomitasJumbo: palomitas,
} = cinepolis
console.log(nombreCine, diasLaborales, palomitas)
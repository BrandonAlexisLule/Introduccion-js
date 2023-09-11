var account = {
    pin: 1234,
    amount: 0,
    propietario: 'Patricio',
    depositos: [], //Se crea un arreglo para devolver (guardar) los depósitos que se vayan realizando.
}

console.log(account)
//Hacer depósitos
account.depositos.push(500)
account.depositos.push(1000)
account.depositos.push(20000)
//Hacer retiros
account.depositos.push(-300)
account.depositos.push(-100)    
account.depositos.push(-25000)


//Conocer el saldo actual
var copiaDepositos = account.depositos.map((dinero) => dinero) //La función map sirve para copiar todos los depósitos que se vayan registrando.
var total = copiaDepositos.reduce((suma, dinero) => suma + dinero) 
console.log(`Saldo total $${total} MXN`)

/** Se declara cualquier variable con var 
 * var foo = 20
 *     foo = true 
 *     
 * 
 * 
 * 
 * 
 */


//const: Es un valor que no se puede modificar.

//la palabra reservada "let" permite modificar variables.
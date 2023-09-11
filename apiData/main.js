import './style.css'
import { apiData } from './helper/data'
import Header from './components/Header'
import Address from './components/Address'

const employee = {
    titulo: 'Tarjetas de datos de Actores Famosos'
}

document.body.appendChild(Header(employee))

const main = document.createElement('main')
apiData.forEach((address) => {
    main.appendChild(Address(address))
})
document.body.appendChild(main)



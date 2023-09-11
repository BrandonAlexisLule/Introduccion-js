import './style.css'
import { tarjetas } from './helper/data'
import Header from './components/Header'
import Card from './components/Card'

const empresa = {
    titulo: 'Tecnológico Nacional de México, Ensenada, BC.',
    titulo2: 'Instituto Tecnológico de Ensenada'
}

document.body.appendChild(Header(empresa))


const main = document.createElement('main')

tarjetas.forEach((persona) => {
    main.appendChild(Card(persona))
})

document.body.appendChild(main)




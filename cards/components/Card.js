 function Card({ nombre, carrera, semestre, image: { uri, description } }) {
    const card = document.createElement('div')
    card.className = 'card'
    card.innerHTML = `
      <img src="${uri}" alt="${description}" class="card-avatar">
      <div class="card-info">
        <p class="card-title">Carrera: ${carrera}</p>
        <p class="card-subtitle">Nombre completo: ${nombre}</p>
        <p class="card-grade">Semestre: ${semestre}</p>
      </div>
    `
    return card
}

export default Card
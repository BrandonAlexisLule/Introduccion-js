function Header({titulo, titulo2}){
    const header = document.createElement('header')
    header.className = 'cabecera'
    //Diferencia entre innertext y innerHTML
    header.innerHTML = `<h1>${titulo}</h1>
    <h2>${titulo2}</h2>`
    return header
}
export default Header








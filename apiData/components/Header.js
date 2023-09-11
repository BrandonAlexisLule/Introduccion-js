function Header({titulo}){
    const header = document.createElement('header')
    header.innerHTML = `<h1>${titulo}</h1>`
    return header
}
export default Header
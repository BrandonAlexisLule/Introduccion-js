function Address({personal_info: {address, phone_number, zipcode}, employee_name, employee_salary, employee_age, image: {profile_image, description}}) {
    const addressInf = document.createElement('div')
    addressInf.className = 'box-address'
    addressInf.innerHTML =
    `
      <img src="${profile_image}" alt="${description}" class="profile-avatar">
      <div class="address-information">
        <p class="address"> 🏡 Dirección: ${address}</p>
        <p class="phone_number"> 📲 Número de télefono: ${phone_number}</p>
        <p class="zipcode"> 📧 Código Postal: ${zipcode}</p>
        <p class="name"> 🧑 Nombre del empleado: <p>${employee_name}</p> </p>
        <p class="salary"> 💹 Salario: ${employee_salary}</p>
        <p class="age"> 👥 Edad del empleado: ${employee_age}</p>
      </div>
    `
    return addressInf
}
export default Address
var estudiantes = [
    {
        nombre: 'Brandon',
        semestre: '8',
        edad: 21
    },
    {
        nombre: 'Oscar',
        semestre: '8',
        edad: 23
    },
    {
        nombre: 'Brayan',
        semestre: '8',
        edad: 31
    },
    {
        nombre: 'Pedro',
        semestre: '8',
        edad: 24
    },
    {
        nombre: 'Elian'
    },
]
for (var estudiante of estudiantes){
    console.log(estudiante.nombre)
}

for (var estudiante in estudiantes){
    console.log(estudiantes.nombre)
}


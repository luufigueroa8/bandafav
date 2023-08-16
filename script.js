/* listado de la información de las cartas  */

const listadoCartas = [
    {
        id: 6,
        nombre: "Logo de la banda",
        descripcion: "La banda se creó el 23 de Julio del 2010 y se separó el 31 de Octubre del 2015",
        imagen: "./imagen/logo.jpg",   
        link:"https://youtu.be/syFZfO_wfMQ",
    },
    
    {
        id: 1,
        nombre: "Harry Styles",
        imagen: "./imagen/harry.jpg",
        descripcion: "1 de Febrero de 1994 (29 años), Holmes Chapel-Reino Unido",
        link:"https://youtu.be/-UJCMfuFtSQ",
    },
    {
        id: 2,
        nombre: "Louis Tomlinson",
        imagen: "./imagen/louis.jpg",
        descripcion: "24 de Diciembre de 1991 (31 años), Doncaster-Reino Unido",
        link:"https://youtu.be/IzuvvjrUBEw",
    },
    {
        id: 3,
        nombre: "Zayn Malik",
        imagen: "./imagen/zayn.jpg",
        descripcion: "12 de Enero de 1993 (30 años), Bradford-Reino Unido",
        link:"https://youtu.be/voG07pt-KYI",
    },
    {
        id: 4,
        nombre: "Niall Horan",
        imagen: "./imagen/niall.jpg",
        descripcion: "13 de Septiembre de 1993 (29 años), Mullingar-Irlanda",
        link:"https://youtu.be/nBmNcLBaPUE",
    },
    {
        id: 5,
        nombre: "Liam Payne",
        imagen: "./imagen/liam.jpg",
        descripcion: "29 de Agosto de 1993 (29 años), Wolverhampton-Reino Unido",
        link:"https://youtu.be/13CdKgFiiXQ",
    },
    
]


/* NODOS HTML (etiquetas/elementos html) */
const contenedorCartas = document.querySelector(".listadoCartas")


/* función que recorre el listado de las cartas */
listadoCartas.forEach(
    (carta) => contenedorCartas.innerHTML += `
            <article class="card">
               <a href="${carta.link}" target="_blank">
                   <img src=${carta.imagen} alt="imagen">
                </a>
                <div class="info">
                   <h2>${carta.nombre}</h2>
                   <p>${carta.descripcion}</p>
            </div>
            </article>`
)




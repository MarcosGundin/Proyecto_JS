const VIDEOJUEGOS = [
    {
        id: 1,
        tipo: "acción",
        nombre: "God of War Ragnarök",
        consola: "Play5",
        precio: 69.99,
        disponible: true,
        compania: "Santa Monica Studio"
    },
    {
        id: 2,
        tipo: "aventura",
        nombre: "The Legend of Zelda: Tears of the Kingdom",
        consola: "Nintendo Switch",
        precio: 59.99,
        disponible: true,
        compania: "Nintendo"
    },
    {
        id: 3,
        tipo: "rol",
        nombre: "Elden Ring",
        consola: "Play5",
        precio: 49.99,
        disponible: false,
        compania: "FromSoftware"
    },
    {
        id: 4,
        tipo: "estrategia",
        nombre: "Civilization VI",
        consola: "XBOX Series X",
        precio: 39.99,
        disponible: true,
        compania: "2K Games"
    },
    {
        id: 5,
        tipo: "simulación",
        nombre: "The Sims 4",
        consola: "Play4",
        precio: 29.99,
        disponible: true,
        compania: "Electronic Arts"
    },
    {
        id: 6,
        tipo: "otros",
        nombre: "Minecraft",
        consola: "Nintendo Switch2",
        precio: 24.99,
        disponible: false,
        compania: "Mojang"
    }
];

let botonlista = document.getElementById("botonlista");
let botongestiona = document.getElementById("botongestiona")


function mostrarLlista(){
    document.getElementById("llista")
}

function mostrarTabla(VIDEOJUEGOS){

    let tabla = document.getElementById("tabla");

    tabla.innerHTML = `
        <tr>
            <th>ID</th>
            <th>Tipo</th>
            <th>Nombre</th>
            <th>Consola</th>
            <th>Precio</th>
            <th>Disponible</th>
        </tr>
    `;

    VIDEOJUEGOS.forEach(videojuego => {

        tabla.innerHTML += `
            <tr>
                <td>${videojuego.id}</td>
                <td>${videojuego.tipo}</td>
                <td>${videojuego.nombre}</td>
                <td>${videojuego.consola}</td>
                <td>${videojuego.precio} €</td>
                <td>${videojuego.disponible}</td>
            </tr>
        `;

    });
}
// Se define el arreglo de libros en formato bidimensional correctamente
let libros = [
    [{ titulo: "El Principito", autor: "Antoine de Saint-Exupéry", año: 1943, reservas: 150 }],
    [{ titulo: "1984", autor: "George Orwell", año: 1949, reservas: 200 }],
    [{ titulo: "Cien Años de Soledad", autor: "Gabriel García Márquez", año: 1967, reservas: 300 }],
    [{ titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", año: 1605, reservas: 50 }],
    [{ titulo: "La Odisea", autor: "Homero", año: -800, reservas: 120 }]
];


// Ordenar por título (alfabéticamente)
function ordenarPorTitulo(libros) {
    for (let i = 1; i < libros.length; i++) {
        let currentBook = libros[i][0];
        let j = i - 1;

        while (j >= 0 && libros[j][0].titulo.localeCompare(currentBook.titulo) > 0) {
            libros[j + 1] = libros[j];
            j--;
        }
        libros[j + 1] = [currentBook];
    }
    return libros;
}

// Ordenar por año (ascendente)
function ordenarPorAño(libros) {
    for (let i = 1; i < libros.length; i++) {
        let currentBook = libros[i][0];
        let j = i - 1;

        while (j >= 0 && libros[j][0].año > currentBook.año) {
            libros[j + 1] = libros[j];
            j--;
        }
        libros[j + 1] = [currentBook];
    }
    return libros;
}

// Ordenar por reservas (descendente)
function ordenarPorReserva(libros) {
    for (let i = 1; i < libros.length; i++) {
        let currentBook = libros[i][0];
        let j = i - 1;
        
        while (j >= 0 && libros[j][0].reservas < currentBook.reservas) {
            libros[j + 1] = libros[j];
            j--;
        }
        libros[j + 1] = [currentBook];
    }
    return libros;
}



// Pruebas de ordenamiento

console.time("OrdenamientoPorTitulo");
console.log("\nOrden por Título:", ordenarPorTitulo([...libros]));
console.timeEnd("OrdenamientoPorTitulo");

console.time("OrdenamientoPorAño");
console.log("\nOrden por Año:", ordenarPorAño([...libros]));
console.timeEnd("OrdenamientoPorAño");

console.time("OrdenamientoPorReserva");
console.log("\nOrden por Reserva:", ordenarPorReserva([...libros]));
console.timeEnd("OrdenamientoPorReserva");


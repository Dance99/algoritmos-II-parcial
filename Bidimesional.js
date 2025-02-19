// Se define el arreglo de libros en formato bidimensional correctamente
let libros = [
    [{ titulo: "El Principito", autor: "Antoine de Saint-Exupéry", año: 1943, reservas: 150 }],
    [{ titulo: "1984", autor: "George Orwell", año: 1949, reservas: 200 }],
    [{ titulo: "Cien Años de Soledad", autor: "Gabriel García Márquez", año: 1967, reservas: 300 }],
    [{ titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", año: 1605, reservas: 50 }],
    [{ titulo: "La Odisea", autor: "Homero", año: -800, reservas: 120 }]
];

// Algoritmo de burbuja para ordenar por título
// function OrdenarPorTitulo(libros) {
//     for (let i = 0; i < libros.length - 1; i++) {
//         for (let j = 0; j < libros.length - i - 1; j++) {
//             if (libros[j][0].titulo.localeCompare(libros[j + 1][0].titulo) > 0) {
//                 // Intercambia los libros
//                 let temp = libros[j];
//                 libros[j] = libros[j + 1];
//                 libros[j + 1] = temp;
//             }
//         }
//     }
//     return libros;
// }

// // Llamada a la función
// console.time("OrdenamientoPorTitulo");
// console.log("\nOrden por Título:", OrdenarPorTitulo(libros));
// console.timeEnd("OrdenamientoPorTitulo");

//Algoritmos de seleccion para ordenar por año
function ordenarPorAño(libros) {
    let n = libros.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (libros[j][0].año < libros[minIndex][0].año) {
                minIndex = j;
            }
        }
        // Intercambio de elementos
        if (minIndex !== i) {
            [libros[i], libros[minIndex]] = [libros[minIndex], libros[i]];
        }
    }
    return libros;
}
//Llamo la funcion para ordenar los libros por titulo
console.time("OrdenamientoPorAño");
console.log("\nOrden por año:", (ordenarPorAño(libros)));
console.timeEnd("OrdenamientoPorAño");

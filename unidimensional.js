// se define el arreglo  de libros como objetos con titulo, año y reserva
let libros = [
    {titulo: "El Principito", autor: "Antoine de Saint-Exupéry", año: 1943, reservas: 150},
    {titulo: "1984", autor: "George Orwell", año: 1949, reservas: 200},
    {titulo: "Cien Años de Soledad", autor: "Gabriel García Márquez", año: 1967, reservas: 300},
    {titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", año: 1605, reservas: 50},
    {titulo: "La Odisea", autor: "Homero", año: -800, reservas: 120}
];

//Algoritmos de seleccion para ordenar por año
// function ordenarPorAño(libros) {
//     let n = libros.length;
//     for (let i = 0; i < n - 1; i++) {
//         let minIndex = i;
//         for (let j = i + 1; j < n; j++) {
//             if (libros[j].año < libros[minIndex].año) {
//                 minIndex = j;
//             }
//         }
//         // Intercambio de elementos
//         if (minIndex !== i) {
//             [libros[i], libros[minIndex]] = [libros[minIndex], libros[i]];
//         }
//     }
//     return libros;
// }
// //Llamo la funcion para ordenar los libros por titulo
// console.time("OrdenamientoPorAño");
// console.log("\nOrden por año:", (ordenarPorAño(libros)));
// console.timeEnd("OrdenamientoPorAño");



// Algoritmo de insercion por reserva
// function ordenarporReserva(libros) {
//     for (let i = 1; i < libros.length; i++) {
//         let currentBook = libros[i];
//         let j = i - 1;
//         while (j >= 0 && libros[j].reservas < currentBook.reservas) {
//             libros[j + 1] = libros[j]; //Mueve los elementos hacia la derecha
//             j--;
//         }
// libros[j + 1] = currentBook; //coloca el libro en posicion corecta
//     }
//     return libros;
// }

// //realizo el llamdo 
// console.time("OrdenamientoPorReserva");
// console.log("\nOrden por Reserva:", ordenarporReserva(libros));
// console.timeEnd("OrdenamientoPorReserva");

//Algoritmo de burbuja por titutlo
// function OrdenarPorTitulo(libros) {
//     for(let i = onabort; i < libros.length - 1; i++) {
//         for(let j = 0; j < libros.length - i - 1; j++) {
//             if(libros[j].titulo > libros[j + 1]. titulo) {
//                 //intercambia los libros 
//                 let temp = libros[j];
//                 libros[j] = libros[j + 1];
//                 libros[j + 1]= temp;
//             }
//         }
//     }
//     return libros;
// }

// console.time("OrdenamientoPorTitulo");
// console.log("\nOrden por Titulo:", OrdenarPorTitulo(libros));
// console.timeEnd("OrdenamientoPorTitulo");
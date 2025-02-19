// se define el arreglo de libros como objetos con titulo, año y reserva
let libros = [
    [{titulo: "El Principito", autor: "Antoine de Saint-Exupéry", año: 1943, reservas: 150},],
    [{titulo: "1984", autor: "George Orwell", año: 1949, reservas: 200},],
    [{titulo: "Cien Años de Soledad", autor: "Gabriel García Márquez", año: 1967, reservas: 300},],
    [{titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", año: 1605, reservas: 50},],
    [{titulo: "La Odisea", autor: "Homero", año: -800, reservas: 120}],
];


//Algoritmo de burbuja por titutlo
function OrdenarPorTitulo(libros) {
    for(let i = onabort; i < libros.length - 1; i++) {
        for(let j = 0; j < libros.length - i - 1; j++) {
            if(libros[j].titulo > libros[j + 1]. titulo) {
                //intercambia los libros 
                let temp = libros[j];
                libros[j] = libros[j + 1];
                libros[j + 1]= temp;
            }
        }
    }
    return libros;
}

console.time("OrdenamientoPorTitulo");
console.log("\nOrden por Titulo:", OrdenarPorTitulo(libros));
console.timeEnd("OrdenamientoPorTitulo");
// se define el arreglo  de libros como objetos con titulo y año
// Ejemplo de estructura para un libro
let libros = [
    {titulo: "El Principito", autor: "Antoine de Saint-Exupéry", año: 1943, reservas: 150},
    {titulo: "1984", autor: "George Orwell", año: 1949, reservas: 200},
    {titulo: "Cien Años de Soledad", autor: "Gabriel García Márquez", año: 1967, reservas: 300},
    {titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", año: 1605, reservas: 50},
    {titulo: "La Odisea", autor: "Homero", año: -800, reservas: 120}
];

//Algoritmos de seleccion para ordenar
function OrdenaporTitulos(libros){
    for (let i = 0; i < libros.length; i++) {
        let minIndex = i;   //el primer elemento es mas pequeño
        for (let j = i + 1; j < libros.length; j++) {
            if (libros[j].año < libros[minIndex].año){
                minIndex = j; // con este encuentras el libro con el titulo mas corto
            }
        }
        //se intercambia los libros
        let temp = libros[i];
        libros[i] = libros[minIndex];
        libros[minIndex] = temp
    }
    return libros;
}

//Llamo la funcion para ordenar los libros por titulo
console.log("\nOrden por reservas:", (OrdenaporTitulos(libros)));

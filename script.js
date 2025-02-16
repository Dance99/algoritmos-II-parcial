// se define el arreglo  de libros como objetos con titulo y año
let libros = [
    {titulo: "El Quijote",año: 1605, reservas: 50},
    {titulo:"Cien años de soledad", año: 1949, reservas: 100},
    {titulo: "1984", año: 1949, reservas:80},
    {titulo: "La sombra del viento", año: 2001, reservas: 60}
];

//Algoritmos de seleccion para ordenar
function OrdenaporTitulos(libros){
    let n =libros.length;

    for (let i = 0; i < n -1; i++) {
        letminIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (libros[j].titulo < libros[minIndex].titulo){
                minIndex = j; // con este encuentras el libro con el titulo mas corto
            }
        }
        //se intercambia los libros
        let temp = libros[i];
        libros[i] = libros[minIndex];
        libros[minIndex] = temp
    }
}

//Llamo la funcion para ordenar los libros por titulo
let m = OrdenaporTitulos(libros);
 // se imprime el resultado 
 console.log(libros);
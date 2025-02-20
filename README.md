
# <span style="color: #3498db;">***PARCIAL II - Algoritmos de Ordenamiento***</span>

Esta documentación explica la implementación y análisis de diferentes algoritmos de ordenamiento utilizados para ordenar una lista de libros según diferentes criterios.

## <span style="color: #2ecc71;">Introducción</span>

En esta actividad, se exploran diferentes algoritmos de ordenamiento para determinar cuál es más eficiente, midiendo el tiempo de ejecución. Se utilizan estructuras de datos unidimensionales y bidimensionales, implementando tres algoritmos distintos: inserción, selección y burbuja.

## Estructuras de Datos

### Arreglo Unidimensional

Se define un arreglo de libros como objetos con propiedades como título, autor, año de publicación y número de reservas.


```markdown
```javascript
// Se define el arreglo de libros como objetos con título, año y reserva
let libros = [
  {titulo: "El Principito", autor: "Antoine de Saint-Exupéry", año: 1943, reservas: 150},
  {titulo: "1984", autor: "George Orwell", año: 1949, reservas: 200},
  {titulo: "Cien Años de Soledad", autor: "Gabriel García Márquez", año: 1967, reservas: 300},
  {titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", año: 1605, reservas: 50},
  {titulo: "La Odisea", autor: "Homero", año: -800, reservas: 120}
];
```

## Algoritmos Implementados

### 1. Selección (Ordenamiento por Año)

Este algoritmo ordena los libros por año de publicación en orden ascendente.

```javascript
// Algoritmo de selección para ordenar por año
function ordenarPorAño(libros) {
  let n = libros.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (libros[j].año < libros[minIndex].año) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [libros[i], libros[minIndex]] = [libros[minIndex], libros[i]];
    }
  }
  return libros;
}

// Llamada a la función para ordenar los libros por año
console.time("OrdenamientoPorAño");
console.log("\nOrden por año:", ordenarPorAño(libros));
console.timeEnd("OrdenamientoPorAño");
```

### 2. Inserción (Ordenamiento por Reservas)

Este algoritmo ordena los libros por número de reservas en orden descendente.

```javascript
// Algoritmo de inserción por reserva
function ordenarporReserva(libros) {
  for (let i = 1; i < libros.length; i++) {
    let currentBook = libros[i];
    let j = i - 1;
    while (j >= 0 && libros[j].reservas < currentBook.reservas) {
      libros[j + 1] = libros[j]; // Mueve los elementos hacia la derecha
      j--;
    }
    libros[j + 1] = currentBook; // Coloca el libro en posición correcta
  }
  return libros;
}

// Realizo el llamado
console.time("OrdenamientoPorReserva");
console.log("\nOrden por Reserva:", ordenarporReserva(libros));
console.timeEnd("OrdenamientoPorReserva");
```

### 3. Burbuja (Ordenamiento por Título)

Este algoritmo ordena los libros por título en orden alfabético ascendente.

```javascript
// Algoritmo de burbuja por título
function OrdenarPorTitulo(libros) {
  for (let i = 0; i < libros.length - 1; i++) {
    for (let j = 0; j < libros.length - i - 1; j++) {
      if (libros[j].titulo > libros[j + 1].titulo) {
        // Intercambia los libros
        let temp = libros[j];
        libros[j] = libros[j + 1];
        libros[j + 1] = temp;
      }
    }
  }
  return libros;
}

console.time("OrdenamientoPorTitulo");
console.log("\norden por Titulo:", OrdenarPorTitulo(libros));
console.timeEnd("OrdenamientoPorTitulo");
```

## Estructura de Datos: Arreglo Bidimensional

También se implementan los mismos algoritmos utilizando un arreglo bidimensional para representar la lista de libros.

```javascript
// Se define el arreglo de libros como objetos con título, año y reserva
let libros = [
  [{titulo: "El Principito", autor: "Antoine de Saint-Exupéry", año: 1943, reservas: 150}],
  [{titulo: "1984", autor: "George Orwell", año: 1949, reservas: 200}],
  [{titulo: "Cien Años de Soledad", autor: "Gabriel García Márquez", año: 1967, reservas: 300}],
  [{titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", año: 1605, reservas: 50}],
  [{titulo: "La Odisea", autor: "Homero", año: -800, reservas: 120}]
];
```

### Algoritmo de Burbuja (Adaptado para el arreglo bidimensional)

```javascript
// Algoritmo de burbuja para ordenar por título (bidimensional)
function OrdenarPorTitulo(libros) {
  for (let i = 0; i < libros.length - 1; i++) {
    for (let j = 0; j < libros.length - i - 1; j++) {
      if (libros[j][0].titulo.localeCompare(libros[j + 1][0].titulo) > 0) {
        // Intercambia los libros
        let temp = libros[j];
        libros[j] = libros[j + 1];
        libros[j + 1] = temp;
      }
    }
  }
  return libros;
}

// Llamada a la función
console.time("OrdenamientoPorTitulo");
console.log("\nOrden por Título:", OrdenarPorTitulo(libros));
console.timeEnd("OrdenamientoPorTitulo");
```

También se adaptaron los algoritmos de selección y inserción para el arreglo bidimensional de forma similar.

## Análisis de Rendimiento

Se utiliza `console.time()` y `console.timeEnd()` para medir el tiempo de ejecución de cada algoritmo y comparar su eficiencia.

### Tabla de comparación tiempo de ejecución (unidimensional)

| Criterio      | Algoritmo usado | Tiempo de ejecución (ms) |
|---------------|-----------------|--------------------------|
| Título de libro | Burbuja         | 0.89501953125          |
| Año           | Selección       | 0.94580078125          |
| Reservas      | Inserción       | 0.759033203125          |

### Tabla de comparación tiempo de ejecución (bidimensional)

| Criterio      | Algoritmo usado | Tiempo de ejecución (ms) |
|---------------|-----------------|--------------------------|
| Título        | Burbuja         | 0.498046875          |
| Año           | Selección       | 0.7548828125          |
| Reserva       | Inserción       | 0.741943359375           |

## Conclusión

El algoritmo de selección es más rápido en listas cortas, pero se vuelve más lento con listas más largas. El algoritmo de inserción es eficiente cuando la lista está parcialmente ordenada. El algoritmo de burbuja es generalmente más lento debido a su complejidad. Los tiempos de ejecución pueden variar dependiendo del tamaño del conjunto de datos.
```

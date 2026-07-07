// Los objetos te permiten almacenar colecciones de datos a través de nombres. Eso está bien.

// Pero a menudo necesitamos una colección ordenada, donde tenemos un 1ro, un 2do, un 3er elemento y así sucesivamente. Por ejemplo, necesitamos almacenar una lista de algo: usuarios, bienes, elementos HTML, etc.

// No es conveniente usar objetos aquí, porque no proveen métodos para manejar el orden de los elementos. No podemos insertar una nueva propiedad “entre” los existentes. Los objetos no están hechos para eso.

// Existe una estructura llamada Array (llamada en español arreglo o matriz/vector) para almacenar colecciones ordenadas.

// Los arrays son objetos, pero con un comportamiento especial.

// declaracion

let myArray = []; // la forma mas comun  de declararlo
let myArray2 = new Array();

// inicializacion

myArray = ["Goku", "Eren", "Ichigo", "Reg"]; // los elemetos del array estan enumerados desde el cero

console.log(myArray); // para visualizar todos los elementos del array
console.log(myArray[0]); // acceder al primer elemento
console.log(myArray[1]); // acceder al segundo elemento y asi sucesivamente

// reemplazar un elemento

myArray[1] = "Luffy"; // cambiamos el segundo elemento
console.log(myArray);

// tambien agregar elementos al final del array

myArray.push("Naruto");
console.log(myArray);

// tambien elimina el ultimo elemento del array

myArray.pop();
console.log(myArray);

// tambien elimina el primer elemento del array

myArray.shift();
console.log(myArray);

// tambien agregar elementos al inicio del array

myArray.unshift("Luffy");
console.log(myArray);

// la cuenta de la longitud

console.log(myArray.length); // 4 elementos

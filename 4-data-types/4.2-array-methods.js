// entendiendo splice

let arr = [1, 2, 3, 4, 5];
console.log(arr); // [1, 2, 3, 4, 5]

delete arr[1];
console.log(arr); // [1, empty, 3, 4, 5] significa que borro el elemento pero lo deja vacio

// el metodo correcto es con splice
arr.splice(1, 1); // en el primer argumento va la posicion y en el segundo cuantos elementos quiero borrar
console.log(arr); // [1, 3, 4, 5]

// con splice tambien podemos agregar elementos
arr.splice(1, 0, "a", "b"); // en el primer argumento va la posicion y en el segundo cuantos elementos quiero borrar y luego los que agrego
console.log(arr); // [1, "a", "b", 3, 4, 5]

arr.splice(-1, 1, "c"); // con -1 vamos al final dela array
console.log(arr); // [1, "a", "b", 3, 4, "c"]

// con slice es mas sencillo
console.log(arr);
let arr2 = arr.slice(1, 3); // en el primer argumento va la posicion de inicio y en el segundo la de fin y no incluye el fin pero si el inicio
console.log(arr2); // ["a", "b"]

// tambien sirve para agregar copias sin moficar la original

let arr3 = arr.slice();
console.log(arr === arr3); // false
console.log(arr3); // son iguales pero no son la misma referencia

// concat sirve para unir arrays

let arr4 = arr.concat(arr2);
console.log(arr4);

// tambien podemos usar el operador spread
let arr5 = [...arr, ...arr2];
console.log(arr5);

let array = [1, 2];

let arrayLike = {
    0: "something",
    length: 1,
};

console.log(array.concat(arrayLike)); // este metodo junta arrays sin modificarlos

arr.at(0); // devuelve el elemento en la posicion indicada

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

// Imagina que forEach es como un cartero que tiene que entregar un paquete en cada casa de una calle (el array). El cartero va casa por casa, golpea la puerta, hace algo (entrega el paquete) y pasa a la siguiente. No espera que la casa le devuelva nada; su único trabajo es hacer una acción por cada elemento.

// Por eso el texto dice que el resultado "se descarta e ignora": a forEach no le importa si la función de adentro intenta devolver un valor con un return. Su meta es solo actuar.

// La estructura (Las "herramientas" del cartero)
// Cuando usas forEach, la función que pones adentro puede recibir hasta tres datos automáticamente, aunque la mayoría de las veces solo vas a usar el primero o los dos primeros:

// item (La casa): El elemento actual que se está revisando.

// index (La dirección): El número de posición (el índice) de ese elemento, empezando desde el 0.

// array (La calle completa): El array original por si necesitas mirar todo el mapa.

const amigos = ["Ana", "Luis", "María"];

amigos.forEach((datoDelArray) => {
    console.log(`¡Hola, ${datoDelArray}!`);
});

// un caso detallado
const tareas = ["Comprar yerba", "Estudiar React", "Alimentar a los gatos"];

// Usamos el 'item' (la tarea) y el 'index' (la posición)
tareas.forEach((tarea, posicion) => {
    console.log(`${posicion + 1}. ${tarea}`); // ponemos +1 para que empiece en 1 y no en 0
});

// acumulacion
const precios = [1200, 3500, 850];
let total = 0;

precios.forEach((precio) => {
    total += precio; // Sumamos el precio actual al total
});

console.log(`El total a pagar es: $${total}`);

// El Inspector Simple: indexOf e includes
// Estos asistentes son ideales cuando buscas cosas simples (valores primitivos como números o texto). No sirven para buscar dentro de objetos complejos, solo miran lo que hay "por encima" en la caja.

// includes (El inspector que solo dice SÍ o NO): Le dices "¿Hay un paquete de yerba?". Él revisa rápido y solo te grita: true (sí está) o false (no está). No te dice dónde.

// indexOf (El inspector que te da la posición): Le preguntas "¿En qué número de caja está la yerba?". Empieza desde la caja 0. Si la encuentra en la caja 2, te devuelve 2. Si revisa todo el depósito y no la encuentra, te devuelve -1.

// lastIndexOf: Hace lo mismo que indexOf, pero es un inspector que empieza a buscar desde la última caja hacia atrás.

const herramientas = ["tijeras", "pala", "tijeras", "pala"];

// hay una pinza?
console.log(herramientas.includes("pinza")); // false

// En que cajas estan las tijeras?
console.log(herramientas.indexOf("tijeras")); // 0 primera aparicion
console.log(herramientas.lastIndexOf("tijeras")); // 3

// y las palas?
console.log(herramientas.indexOf("pala")); // 1 index busca de izquierda a derecha / principio a fin
console.log(herramientas.lastIndexOf("pala")); // 2 lastIndex busca de derecha a izquierda / fin a principio

// donde esta el taladro?
console.log(herramientas.indexOf("taladro")); // -1 no existe en el array

// la diferencia de include y index es que include te dice si existe o no y index te dice donde esta

// El Detective Avanzado: find y findIndex
// ¿Qué pasa si en cada caja hay una carpeta (un objeto {}) con muchos datos y quieres buscar por una condición? Por ejemplo: "Buscame la carpeta de la persona que tenga el ID 2". Aquí indexOf no sirve porque no sabe abrir carpetas. Necesitas a find.

// Le pasas a find una función (una regla o condición). El detective va caja por caja, abre la carpeta, evalúa tu regla:

// Si la regla da false, cierra la carpeta y pasa a la siguiente.

// En el momento exacto en que la regla da true, se detiene, saca esa carpeta y te la entrega entera.

// Si llega al final y nadie cumplió la condición, te devuelve undefined.

// findIndex: Hace exactamente lo mismo, pero en lugar de darte la carpeta entera, solo te dice: "La encontré en la caja número 3". Si no la encuentra, te devuelve -1.

const pacientes = [
    { id: 101, nombre: "Alan", edad: 16 },
    { id: 102, nombre: "Elena", edad: 25 },
    { id: 103, nombre: "Marcos", edad: 32 },
]; // arrays con objetos

// 1. Usamos el metodo find para obtener los datos completos del paciente con ID 102
const pacienteEncontrado = pacientes.find((paciente) => paciente.id === 102);
console.log(pacienteEncontrado);
// Resultado: { id: 102, nombre: "Elena", edad: 25 }

// 2. Usamos findIndex para saber en qué posición de la fila está el primer mayor de 30 años
const indiceAdulto = pacientes.findIndex((paciente) => paciente.edad > 30);
console.log(indiceAdulto);
// Resultado: 2 (Porque Marcos está en el índice 2)

// metodo filter

// Su regla de oro es:

// Si el elemento cumple la condición (true), lo mete adentro de una nueva bolsa (un nuevo array).

// Si no la cumple (false), lo deja afuera.

// Al final, te entrega esa bolsa nueva con todos los que pasaron la prueba. Si nadie la pasó, te entrega la bolsa vacía [].

const comida = [
    { id: 1, nombre: "Pizza", precio: 10, comestible: true },
    { id: 2, nombre: "Hamburguesa", precio: 12, comestible: true },
    { id: 3, nombre: "Papas fritas", precio: 8, comestible: true },
    { id: 4, nombre: "Llnta", precio: 5, comestible: false },
];

const soloComestibles = comida.filter((comida) => comida.comestible === true); // devuelve los que cumplan la funcion y los que no los descarta
console.log(soloComestibles);

console.log(typeof soloComestibles);
// si hubiera ocupado find este solo me devolveria un objeto y no un array

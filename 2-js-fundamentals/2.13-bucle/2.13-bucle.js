//while (condition) {
// código
// llamado "cuerpo del bucle"
//}

// while se ejecuta solo si la condicicion sea verdadera

let i = 0;
while (i < 3) {
  // muestra 0, luego 1, luego 2
  console.log(i);
  i++;
}

//do {
// cuerpo del bucle
//} while (condition);

//do...while se ejecuta siempre y despues evalua la condicion

i = 0;
do {
  console.log(i);
  i++;
} while (i < 3);

// bucle for se ocupa mas

//for (begin; condition; step) { // (comienzo, condición, paso)
// ... cuerpo del bucle ...
//}

for (let i = 0; i < 3; i++) {
  // muestra 0, luego 1, luego 2
  console.log(i);
}

// let i = 0 inicializacion de variable en 0
// i < 0 condicion true para ejecutar
// i++ incremental

// se sale de un bucle cuando la condicion se vuelve false

let sum = 0;

while (true) {
  let value = ("Ingresa un número", "");

  if (!value) break; //salir de un bucle

  sum += value;
}
console.log("Suma: " + sum);

// break se utiliza para salir de un bucle

// continue se utiliza para saltar a la siguiente iteracion

for (let i = 2; i < 10; i++) {
  if (i % 2 == 0) continue;
  console.log(i);
} // esto imprime 1, 3, 5, 7, 9 porque se salta a la siguiente iteracion

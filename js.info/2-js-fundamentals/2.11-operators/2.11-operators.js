// operador || OR busca 1 verdadero y devuelve verdadero
console.log(true || true); // true (verdadero)
console.log(false || true); // true
console.log(true || false); // true
console.log(false || false); // false (falso)

if (1 || 0) {
  // Funciona como if( true || false )
  console.log("¡valor truthy!");
}

let hour = 10;

if (hour < 10 || hour > 18) {
  console.log("La oficina esta cerrada.");
} else console.log("estamos abierto");

true || console.log("not printed");
false || console.log("printed");
//En la primera línea, el operador OR || detiene la evaluación inmediatamente después de ver que es verdadera, por lo que la alerta no se ejecuta.

// operador && AND busca 1 falso y devuelve falso

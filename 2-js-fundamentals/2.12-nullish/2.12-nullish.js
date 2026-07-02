// El operador Nullish Coalescing (fusión nula) se escribe con dos signos de interrogación ??. Sirve para asignar un valor por defecto solo cuando una variable es verdaderamente "nula" o inexistente.

let puntaje = 0;

// Usando OR (||) - ERROR ❌
// Como 0 es considerado "falso" en JS, el operador || salta al valor por defecto.
let resultadoOR = puntaje || 10;
console.log(resultadoOR); // Devuelve: 10 (Perdiste el puntaje de 0)

// Usando Nullish Coalescing (??) - CORRECTO
// Como 0 NO es null ni undefined, el operador ?? respeta el 0.
let resultadoNullish = puntaje ?? 10;
console.log(resultadoNullish); // Devuelve: 0

let user;

console.log(user && "Anonymous"); // undefined
console.log(user || 0); // 0
console.log(user || "Anonymous"); // si fuera 0 se mostraria el 0
console.log(user ?? "Anonymous"); // Anonymous (user es undefined)
console.log(typeof user);

// ?? respeta el 0, null y undefined

let firstName = undefined;
let lastName = null;
let nickName;

// Muestra el primer valor definido:
console.log(firstName ?? lastName ?? nickName ?? "Anonymous2"); // Supercoder porque se cumple el ultimo valor definido

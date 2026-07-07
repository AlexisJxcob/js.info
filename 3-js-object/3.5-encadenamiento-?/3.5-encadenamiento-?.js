// El encadenamiento opcional ?. detiene la evaluación y devuelve undefined si el valor antes del ?. es undefined o null.

// De aquí en adelante en este artículo, por brevedad, diremos que algo “existe” si no es null o undefined.

// En otras palabras, value?.prop:

// funciona como value.prop si value existe,
// de otro modo (cuando value es undefined/null) devuelve undefined.

let user = null;

console.log(user?.address); // undefined
console.log(user?.address.street); // undefined

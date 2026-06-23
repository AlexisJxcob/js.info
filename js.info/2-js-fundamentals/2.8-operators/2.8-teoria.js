// unario
let x = 1;

x = -x;
alert(x); // -1, se aplicó negación unaria

// binario

let y = 1;
let z = 3;
alert(y + z); // 4, se aplicó suma binaria

// operaciones aritmeticas
// Suma +,
// Resta -,
// Multiplicación *,
// División /,
// Resto %,
// Exponenciación **.

// resto
alert(5 % 2); // 1, es el resto de 5 dividido por 2
alert(8 % 3); // 2, es el resto de 8 dividido por 3
alert(8 % 4); // 0, es el resto de 8 dividido por 4

// Exponenciación
alert(2 ** 3); // 8, 2 elevado a la 3
alert(3 ** 3); // 27, 3 elevado a la 3

// precedencia
alert(2 + 3 * 4); // 14
alert((2 + 3) * 4); // 20

// conversion

// Sin efecto en números
let x = 1;
alert(+x); // 1

let y = -2;
alert(+y); // -2

// Convierte los no números
alert(+true); // 1
alert(+""); // 0

let apples = "2";
let oranges = "3";

alert(apples + oranges); // "23", el binario suma concatena las cadenas

// ambos valores convertidos a números antes del operador binario suma
alert(+apples + +oranges); // 5

// la variante más larga
alert(Number(apples) + Number(oranges)); // 5

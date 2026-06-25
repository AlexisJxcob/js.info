// Una sentencia switch puede reemplazar múltiples condiciones if.
// Provee una mejor manera de comparar un valor con múltiples variantes.

let a = 1 + 2;

switch (a) {
  case 3:
    console.log("Muy pequeño");
    break;
  case 4:
    console.log("¡Exacto!");
    break;
  case 5:
    console.log("Muy grande");
    break;
  default:
    console.log("Desconozco estos valores");
}

// Paso 1: La Evaluación Inicial (switch (argumento))
// JavaScript toma el valor que está entre paréntesis. En tu código, a vale 3. El programa se guarda ese 3 en la memoria y dice: "Busquemos quién coincide con esto".

// Paso 2: La Comparación Estricta (case X:)
// El programa empieza a bajar y a comparar el valor de a con cada case uno por uno, de arriba hacia abajo.

// Regla de oro: La comparación que hace es estricta (equivale a usar el triple igual ===). Esto significa que tanto el valor como el tipo de dato tienen que ser idénticos (un 3 de tipo número no coincidirá con un "3" de tipo string).

// Paso 3: La Coincidencia y Ejecución
// En tu ejemplo, el primer intento es case 3:. Como 3 === 3 es verdadero, JavaScript entra a ese bloque y ejecuta la instrucción: console.log("Muy pequeño");. Es por eso que en la consola de tu imagen abajo se lee perfectamente ese mensaje.

// Paso 4: El Freno de Mano (break;)
// La palabra clave break es vital. Le dice a JavaScript: "¡Detente! Ya encontramos el correcto, sal del switch inmediatamente".

// ¿Qué pasa si lo olvidas? Si quitaras el break del case 3, JavaScript seguiría ejecutando el código del case 4 y case 5 de manera consecutiva, sin importar que ya no coincidan los números.

// Paso 5: El Plan de Respaldo (default:)
// Si en lugar de 1 + 2 hubieras puesto 1 + 10 (resultado 11), JavaScript recorrería el case 3, case 4 y case 5, viendo que ninguno coincide. Al no encontrar alternativas, saltaría directamente al bloque default:. Es el equivalente al else final de un condicional.

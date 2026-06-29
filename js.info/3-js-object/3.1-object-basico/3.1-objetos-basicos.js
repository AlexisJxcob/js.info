// ==========================================
// 1. CREACIÓN Y SINTAXIS BÁSICA
// ==========================================

// Forma moderna y estándar ("Objeto Literal")
const user = {
    name: "John",
    age: 30,
    isAdmin: true,
    "likes birds": true, // Claves con espacios requieren comillas (simples o dobles)
    eliminar: true,
};

// Nota: Evita usar 'new Object();' en el día a día; el objeto literal {} es más limpio y rápido.

// ==========================================
// 2. LECTURA Y MANIPULACIÓN DE PROPIEDADES
// ==========================================

// Acceso estándar (Notación de punto)
console.log(user.name); // -> "John"

// Acceso dinámico o con espacios (Notación de corchetes)
console.log(user["likes birds"]); // -> true

// Agregar o modificar propiedades
user.apodo = "Alexis"; // Se añade dinámicamente al objeto

// Eliminar propiedades
delete user.eliminar;

// ==========================================
// 3. VALIDACIONES Y METADATOS (Comprobaciones)
// ==========================================

// Comprobar existencia mediante el operador 'in' (Forma recomendada)
console.log("likes birds" in user); // -> true
console.log("blabla" in user); // -> false

// Comprobar existencia comparando con 'undefined'
// (Da 'true' si la propiedad NO existe en el objeto)
console.log(user.algoQueNoExiste === undefined); // -> true

// Obtener el total de propiedades (Transforma las claves en un Array para medir su longitud)
console.log(Object.keys(user).length);

// Evitar asignaciones accidentales a propiedades del sistema (__proto__)
let obj = {};
obj.__proto__ = 5; // __proto__ espera un objeto o null, no un número entero.

// ==========================================
// 4. ATAJOS Y DINAMISMO (Clave para React)
// ==========================================

// Atajo de propiedad (Property Shorthand)
// Si el nombre de la variable coincide con la clave, no se duplica (name: name)
function makeUserShort(name, age) {
    return { name, age };
}
const userShort = makeUserShort("John", 30);

// Propiedades Calculadas (Computed Properties)
// Los corchetes evalúan el CONTENIDO de la variable para usarlo como nombre de la clave
function obtenerFrutaSeleccionada() {
    return "manzana";
}
let fruta = obtenerFrutaSeleccionada();

let carrito = {
    [fruta]: 5, // Se traduce como manzana: 5
};

// ==========================================
// 5. COPIA E INMUTABILIDAD
// ==========================================

// Copia superficial (Shallow Copy) tradicional
let userCopyOld = Object.assign({}, user);

// Copia moderna con Operador Spread (Práctica estándar en React)
let userCopyNew = { ...user }; // con esta forma podemos modificar la copia sin afectar al original

// ==========================================
// 6. BUCLE Y ORDEN DE LAS CLAVES
// ==========================================

const usuarioParaBucle = { name: "Jacob", age: 20 };

// Bucle for..in para iterar sobre las llaves de un objeto
for (let key in usuarioParaBucle) {
    console.log(key); // Imprime la clave (name, age)
    console.log(usuarioParaBucle[key]); // Imprime el valor usando notación dinámica (Jacob, 20)
}

// Comportamiento del orden en claves numéricas:
// JavaScript ordena automáticamente las claves numéricas de forma ascendente.
let codes = { 49: "Germany", 1: "Argentina" }; // Se ordenará internamente como 1, 49.

// Solución para mantener el orden de inserción: Transformar la clave en string (ej: usando "+")
let codes2 = { "+49": "Germany", "+1": "Argentina" };
for (let code in codes2) {
    console.log(code); // Mantiene el orden: "+49", "+1"
}

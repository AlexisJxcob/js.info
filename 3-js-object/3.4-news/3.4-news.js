// Constructor, operador "new"
// El sintaxis habitual {...} nos permite crear un objeto. Pero a menudo necesitamos crear varios objetos similares, como múltiples usuarios, elementos de menú.

// Función constructora
// La función constructora es técnicamente una función normal. Aunque hay dos convenciones:

// Son nombradas con la primera letra mayúscula.
// Sólo deben ejecutarse con el operador "new".

function User(name) {
    this.name = name;
    this.isAdminm = true;
}

let user = new User("Alexis");
console.log(user);

// Cuando una función es ejecutada con new, realiza los siguientes pasos:

// Se crea un nuevo objeto vacío y se asigna a this.
// Se ejecuta el cuerpo de la función. Normalmente se modifica this y se le agrega nuevas propiedades.
// Se devuelve el valor de this.

user = new User("Al");
console.log(user);

// Dentro de una función, podemos verificar si ha sido llamada con o sin el new utilizando una propiedad especial: new.target.

// En las llamadas normales devuelve undefined, y cuando es llamada con new devuelve la función:

function User2(name) {
    if (!new.target) {
        // si me ejecutas sin new
        return new User2(name); // ...Agregaré new por ti
    }
    this.name = name;
}

let user2 = User2("John"); // redirige llamado a new User
console.log(user2.name); // John

// Normalmente, los constructores no tienen una sentencia return. Su tarea es escribir todo lo necesario al this, y automáticamente este se convierte en el resultado.

// Pero si hay una sentencia return, entonces la regla es simple:

// Si return es llamado con un objeto, entonces se devuelve tal objeto en vez de this.
// Si return es llamado con un tipo de dato primitivo, es ignorado.
// En otras palabras, return con un objeto devuelve ese objeto, en todos los demás casos se devuelve this.

// Por ejemplo, aquí return anula this al devolver un objeto:

function BigUser() {
    this.name = "John";

    return { name: "Godzilla" }; // <-- devuelve este objeto pero si return esta vacio devuelve this
}

console.log(new BigUser().name); // Godzilla, recibió ese objeto

// === Métodos en constructor ===
// Utilizar constructor de funciones para crear objetos nos da mucha flexibilidad. La función constructor puede tener argumentos que definan cómo construir el objeto y qué colocar dentro.

// Por supuesto podemos agregar a this no sólo propiedades, sino también métodos.

// Por ejemplo, new User(name) de abajo, crea un objeto con el name dado y el método sayHi:

function UserFinal(name) {
    this.name = name; // this.name = "nombre que se escriba en el input"
    this.sayHi = function () {
        // this.sayHi = function()
        console.log("Mi nombre es: " + this.name);
    };
}

let metodoEnConstructor = new UserFinal("Alexis");

metodoEnConstructor.sayHi(); // Mi nombre es: John

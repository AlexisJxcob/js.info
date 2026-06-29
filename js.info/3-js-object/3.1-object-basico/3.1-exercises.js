// Hola, objeto
// importancia: 5
// Escribe el código, una línea para cada acción:

// Crea un objeto user vacío.

let user = {};
console.log(user); // array vacio

// Agrega la propiedad name con el valor John.

user.name = "John";
console.log(user); // {name: "John"}

// Agrega la propiedad surname con el valor Smith.

user.surname = "Smith";
console.log(user); // {name: "John", surname: "Smith"}

// Cambia el valor de name a Peter.

user.name = "Peter";
console.log(user); // {name: "Peter", surname: "Smith"}

// Remueve la propiedad name del objeto.

// delete user.name;
// console.log(user); // {surname: "Smith"}

// Verificar los vacíos
// importancia: 5
// Escribe la función isEmpty(obj) que devuelva el valor true si el objeto no tiene propiedades, en caso contrario false.

// Debería funcionar así:

let schedule = {};

function isEmpty(obj) {
    // Si el bucle entra aunque sea una sola vez, significa que hay al menos una propiedad
    for (let key in obj) {
        return false;
    }
    // Si el bucle terminó y nunca entró, el objeto está vacío
    return true;
}

//  Ahora la ejecutamos y envolvemos la llamada en un console.log:

console.log(isEmpty(schedule)); // 👈 Esto va a imprimir: true porque esta empty

// Probemos ahora agregando una propiedad para ver si cambia a false:
schedule["8:30"] = "Hora de entrenar";

console.log(isEmpty(schedule)); // 👈 Esto va a imprimir: false porque no esta empty

// Suma de propiedades de un objeto
// importancia: 5
// Tenemos un objeto que almacena los salarios de nuestro equipo:

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};

function sumSalaries(salaries) {
    let sum = 0;
    for (let key in salaries) {
        sum += salaries[key];
    }
    return sum;
}
console.log(sumSalaries(salaries));

// reto extra = obj vacio

let emptySalaries = {};

function sumEmptySalaries(emptySalaries) {
    let sum = 0;
    for (let key in emptySalaries) {
        sum += emptySalaries[key];
    }
    return sum;
}

console.log(sumEmptySalaries(emptySalaries));

// Multiplicar propiedades numéricas por 2
// importancia: 3
// Crea una función multiplyNumeric(obj) que multiplique todas las propiedades numéricas de obj por 2.

// Por ejemplo:

// Antes de la llamada
let menu = {
    width: 200,
    height: 300,
    title: "Mi menú",
};

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == Number);
        obj[key] *= 2;
    }
    return obj; // esto en caso de que no haya propiedades numéricas devuelve el objeto
}

console.log(multiplyNumeric(menu));

// Después de la llamada
menu = {
    width: 400,
    height: 600,
    title: "Mi menú",
};

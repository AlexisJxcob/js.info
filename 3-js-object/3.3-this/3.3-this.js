let user = {
    name: "John",
    age: 30,
};

user.sayHi = function () {
    console.log("hola");
};

user.sayHi();

// forma abreviada para metodos (function)

let userNormal = {
    name: "John",
    age: 30,
    sayHi: function () {
        console.log("hola");
    },
};

userNormal.sayHi();

let userBreve = {
    name: "Alexis",
    sayGoodbye() {
        console.log("adios");
    },
};

userBreve.sayGoodbye();

// this en metodos
// this apunta al objeto que se esta ejecutando el metodo

let userThis = {
    name: "John",
    age: 30,
    sayHi() {
        console.log(this.name); // apunta al objeto anterior es como poner user.name
    },
};

userThis.sayHi();

console.log(typeof this); // object

// “this” no es vinculado
// En JavaScript, la palabra clave this se comporta de manera distinta a la mayoría de otros lenguajes de programación. Puede ser usado en cualquier función, incluso si no es el método de un objeto.

// No hay error de sintaxis en el siguiente ejemplo:

// function sayHi() {
//   console.log( this.name );
// }

user = { name: "Jacob" };
admin = { name: "Admin" };

function sayHi() {
    console.log(this.name);
}

// usa la misma función en dos objetos
user.f = sayHi; // creamos la propiedad f con la function de sayhi en ambos
admin.f = sayHi;

console.log(user.f === admin.f); // true (cuidado con la igualdad)

// estos llamados tienen diferente "this"
// "this" dentro de la función es el objeto "antes del punto"
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

admin["f"](); // Admin (punto o corchetes para acceder al método, no importa)
user.f(); // Jacob

// arrow function no tiene "this"
let userArrow = {
    firstName: "Debbie",
    sayHi() {
        let arrow = () => console.log(this.firstName);
        arrow();
    },
};

userArrow.sayHi();

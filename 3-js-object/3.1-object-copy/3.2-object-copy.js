let user = { name: "John" };

let admin = user; // copia la referencia

console.log(admin.name);

admin.name = "Alexis";

console.log(user.name);

// si se cambia el admin se cambia el user tambien

// comparacion por referencia

let a = {};
let b = {};

console.log(a == b);

// anotacion

const c = {
    user: "John",
    admin: "Alexis",
};

c.user = "Alexis";
console.log(c); // se puede modificar la referencia del objeto aunque sea const

// Clonación y mezcla, Object.assign

user.admin = true;
user.age = 25;

let clonar = {
    clonado: false,
}; // objeto vacio

console.log(clonar);

for (let key in user) {
    // let key in user significa que busca las claves en user
    clonar[key] = user[key];
}

clonar.clonado = true;
console.log(clonar);
console.log(user);

// ahora clonado es un objeto diferente a user

// Object.assign

// Object.assign(dest, ...sources)
// El primer argumento dest es el objeto destinatario.
// Los argumentos que siguen son una lista de objetos fuentes.
// Esto copia las propiedades de todos los objetos fuentes dentro del destino dest y lo devuelve como resultado

// Por ejemplo, tenemos el objeto user, agreguemos un par de permisos:
let userAssign = {
    name: "John",
};

let permissions1 = { canView: true };
let permissions2 = { canEdit: false };
let permissions3 = { canDelete: true };
let login = { canLogin: true };

// copia todas las propiedades desde permissions1 y permissions2 en user
Object.assign(userAssign, permissions1, permissions2);

// ahora es user = { name: "John", canView: true, canEdit: false }
console.log(userAssign.name); // John
console.log(userAssign.canView); // true
console.log(userAssign.canEdit); // false

// practica mia

Object.assign(userAssign, permissions3, login); // asigna todas las propiedades de permissions3 y login en userAssign

console.log(userAssign.canDelete); // true
console.log(userAssign.canLogin); // true

// clonacion simple con assign

let clonacionAssign = Object.assign({}, userAssign);

console.log(clonacionAssign);
delete clonacionAssign.canLogin;
console.log(clonacionAssign);
console.log(userAssign); // solo se modifica la copia

// structured clone

let userStructured = {
    name: "John",
    sizes: {
        height: 182,
        width: 50,
    },
};

let cloneStructured = structuredClone(userStructured); // es una function de Javascript

console.log(userStructured);
console.log(cloneStructured);

console.log(userStructured.sizes === cloneStructured.sizes); // false, objetos diferentes

// ahora user y clone están totalmente separados
userStructured.sizes.width = 60; // cambia una propiedad de un lugar
console.log(userStructured.sizes.width); // 60
console.log(cloneStructured.sizes.width); // 50, no están relacionados

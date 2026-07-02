function makeUser() {
    return {
        name: "John",
        ref: this,
    };
}

let user = makeUser();

console.log(user.ref.name); // ¿Cuál es el resultado?

// Crea un objeto calculator con tres métodos:

// read() pide dos valores y los almacena como propiedades de objeto con nombres a y b.
// sum() devuelve la suma de los valores almacenados.
// mul() multiplica los valores almacenados y devuelve el resultado.

let calculator = {
    read(valorA, valorB) {
        this.a = valorA; // this hace referncia a la propiedad del objeto que en este caso seria calculator
        this.b = valorB;
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    },
};

calculator.read(2, 3);
console.log(calculator.sum()); // 5
console.log(calculator.mul()); // 6

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function () {
        // muestra el peldaño actual
        console.log(this.step);
        return this;
    },
};
// Si ahora necesitamos hacer varios llamados en secuencia, podemos hacer algo como esto:

ladder.up(); // 1
ladder.up(); // 2
ladder.down(); // 1
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0
//Modifica el código de “arriba” up, “abajo” down y “mostrar peldaño” showStep para hacer los llamados encadenables. Así:

ladder.up().up().down().showStep().down().showStep(); // muestra 1 luego 0

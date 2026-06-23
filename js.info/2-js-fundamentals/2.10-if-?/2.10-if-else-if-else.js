let edad = 17;

if (edad >= 18) {
  console.log("Eres mayor de edad");
} else if (edad >= 13) {
  console.log("Eres adolescente");
} else {
  console.log("Eres menor de edad");
}

// operador ternario ?
// let result = condicion ? verdadero : falso

let accessAllowed = edad > 18 ? true : false;
console.log(accessAllowed);
accessAllowed = edad > 18 ? "eres mayor" : "eres menor";
console.log(accessAllowed);

// multiples "?"

edad = 13;
let accessAllowed2 =
  edad > 100
    ? "eres muy viejo"
    : edad > 18
      ? "eres mayor de edad"
      : edad > 12
        ? "eres adolescente"
        : "eres menor de edad";

console.log(accessAllowed2);

let message;
let login;
if (login == "Empleado") {
  message = "Hola";
} else if (login == "Director") {
  message = "Felicidades";
} else if (login == "") {
  message = "Sin sesión";
} else {
  message = "";
}

message =
  login == "Empleado"
    ? "Hola"
    : login == "Director"
      ? "Felicidades"
      : login == ""
        ? "Sin sesión"
        : "crea una cuenta";
console.log(message);

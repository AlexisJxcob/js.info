function showMessage() {
  console.log("¡Hola a todos!");
}

showMessage();

function varLocal() {
  let message = "¡Hola a variable local!";
  console.log(message); // esta variable solo existe dentro de la función
}
//console.log(message); message is not defined
varLocal();

let userName = "Juan";

function varExterna() {
  userName = "Jacob"; // Cambió la variable externa

  let message = `Hola ${userName}`;
  console.log(message);
}

console.log(userName); // Juan antes de llamar la función

varExterna();

console.log(userName); // Jacob, el valor fué modificado por la función

function Parametros(from, text = "Sin texto") {
  // parámetros: from, text
  console.log(from + ": " + text);
} // lo que va dentro de () son los parámetros y la funcion de estos es el cuerpo

Parametros("Ann");
Parametros("Ann", "¡Hola!"); // Ann: ¡Hola! (*)
Parametros("Ann", "¿Cómo estás?"); // Ann: ¿Cómo estás? (**)
Parametros("Parametros from", "Parametros text");

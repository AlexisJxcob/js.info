function showMessage() {
  console.log("¡Hola a todos!");
}

function showMessage2() {
  console.log("¡Hola a todos!");
  console.log("¡Hola a desde la funcion del kumara k552!");
}

showMessage();
showMessage2();
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
  // text = "Sin texto" es el texto por defecto
  // parámetros: from, text
  console.log(from + ": " + text);
} // lo que va dentro de () son los parámetros y la funcion de estos es el cuerpo

Parametros("Ann");
Parametros("Ann", "¡Hola!"); // Ann: ¡Hola! (*)
Parametros("Ann", "¿Cómo estás?"); // Ann: ¿Cómo estás? (**)
Parametros("Parametros from", "Parametros text");

console.log("mi primer console log desde el kumara k552");

function sum(a, b) {
  return a + b; // el return lo que hace es devolver el resultado o lo que se va a mostrar
}
function mul(a, b) {
  return a * b; // la funcion se detiene cuando encuentra un return
}

let result = sum(1, 2);
console.log(result); // 3

result = mul(2, 3);
console.log(result); // 6

function checkAge(age) {
  if (age > 18) {
    return true; // puede haber varios return en una function
  } else {
    return "¿Tienes permiso de tus padres?";
  }
}

let age = ("¿Qué edad tienes?", 18);

if (checkAge(age)) {
  console.log("Acceso otorgado");
} else {
  console.log("Acceso denegado");
}

min(2, 5) == 2;
min(3, -1) == -1;
min(1, 1) == 1;

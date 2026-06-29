// Reescribe la función utilizando '?' o '||'
// importancia: 4
// La siguiente función devuelve true si el parámetro age es mayor que 18.

// De lo contrario, solicita una confirmación y devuelve su resultado.

function checkAge(age) {
  if (age > 18) {
    return console.log(true);
  } else {
    return console.log("¿Tienes permiso de tus padres?");
  }
}

checkAge(20);

function checkAge2(age) {
  console.log(typeof age); // number esta dentro del funct visible
  return age > 18 ? console.log(true) : console.log("¿Tienes permiso de tus padres?");
}

checkAge2(17);
console.log(typeof age); // undefined esta dentro del funct visible

// Reescribe la función utilizando '||'

function checkAge3(age) {
  return age >= 18 || console.log("¿Tienes permiso de tus padres?");
}

checkAge3(17); // no se imprime
checkAge3(19);

// Función min(a, b)
// importancia: 1
// Escriba una función min(a,b) la cual devuelva el menor de dos números a y b.

function min(a, b) {
  return a < b ? console.log(a) : console.log(b);
}

min(2, 5);
min(3, -1);
min(1, 1);

// Escriba la función pow(x,n) que devuelva x como potencia de n. O, en otras palabras, multiplique x por si mismo n veces y devuelva el resultado.

// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1

function pow(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x; // esto hace x = x * x
  }
  return console.log(result);
}

pow(3, 2);
pow(3, 3);
pow(1, 100);

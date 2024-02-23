// JAVASCRIPT es un lenguaje de programación que forma parte de las tecnologías básicas de la World Wide Web, junto con HTML y CSS. Nos permite añadir interactividad a las páginas,
//  también se utiliza en otros entornos que no son navegadores, como Node.js para escribir código del lado del servidor en JavaScript, Electron para escribir aplicaciones de escritorio, React Native para aplicaciones móviles, etc.

// ---------------------------------------------------

// JavaScript fue creado inicialmente por Brendan Eich, en 1995. fue llamado Mocha por el creador, que más tarde fue renombrado LiveScript. 
// En 1996, aproximadamente un año después del lanzamiento, NetScape decidió renombrarlo a JavaScript

// --------------------------------------------------

// Versiones de JAVASCRIPT : JavaScript, inventado por Brendan Eich, alcanzó el estatus de estándar ECMA en 1997 y adoptó el nombre oficial de ECMAScript. 
// Este lenguaje ha evolucionado a través de varias versiones, a saber, ES1, ES2, ES3, ES5 y la transformadora ES6. 

// ---------------------------------------------------

// Para almacenar y representar esta información en el código base de JavaScript, utilizamos variables. Una variable es un contenedor de un valor.

// Para usar variables en JavaScript, primero debemos crearlas, es decir, declarar una variable. Para declarar variables, utilizamos una de las palabras clave var, let o const.



// Var ya no se usa mucho, pero seguramente en algun archivo viejo van a encontrar estas variables que son generalmente globales.


// Las constantes están limitadas por bloques, al igual que las variables declaradas con la palabra clave let.
//  El valor de una constante no puede cambiarse mediante reasignación (es decir, utilizando el operador de asignación),
//  y no puede volver a declararse (es decir, mediante una declaración de variable). 
// Sin embargo, si una constante es un objeto o una matriz, sus propiedades o elementos pueden actualizarse o eliminarse.

// let declara una variable local de bloque y, opcionalmente, la inicializa con un valor.

// EJEMPLO:

// var holamundo = holaMundo;
// let holamundo = holaMundo;
// const holamundo = holaMundo;

// --------------------------------------------

// JavaScript Hoisting se refiere al proceso mediante el cual el intérprete parece mover la declaración de funciones,
//  variables o clases a la parte superior de su alcance, antes de la ejecución del código. 
// (se declara la variable y despues se ejecuta)

// ---------------------------------------------

// El objeto JavaScript es una estructura de datos que nos permite tener pares clave-valor;
//  entonces podemos tener claves distintas y cada clave se asigna a un valor que puede ser de cualquier tipo de datos JavaScript. 

// EJEMPLO: const javier = {nombre:"Javier"
// Edad:30
// Pais: "Argentina"
// Ciudad: "Buenos Aires" } ;

// --------------------------------------------

// // Tipos de datos

// El tipo de datos se refiere al tipo de datos que puede contener una variable de JavaScript.
//  Hay siete tipos de datos primitivos en JavaScript (Número, BigInt, Cadena, Booleano, Nulo, Indefinido y Símbolo). Los objetos no son primitivos.

// EJEMPLOS:

// let Numero = 30 ;
// let String ="Javier" ;
// let esVerdadero = true ;
// let esFalso = False ;
// let miArray = [1,2,3,4] ;
// let valorNulo = null ;
// let simbolo = Symbol("miSimbolo");

//---------------------------------------------

// Metodos de Strings: Permite realizar operaciones de transformacion sobre valores almacenados.

// let nombre = Javier;
// console.log (nombre.toLowerCase)
// ƒ toLowerCase() { [native code] }

// console.log (nombre.length)
// 6

// Metodos de numeros: Igual que los metodos Strings pero esta vez con variables numerales. 

// // let numero = 21000
//  console.log (numero.toFixed(2))
//   21000.00
// // let otroNum = 123455
// console.log (otroNum.toLocaleString())
// 123.455


// Funcion Nativa de JAVASCRIPT que convierte un texto a un valor numerico del tipo entero.
// let unNumeroMas = 123321.00
// console.log(parseInt(unNumeroMas))

// Funcion nativa de JAVASCRIPT que es parecida a la ParseInt pero respeto los puntos de los numeros.

// let unNumeroMas = 123321.01
// console.log(parseFloat(unNumeroMas))

// let nombre = "Javier"
// nombre.trim (nombre); // "Javier" sin espacios.

// -------------------------------

// Operadores de comparación

// Los operadores de comparación se utilizan en declaraciones lógicas para determinar la igualdad o diferencia entre variables o valores.

// == es igual a parecidos.

// ejemplo: 
// x == 5
// y == "5"
// Los 2 resultados son verdaderos ya que el numero 5 aparece mas alla que sea un numero o un string, JavaScrpit toma como resultado correcto
// el numero 5

// === Igual a de manera instricta

// ejemplo:
// let d = 5;
// let e = '5';

// let sonIguales = (d === e);

// es falso

// != Desigualdad

// Ejemplo: 
// let x = 8 
// let y = "8" 
// let e = (x != y);
// console.log (e);

// es falso

// !== Desigualdad instricta

// let x = 8 
// let y = "8" 
// let e = (x !== y);
// console.log (e);
// true

// <, =<, >, >= mayor o igual, menor o igual

// ejemplo

// let num1 = 5
// let num2 = 10
// let resultado = (num1>num2);
// console.log (resultado);
// falso

// Operador OR || si una de la 2 condiciones se cumple, se ejecuta. 

// ejemplo:

// let a = 15;
// let b = 8;
// let resultado = (a > 10 || b < 5);

// es correcto ya que a es mayor a 10.

// AND && si las 2 condiciones se cumplen, se ejecuta, sino no.

// let x = 5;
// let y = 10;
// let resultado = (x < 10 && y > 5);

// verdadero ya que las 2 se cumplen

// ///////////////////////////////////////////////////////////////////////////////////

// Interacción: alert, prompt, confirm

// Alert

// Ejemplo : alert ("Hello");

// Prompt: La funcion prompt acepta dos argumentos

// Ejemplo: resultado = prompt ("¿Cual es tu nombre?", [nombre]);

// Muestra una ventana modal con un mensaje de texto, un campo de entrada para el visitante y los botones OK/CANCELAR.

// let age = prompt ('¿Cuántos años tienes?', 100);

// alert(`Tienes ${age} años!`); //Tienes 100 años!

// La función confirm muestra una ventana modal con una pregunta y dos botones: OK y CANCELAR.

// let isBoss = confirm("¿Eres el jefe?");

// alert( isBoss ); // true si se pulsa OK

// ///////////////////////////////////////////////


// El operador typeof devuelve el tipo de una variable, objeto, función o expresión:

// EJEMPLOS:

// "'Javier' is " + typeof "Javier" = Javier is string
// "3.14 is " + typeof 3.14 = 3.14 is number
// false is " + typeof false = false is boolean
// [1, 2, 3, 4] is " + typeof [1, 2, 3, 4] = [1, 2, 3, 4] is object
// {name:'Javier', age:30} is " + typeof {name:'John', age:30} = {name:'Javier', age:30} is object

// ---------------------------------------------

// ARRAY

// Las array son objetos que almacenan una colección de elementos y se pueden asignar a una variable. 
// Tienen sus métodos que pueden realizar operaciones en la misma.

// ejemplos

// let arr = [1, 2, 3, 4];
// let javier = ["Alto", "Delgado", 30, "Junio", 1993];

// Para pedir un elemento de una Array es:

// let arr = [1, 2, 3, 5];

// let tercerElemento = arr[2];

// console.log (tercerElemento);

// 2.

// En este ejemplo, miArray[2] se utiliza para acceder al tercer elemento del array, ya que los índices en JavaScript comienzan desde 0.

// Map

// Map (), es una función de los arrays en JavaScript que se utiliza para transformar cada elemento de un array según una función dada,
//  y devuelve un nuevo array con los resultados de aplicar la función a cada elemento.

// Ejemplos:

// let numeros = [1, 2, 3, 4, 5];
// let numerosDuplicados = numeros.map(function(numero) {
//   return numero * 2;
// });
// console.log(numerosDuplicados);
// (5)  [2, 4, 6, 8, 10];


//let nombres = ["Juan", "María", "Carlos", "Ana"];
// let longitudesDeNombres = nombres.map(function(nombre) {
//   return nombre.length;
// });
// console.log(longitudesDeNombres);

// [4, 5, 6, 3]

// const nombres = ["Javier", "María", "Pedro", "Ana"];
// const nombresGeniales = nombres.map(nombre => nombre + " es genial");
// console.log(nombresGeniales);
// Javier es genial.


// ///////////////////////////////////////////////////////

// Condicionales

//  Como dice la palabra, el if es una condicion, entre 2 variables, dependiendo la respuesta que te de 
// esa condicion es verdaderea o falsa y te va a devolver un resultado.

//  Ejemplos:

// let numOne = 123
// let numTwo = 456
// let numThree = 789

// if (numOne === 123) {

//     console.log ("El resultado es verdadero")
    
// } ;

// if (numTwo === 4567) {
//     console.log ("El resultado vuelve a ser verdadero")
// }else {
//     console.error ("El resultado no es verdadero")
// } ;

// if (numOne > 1234) {
//     console.log ("El resultado es correcto")
    
// } else if (numTwo === 456) {
//     console.warn ("Seguramente estas en lo correcto")
// }
// else { console.error ("No estas en lo correcto man") } ;

// ////////////////////////////////

// let unColor = "Azul";

// if (unColor.toLowerCase() === "azul") {

//     console.log ("Es casi igual")
    
// } else {

//     console.error ("No es lo mismo!")
    
// };

// ///////////////////////////////
// let userName = prompt ("Ingresar tu nombre de Usuario");


// if (userName === "") {

//     alert ("Tenes que registrarte.")
    
// } else if (prompt ("Esta vez intentalo de vuelta" + " " + userName)) {

//     confirm ("Bievenido" + " " + userName)
    
// }

// else {

//     alert ("Vuelve a registrarte.")
    
// };

// //////////////////////////////////////////////

// let ofertaBase = 3000;

// let ofertar = confirm ("Bienvenido a JavierStore");

// if (ofertar === true) {

//     let ofertarUsuario = parseInt(prompt("¿Cuanto podes pagar? "));
    
//     if (ofertarUsuario < 2000) {

//         alert ("Es demasiado poco");
        
//     } else if (ofertarUsuario < 2200) {

//         alert ("Sigue siendo poco, sale mas caro");
        
//     } else if (ofertarUsuario <= 2900) {

//         alert("Estirate un poco mas");
        
//     } else {

//         confirm ("Realizaste tu compra con exito");
//     }
    
// }

// Switch

let color = prompt ("Elija un color por favor: ");

switch (color) {
    case "blanco":
        alert ("Tenemos talles en ese color")
        break;
    case "azul":
        confirm ("Tenemos remeras de color")
        break;
     case "rojo":
        confirm ("Tenemos muchos talles de esas remeras de color")
        break;
       default:
        confirm ("No trabajamos con ese color")
        break;
};







// For.

// El forbucle es una construcción de flujo de control estándar en muchos lenguajes de programación, incluido JavaScript. 
// Se usa comúnmente para iterar sobre secuencias determinadas o iterar un número conocido de veces y ejecutar un fragmento de código para cada iteración.
// La sentencia for crea un bucle que consta de tres expresiones opcionales, encerradas entre paréntesis y separadas por punto y coma, 
// seguidas de una sentencia (normalmente una sentencia de bloque) que se ejecutará en el bucle.
// Repiten un bloque de código un número de veces específico. 


// Ejemplos

// let str = '';

// for (let i = 0; i < 9; i++) {
//   str = str + i;
// }

// console.log(str);
// "012345678"

// /////////////////////////////////////////////////

// let miArreglo = [1, 2, 3, 4, 5];
// for (var i = 0; i < miArreglo.length; i++) {
//   console.log(miArreglo[i]);
// }

// /////////////////////////////////////////////

// let suma = 0;
// for (var i = 1; i <= 5; i++) {
//   suma += i;
// }
// console.log("La suma es: " + suma);

// //////////////////////////////////////////

// let ingresarNumero = parseInt(prompt("Ingresar un numero"));

// for (let i = 1 ; i <= 10 ; i++) {
//     let resultado = ingresarNumero * i ; 
//     alert (ingresarNumero + " x " + i + " = " + resultado);

// }

///////////////////////////////////////////////

// let newNum = prompt ("Ingresa un nuevo numero por favor :");

// for (let i = 1; i < 10; i++) {
//     confirm (newNum * i)
// };

// //////////////////////////////////


// const paises = ["Estados Unidos", "China", "India", "Brasil", "Indonesia", "Pakistán", "Nigeria", "Bangladés", "Rusia", "México"];


// for (let i = 0; i < paises.length; i++) {
//     confirm ("Interando con paises como por ejemplo:" + " " + paises [i])
//       };

// //////////////////////////////////////

// let entrada = prompt("ingresar un dato"); 

// while (entrada != "Javier") {
//     alert ("Ingreso el usuario" + " " + entrada)
//     entrada = prompt("El nombre es incorrecto, ingresa otro nombre: ")    
// };


// // ////////////////////////////

// let confirmado = true;

// while (confirmado) {

//     let num = parseInt (prompt("Ingresar un numero por favor de dos cifras :"))

//     if (num >= 20) {
//         confirmado = false
//         confirm ("Gracias por igresar el numero" + " " +num)

//     }

// };

// /////////////////////////////////

// let num = parseInt(prompt("ingresa otro num :"));

// let array = [];

// for (let i = 1; i <= num; i++) {
// array.push(i);
// };
// console.log(array);



// do-while

// La sentencia do...while crea un bucle que ejecuta una sentencia especificada hasta que la condición de prueba se evalúa como falsa.
// La condición se evalúa después de ejecutar la sentencia, con lo que la sentencia especificada se ejecuta al menos una vez.

// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while (l < 5);

// 





// JSON

// La notación de objetos JavaScript (JSON) es un formato estándar basado en texto para representar datos estructurados basados ​​en la sintaxis
// de objetos JavaScript. Se usa comúnmente para transmitir datos en aplicaciones web (por ejemplo,
//  enviar algunos datos desde el servidor al cliente, para que puedan mostrarse en una página web, o viceversa).

// EJEMPLO

// archivo squadname.JSON

// {
// "squadName": "Super hero squad",
// "homeTown": "Metro City",
// "formed": 2016,
// "secretBase": "Super tower",
// "active": true,
// "members": [
//     {
//       "name": "Molecule Man",
//       "age": 29,
//       "secretIdentity": "Dan Jukes",
//       "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
//     },
//     {
//       "name": "Madame Uppercut",
//       "age": 39,
//       "secretIdentity": "Jane Wilson",
//       "powers": [
//         "Million tonne punch",
//         "Damage resistance",
//         "Superhuman reflexes"
//       ]
//     },
// ],
// }

// 

let esPalindromo = "reconocer";

let conjunto = [];

let conjuntoInverso = [];

for (let i = 0; i < esPalindromo.length; i--) {
        
    
}
    

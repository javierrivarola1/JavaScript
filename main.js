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

// Operadores de comparación

// Los operadores de comparación se utilizan en declaraciones lógicas para determinar la igualdad o diferencia entre variables o valores.

// == es igual a parecidos.

// ejemplo: x == 5
// x == "5"
// Los 2 resultados son verdaderos ya que el numero 5 aparece mas alla que sea un numero o un string, JavaScrpit toma como resultado correcto
// el numero 5





// 

// El operador typeof devuelve el tipo de una variable, objeto, función o expresión:

// EJEMPLOS:

// "'Javier' is " + typeof "Javier" = Javier is string
// "3.14 is " + typeof 3.14 = 3.14 is number
// false is " + typeof false = false is boolean
// [1, 2, 3, 4] is " + typeof [1, 2, 3, 4] = [1, 2, 3, 4] is object
// {name:'Javier', age:30} is " + typeof {name:'John', age:30} = {name:'Javier', age:30} is object

// ---------------------------------------------

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

// -------------------------------------------

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


console.log("-----------------EXERCISE 2:STRINGS---------------");

/*EJERCICIO 2.a) Crear una variable de tipo string con al menos 10 caracteres
y convertir todo el texto en mayúscula (utilizar toUpperCase).
*/
console.log("-------EXERCISE 2.A--------------------");
var longString = "hihowareyou";
var longStringToMayusc = longString.toUpperCase();
console.log("El resultado de pasar a mayúsculas el string",longString, "es",longStringToMayusc);

/*EJERCICIO 2.b)Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).*/
console.log("-------EXERCISE 2.B--------------------");
var longString2 = "excellentandyou";
var firstFive = longString2.substring(0,5);
console.log("El resultado de de los primeros cinco caracteres de",longString2,"es",firstFive);

/*EJERCICIO 2.c)Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
*/
console.log("-------EXERCISE 2.C--------------------");
var longString3 = "masde10caracteres";
var last3 = longString3.substring(longString3.length, longString3.length-3);
console.log("El resultado de los ultimos 3 caracteres de",longString3,"es",last3);

/*EJERCICIO 2.d)Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con la primera letra en mayúscula y las demás en minúscula.Guardar el resultado en una nueva variable 
(utilizar substring, toUpperCase, toLowerCase y el operador +).*/
console.log("-------EXERCISE 2.D--------------------");
var longString4 = "ponerprimeraletraenmayscula";
var longString4Maysc = longString4.toUpperCase();
var firstInMaysc = longString4Maysc.substring(0,1).toUpperCase();
var restInMinsc = longString4.substring(1,longString4.length).toLowerCase();
var result = firstInMaysc + restInMinsc;
console.log("El resultado de poner la primera letra en mayúscula de",longString4,"es",result);

/*EJERCICIO 2.e)Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
*/
console.log("-------EXERCISE 2.E--------------------");
var longString5 = "masde10 caracteres";
var firstSpace = longString5.indexOf(" ");
console.log("La posición del primer espacio en blanco del string (",longString5,") es",firstSpace);

/*EJERCICIO 2.f)Crear una variable de tipo string con al menos 2 palabras largas 
(10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios
anteriores para generar un nuevo string que tenga la primera letra de ambas palabras
en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase,
toLowerCase y el operador +).*/
console.log("-------EXERCISE 2.F--------------------");
var twoLongWords = "dospalabrascon masde10caracteres";
var twoLongWordsToMaysc = twoLongWords.toUpperCase();
var firstLongWordInMaysc = twoLongWordsToMaysc.substring(0,twoLongWordsToMaysc.indexOf(" ") + 1);
var firstLetterFirstWord = firstLongWordInMaysc.substring(0,1);
var restOfFirstLongWord = firstLongWordInMaysc.substring(1,firstLongWordInMaysc.length).toLowerCase();

var secondLongWordInMaysc = twoLongWordsToMaysc.substring(twoLongWordsToMaysc.indexOf(" ") + 1,twoLongWordsToMaysc.length);
var firstLetterSecondWord = secondLongWordInMaysc.substring(0,1);
var restOfSecondWord = secondLongWordInMaysc.substring(1,secondLongWordInMaysc.length).toLowerCase();

console.log("El resultado de poner en mayúscula la primera letra de cada palabra de (", twoLongWords,") es:",
            firstLetterFirstWord + restOfFirstLongWord + firstLetterSecondWord + restOfSecondWord);

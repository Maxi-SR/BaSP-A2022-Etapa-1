console.log("-----------------EXERCISE 6:FUNCTIONS---------------");

/*EJERCICIO 6.a)Crear una función suma que reciba dos valores numéricos y retorne el resultado.
Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable
en la consola del navegador.*/
console.log("-------EXERCISE 6.A--------------------");
function suma(a,b){
    return a + b;
}

var sumar = suma(5,2);
console.log("El resultado de sumar 2 + 5 llamando a la función suma es:", sumar);

/*EJERCICIO 6.b) A la función suma anterior, agregarle una validación para controlar si alguno de los
parámetros no es un número; de no ser un número, mostrar una alerta aclarando que uno de los parámetros
tiene error y retornar el valor NaN como resultado.
*/
console.log("-------EXERCISE 6.B--------------------");
function suma(a,b){
    if ( isNaN(a) || isNaN(b)){
        alert("a ó b no es un número");
        return NaN;
    }
    return a + b;
}
var noHayDosNumeros = suma(5,"hola");
console.log(noHayDosNumeros);

/*EJERCICIO 6.c)Aparte, crear una función validate Integer que reciba un número como parámetro y devuelva
verdadero si es un número entero.*/
console.log("-------EXERCISE 6.C--------------------");
function validateInteger(a){
    return Number.isInteger(a);
}
var esEntero = validateInteger(4.5);
console.log(esEntero);

/*EJERCICIO 6.d)A la función suma del ejercicio 6b) agregarle una llamada a la función del ejercicio 6c. 
y que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y 
retornar el número convertido a entero (redondeado).
*/
console.log("-------EXERCISE 6.D--------------------");
function suma2(a,b){
    if ( isNaN(a) || isNaN(b)){
        alert("a ó b no es un número");
        return NaN;
    }
    var primerParam = validateInteger(a);
    var segundoParam = validateInteger(b);
    if(!primerParam){
        alert("Primer parámetro no es un entero:");
        return Math.round(a + b);
    }
    if (!segundoParam){
        alert("Segundo parámetro no es un entero:");
        return Math.round(a + b);
    }
    return a + b;
}

var sumarEnteros = suma2(2.3,2);
console.log("La suma redondeada es:",sumarEnteros);

/*Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma 
probando que todo siga funcionando igual. */
console.log("-------EXERCISE 6.E--------------------");
function sumarSeparada(a,b){
    if ( isNaN(a) || isNaN(b)){
        alert("a ó b no es un número");
        return NaN;
    }
    var primerParam = validateInteger(a);
    var segundoParam = validateInteger(b);
    if(!primerParam){
        alert("Primer parámetro no es un entero:");
        return Math.round(a + b);
    }
    if (!segundoParam){
        alert("Segundo parámetro no es un entero:");
        return Math.round(a + b);
    }
    return a + b;
}

function suma3(a,b){
    var funcionaIgual = sumarSeparada(a,b);
    return funcionaIgual;
}

var sumarEnteros2 = suma3(5,5.55);

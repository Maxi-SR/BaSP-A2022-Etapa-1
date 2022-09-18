console.log("-----------------EXERCISE 3:ARRAYS---------------");

/*EJERCICIO 3.a) Dado el siguiente array:
["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
"Septiembre", "Octubre", "Noviembre", "Diciembre"] 
mostrar por consola los meses 5 y 11 (utilizar console.log).*/
console.log("-------EXERCISE 3.A--------------------");
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
"Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log("El mes 5 del arreglo", meses,"es:",meses[4],"y el mes 11 es:",meses[10]);


/*EJERCICIO 3.b) Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).*/
console.log("-------EXERCISE 3.B--------------------");
console.log("Los meses ordenados alfabéticamente son", meses.sort());

/*Vuelvo al arreglo original*/
meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
"Septiembre", "Octubre", "Noviembre", "Diciembre"];


/*EJERCICIO 3.c)Agregar un elemento al principio y al final del array (utilizar unshift y push).*/
console.log("-------EXERCISE 3.C--------------------");
meses.unshift("agregadoAlPrincipio");
meses.push("agregadoAlFinal");
console.log("se agrego el elemento",meses[0],"al principio del arreglo y el elemento",meses[meses.length - 1],
            "al final, y ahora el arreglo meses es", meses);

/*EJERCICIO 3.d) Quitar un elemento del principio y del final del array (utilizar shift y pop).*/
console.log("-------EXERCISE 3.D--------------------");
meses.shift();
meses.pop();
console.log("luego de haber agregado los elementos del ejercicio anterior, se sacaron y quedo el arreglo",meses,
            "original");


/*EJERCICIO 3.e)Invertir el orden del array (utilizar reverse).*/
console.log("-------EXERCISE 3.E--------------------");
console.log("Arreglo invertido:", meses.reverse());


/*Vuelvo al arreglo original*/
meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
"Septiembre", "Octubre", "Noviembre", "Diciembre"];


/*EJERCICIO 3.f)Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).*/
console.log("-------EXERCISE 3.F--------------------");
console.log(meses.join("-"));


/*EJERCICIO 3.g) Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).*/
console.log("-------EXERCISE 3.G--------------------");
var copiaMayToNov = meses.slice(4,11);
console.log("Mayo hasta noviembre:",copiaMayToNov);
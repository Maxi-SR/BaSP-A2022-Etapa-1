console.log("-----------------EXERCISE 5:FOR---------------");

/*EJERCICIO 5.a)Crear un array que contenga 5 palabras y recorrer dicho array utilizando
un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.*/
console.log("-------EXERCISE 5.A--------------------");
var dias = ["lunes","martes","miercoles","jueves","viernes"];
for(i=0;i<dias.length;i++){
    alert(dias[i]);
}

/*EJERCICIO 5.b) Al array anterior convertir la primera letra de cada palabra en mayúscula
y mostrar una alerta por cada palabra modificada.
*/
console.log("-------EXERCISE 5.B--------------------");
for(i=0;i<dias.length;i++){
    alert(dias[i].substring(0,1).toUpperCase() + dias[i].substring(1,dias[i].length));
}


/*EJERCICIO 5.c)Crear una variable llamada “sentence” que tenga un string vacío, luego al array
del punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable 
sentence. Al final mostrar una única alerta con la cadena completa.
 */
console.log("-------EXERCISE 5.C--------------------");
var sentence = "";
for(i=0;i<dias.length;i++){
    sentence += dias[i];
}
alert(sentence);

/*EJERCICIO 5.d)Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con 
el número de la repetición, es decir que al final de la ejecución del bucle for debería haber 10 
elementos dentro del array, desde el número 0 hasta al número 9. Mostrar por la consola del navegador
el array final (utilizar console.log). */
console.log("-------EXERCISE 5.D--------------------");
var arregloVacio = new Array(10);
for(k=0;k<arregloVacio.length;k++){
    arregloVacio[k] = k;
}
console.log(arregloVacio);
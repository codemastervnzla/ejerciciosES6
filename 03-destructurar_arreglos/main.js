//Ejercicio 3
//Destructurar el arreglo en variable e imprimir su valor.

//Arreglo.
const persona = ['Johan', 18, 'Venezuela'];

//Destructurar el arreglo "persona" en variables distintas.
const [nombre, edad, pais, profesion = 'estudiante'] = persona;

//Imprimiendo el valor de las variables mediante "Templates Strings".
console.log(`${nombre} tiene ${edad}, es de ${pais} y es ${profesion}.`)
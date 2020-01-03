//Ejercicio1
//Destructurar objetos, clocarlos en variables separadas, 
//acceder a ellos e imprimir su valor mediante "Strings Templates".

//Objeto
const persona = {
    nombre: "Johan",
    apellido: "Castillo",
    edad: 18,
    pais: "Venezuela",
    profesion: "Full-Stack Developer"
}

//Destructurando el objeto y separandolo en variables distintas.
const { nombre, apellido, edad, pais, profesion = 'estudiante' } = persona;

//Accediendo a el valor de las variables.
console.log(`${nombre} ${apellido} tiene ${edad} años de edad, es de ${pais} y es ${profesion}.`);
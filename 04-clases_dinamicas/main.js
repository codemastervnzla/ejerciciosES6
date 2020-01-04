//Ejercico 4

//Clase dinámica. Llamada "Usuario".
class Usuario{
    constructor(nombre, apellido, edad, correo){
        this.nombre = nombre,
        this.apellido = apellido,
        this.edad = edad,
        this.correo = correo
    }
}

//Usuario 1.
const Johan = new Usuario('Johan', 'Castillo', 18, 'correo@correo.com');

console.log(Johan);

//Usuario 2.
const Juan = new Usuario('Juan', 'Gonzales', 22, 'correo@correo.com');

console.log(Juan)
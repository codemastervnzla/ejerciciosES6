//Ejercicio 2
//Crea una función flecha que devuelva el numero de caracteres que posee cada uno de
//los elementos de el arreglo "nombres".

//Arreglo de nombres.
const nombres = ['Luis', 'Johan', 'Alejandro', 'Andrea']

//funcion flecha
const numero_caracteres = nombres.map((nombre) => {
    console.log(`${nombre} tine ${nombre.length} letras.`)
});

function obtenerAleatorio(){
    return Math.random();
}

function obtenerNombre(){
    return "Juan";
}

function esMayoroMenor(){
    if(obtenerAleatorio() > 0.5 ){
        return true;
    } else {
        return false;
    }
}

console.log(obtenerAleatorio())  // 10.5135494325169  "numero aleatorio"
console.log(obtenerNombre())   // "juan"
console.log(esMayoroMenor())  // true

// contexto de THIS


var nombre = "Juan de Dios"

var persona = {
    nombre: "Maria", 
    apellido: "Dubon", 
    imprimirNombre: function(){
        console.log(this.nombre + " " + this.apellido);     // respuesta: Maria Dubon
        console.log(nombre)                                 // respuesta: Juan de Dios
    }
}

persona.imprimirNombre();
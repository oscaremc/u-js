
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
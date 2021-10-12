// #########################
// fUNCIONES DE LOS ARREGLOS
// #########################

var arr = [1, 2, 3, 4, 5]

console.log(arr)      //imprime el arreglo
console.log(arr[0], arr[4], arr[5]);     //imprime solo los datos en su posicion

arr.reverse();      //imprime el arreglo de atras hacia adelante
console.log(arr)

arr = arr.map(function (elem) {     // map recorrero el arreglo modificando cada elemento
    elem *= 2;
    return elem;
})
console.log(arr)

arr = arr.map(Math.sqrt);       // Math.sqrt realiza la ecuacion de raiz cuadra al elemnto, arr.map realiza un recorrido en cada elemento. 
console.log(arr);

arr = arr.join(".|.");           // conviere el arreglo en string por defecto separado por comas perro se puede editar
console.log(arr);

arr = arr.split(".|.");         // toma el sting y lo conviente en arreglo separando lo elemetos por el paramentro que se le pasas. 
console.log(arr);

arr.push("6");                  // inserta un elemento de ultimo
console.log(arr);

arr.unshift("0");               //inserta un elemento de primero
console.log(arr);

console.log(arr.toString());    // convierte el array en un texto a diferecia del join no se puede modificar caracteres.

var elimine = arr.pop();        // se elimina el ultimo elemento
console.log(arr, elimine);

// arr.splice( 1, 3); // se elminara un elemento(1) del arreglo segun su posicion(3)
// console.log(arr);


arr.splice( 1, 3, "10"); // se elminara un elemento(1) del arreglo segun su posicion(3)
console.log(arr);

arr = arr.slice(1, 3);  // se muestra solo el trozo donde el paramentro comienzo(1) y termina(3) sin incluir esta posicion 
console.log(arr);

// ####################################
// COMBINANDO FUNCIONES DE LOS ARREGLOS
// ####################################

var arreglos = [                    
    true, 
    {
        nombre: "Fernando", 
        apellido: "Herrera"
    }, 
    function(){
        console.log("Estoy viviendo en un arreglo");
    },
    function(persona){
        console.log(persona.nombre + " " + persona.apellido);
    }, 
    [ "Fernando", "Carlos", "Hernando", "Melisa" ]
];

console.log(arreglos);                             // imprime todo el arreglo
console.log(arreglos[0]);                          //imprime solo el primer elemento del arreglo [0]
console.log(arreglos[1].nombre + " " + arreglos[1].apellido);        //imprime el valor de los parametos segun la posicion del elemento

arreglos[2]();              // me retorna el varlos del elemento[2]

arreglos[3](arreglos[1]);   // me retorna el varlor del elemtno[3] con parametros del elemnto [1]

console.log(arreglos[4][3])  //  ubica el elemento padre[4], imprime el elemento hijo[3]
























Tipos de datos de javascript

Datos primitivos: 

var num = 10;
var str = "texto";
var bol = true:
var und = undefined;
var nul = null;

Ahora podemos entender escritura dinamica que es una caracteristica de javascript

si realizo: 

console.log(num)  // respuesta: 10
como asigne inicialmente 10 a num pues cuando la llamo me aparece 10 

si llamo a: 

console.log(num)  // 10 
console.log(str)  // "texto"

javascript reconoce que num es un numero por que no tiene comillas, y cuando llamo a str reconoce que es texto por que si tiene comillas. 

Cuando realizo la operacion: 

num = str

console.log(num)  // "texto"
javasript hace una reasignacion de variables y cambia el valor anterio(10) por el valor nuevo("texto")
esto se conoce como escritura dinamica! 



Los objetos! 

en javascript los objetos pueden tener difetentes valores primitivos o pueden tener mas objetos dentro. 

sintaxis: 

var obj = {};

objetos con valores primitivos: 

var obj = {
    numero: 10,
    text: "Nuevo texto"
};

objetovs que contiene objetos

var obj = {
    numero: 10,
    text: "Nuevo texto"

    objHijo: {
        numero: 20, 
        text2: "Nuevo texto"
    }
};

IMPORTANTE: cuando conociamos las variables tocamos el tema especial de la escritura dinamica, donde se entiende que javascript rescribe el valor de una variable. pero si intentamos lo mismo con los objetos nos daremos cuenta de un resultado diferente por el echo de que cambia es el valor por referencia. por ejemplo; 

var c = {
    nombre: "Juana"
}

var d = c;

console.log(d)  // Object {nombre: "Juana"}
console.log(c)  // Object {nombre: "Juana"}

despues intento reasignar alguna varible: 

c.nombre = "Maria"

console.log(d)  // Object {nombre: "Maria"}
console.log(c)  // Object {nombre: "Maria"}

Notamos que javascript cuando reasignamos un valor de un objeto no tiene el mimso comportamiento que cuando lo hacemos con variables, esto se llama pasar valores por referencia!




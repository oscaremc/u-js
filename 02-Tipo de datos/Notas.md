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


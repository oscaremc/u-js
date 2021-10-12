Funciones poderosas de JavaScript!

Syntaxis: 

funcion nombreFuncion() {
    contenido de la funcion
}

nombreFuncion(); 

Contexto de una variable 

var a = 30; 

function primeraFuncion() {
    var a = 20;
    console.log(a);   //  respuesta: 20
}
primeraFuncion();

como repuesta de esta funcion vemos que nos da 20. como el llamado de la variable que es console.log esta dentro de la funcion se puede decir que esta en un nuevo contexto o un contexto local. esto pasa cuando creamos una funcion javascript crea un nuevo contexto donde evalua por aparte las cosas que estan dentro de la funcion. 

si tuvieramos el mismo ejemplo pero con un leve cambio: 

var a = 30; 

function primeraFuncion() {

    console.log(a);   //  respuesta: 30
}
primeraFuncion();

la respuesta de la funcion es 30. lo que ocurre es, que si el llamado esta dentro de la funcion y dentro de la funcion no hay ninguna variable que se llame a para darle la prioridad entonces lo que hace es buscar la variable en el contexto global. 

por tal razon, en el primer ejemplo se veo que primero llamo 20 antes que a 30 por que la prioridad en una funcion siempre esta el contexto local y en segundo ejemplo podemos ver que la dentro de la funcion tambien podemos hacer llamdos al contexto global. 
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


Funcion con parametros: 

function imprimir(nombre, apellido){        // los parametros se definen dentro de los parentesis de las funcion
    console.log( nombre + " " + apellido ); // los parametros de usan dentro del cuerpo de la funcion
                                            // respuesta: carlos ruiz
}

imprimir( "carlos", "ruiz");                // los parametros se envian cuando se inicializa la funcion

javascript es un lenguaje adaptativo quiere decir que si tienes los parametros definidos pero no los envias cuando lo inicializas puede que te envie una respuesta de undefine por defecto pero no se rompe el codigo. para evitar esto es mejor porner un validador en este caso algo asi: 

function imprimir(nombre, apellido){        // la funcion esta esperando recibir dos parametros
    apellido = apellido || "xxx"            // se valida si apellido tiene valor o le agrega "xxx" por defecto
    console.log( nombre + " " + apellido ); // se usan los parametros 
                                            // carlos xxx
}

imprimir( "carlos");                // Envio solo el nombre como paramentro 

las funciones reciben objetos como parametros:


function imprimir(persona){        // la funcion esta esperando un parametro
    console.log( persona. nombre + " " + persona.apellido ); // como sabemos que recibimos en los parametros un obj extraemos el valor por punto
}

var obj = {             // creamos el objeto
    nombre: "Juan", 
    apellido: "Padilla"
}

imprimir( obj );                // enviamos el parametro como objeto. 
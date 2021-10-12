El contexto de THIS en JavaScript

THIS es igual que Windows inicialmente, pero esto cambia si vemos el siguiente ejemplo: 

var nombre = "Juan de Dios"

var persona = {
    nombre: "Maria", 
    apellido: "Dubon", 
    imprimirNombre: function(){
        console.log(this.nombre + " " + this.apellido);     // respuesta: Maria Dubon
        console.log(nombre)                                 // respuesta: Juan de Dios
    }
}

Windows es toda la informacion que esta dentro del navegador y que el motor de javascript puede leer, pero hay casos como por ejemplo la varialbe persona es objeto que contiene una funcion y que hace un llamado nombre de dos formas una con THIS y otra no. dan diferentes resultados justamente por que, para javascript cuando se usa una funcion el contexto cambia. aqui es donde aparece this. 

entonces, si solo llamo a la varible nombre, dentro de una funcion del objeto. javascript lo que hace es buscarla en todo la ventana o como se llama en el contexto global. pero sin especifico this.nombre, lo que entiende javascript es que solo debo buscar la variable nombre en el objeto donde se encuentra y no en toda la ventana. 

Si existiera el caso que imprimirNombre tuviera una funcion dentro esa funcion cambiara el contexto tambien, pero ya this no funcionaria igual por que recupera su valor de windows. quiere decir que this se debe saber usar por que no tiene una cadena de resultados similar. 

la mejor forma de manejar el caso que un objeto obtenga una funcion dentro de una funcion y saber majer el THIS puede ser. 


var nombre = "Juan de Dios"                       // ## Referencia del contexto global Windows

var persona = {
    nombre: "Maria", 
    apellido: "Dubon", 
    imprimirNombre: function(){                   // ## Referencia de contexto local THIS   
        console.log(this.nombre + " " + this.apellido);     // respuesta: Maria Dubon
        console.log(nombre)                                 // respuesta: Juan de Dios
    }, 

    direccion: {
        pais: "Costa Rica", 
        obtenerPais: function(){                  // ## Referencia de contexto local THIS   

            var self = this;                      //  Asignacion de this para que no pierda contexto

            var nuevaDireccion = function(){      // ## Referencia en tercer niver de contexto local THIS   

                console.log(self);
                console.log("La direccion es un " + self.pais );

            }

            nuevaDireccion();

        }
    }
}

si el contexto recorre primero el contexto global, luego el contexto local y de nuevo una nueva funcion contruye un nuevo contexto como lo llame en el ejemplo anterior: Referencia de tercner nivel. el THIS restablecer su contexto de windows pero no lo hacer gracias a que fue reasignado dentro de su contexto y se puede usar en un nivel mas profundo. 

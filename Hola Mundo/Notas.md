Primeros pasos en javascript! 

Requerimientos, 
- Visual estudio code o editor de codigo.
- navegador Google Chrome ya que se usara las dev Tools 

El codigo de js se puede ubicar en diferentes lugares, pero al ser una opcion tan amplia se debe manejar con cuidado. estas son las opciones: 

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Javascript</title>
</head>

<!-- PRIMERA OPCION -->
<!-- ############### -->
<script type="text/Javascript">
        
    var a = 1; 
    var b = "Fernando";

</script>

<body>
    <!-- SEGUNDA OPCION -->
    <!-- ############## -->
    <script type="text/Javascript">
        
        var a = 1; 
        var b = "Fernando";

    </script>

</body>

<!-- TECERA OPCION -->
<!-- ############# -->
<script type="text/Javascript">
        
    var a = 1; 
    var b = "Fernando";

</script>

</html>

Aunque es posible hacer lo anterior mensionado, como buena practica se deberia poner el codigo js por separado de la siguiente manera. 

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Javascript</title>
</head>

<body>

    <script src="index.js"></script>  <!-- la forma correcta de usar archivos js -->

</body>

</html>

se crea el archivo index.js en el mismo nivel que esta index.html se puede verificar que este correcta la conexion de la siguietne forma.

dentro del archivo index.js agregamos: 

console.log("Hola Mundo")

Probaremos que la concexion quedo correctamente si!:

- abrimos el archivo index.html en el navegador. 
- abrimnos el inspector, con clic derecho esta la opcion para abrirlo. 
- abrimos la pesataña console del inspector 
- debe aparecer el mensaje que pusimos en el archivos index.js "Hola Mundo"

si logra ver en consola el mensaje que se escribio en el archivo js quedo correctamente la conexion de los dos archivos. 
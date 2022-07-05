// 1. Determina el nombre y tipo de dato para almacenar en variables la  siguiente información:

    • Nombre = Cadena
    • Apellido = Cadena
    • Nombre de usuario en ITI = Cadena
    • Edad = Entero
    • Correo electrónico = Cadena
    • Mayor de edad = Funcion
    • Dinero ahorrado = Funcion
    • Deudas = Funcion

// 2. Traduce a código JavaScript las variables del ejemplo anterior y  adjunta una captura

    var nombre = "Stalin";
    var apellido = "Riofrio";
    var iti = "Tecnologico Internacional";
    var edad = 31;
    var correo = "stalin.riofrio@iti.edu.ec";
    function mayoredad() {
        return edad;
    }
    function dineroAhorrado() {
        return ahorrado;
    }
    function calcularDeudas() {
        return deuda;
    }

// 3. . Calcula e imprime las siguientes variables a partir de las variables  del ejemplo anterior:
/* • Nombre completo (nombre y apellido)
   • Dinero real (dinero ahorrado menos deudas)  */

    var nombre = "Stalin";
    var apellido = "Riofrio";
    var dinero = 1000;
    function presentarNombre() {
        return `${nombre} ${apellido}`;
    }
    console.log(presentarNombre());

    function calcularDeudas() {
        let prestamo = 5000;
        let deuda = prestamo - dinero;
        return deuda;
    }
    console.log(calcularDeudas());



/* 4. Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las 
    variables constantes por parámetros y argumentos en una función:


    const name = "Juan David";
    const lastname = "Castro Gallego";
    const completeName = name + lastname;
    const nickname = "juandc";

    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");   */


    const nombre = "Stalin", lastName = "Riofrio", nickName = "Pato";
    const completeName = `${nombre} ${lastName}`;

    // funcion
    function yoSoy(nombre, nickName) {
        console.log("Mi Soy " + nombre + ", pero prefiero que me digas " + nickName + ".");
    }

    // Llamda a la funcion
    yoSoy(completeName, nickName);


// 5. Qué tipos de condicionales existen en JavaScript y cuáles son sus  diferencias?

Esta el if: Este es el mas comun, ya que solo le decimos que ejecute una parte del código si sucede una acción.

En adición a este, esta el if else, que puede ejecutar mas de una condición encadenada.

También tenemos al switch: Este es parecido al if else pero es mas fácil de leer, sobre todo cuando hay condicionales encadenadas.

    // 6.  Replica el comportamiento del siguiente código que usa la sentencia switch Utilizando if, else y else if

    /*   const tipoDeMatricula = "Basic";
       switch (tipoDeMatricula) {
           case "Free":
               console.log("Solo puedes tomar los cursos gratis");
               break;
           case "Basic":
               console.log("Puedes tomar casi todos los cursos de ITI
       durante un mes");
       break;
           case "Expert":
               console.log("Puedes tomar casi todos los cursos de ITI
       durante un año");
       break;
           case "ExpertPlus":
               console.log("Tú y alguien más pueden tomar TODOS los 
       cursos de ITI durante un año");
       break;
       }                                       */


    if(tipoDeSuscripcion === "Free"){
    console.log("Solo puedes tomar los cursos gratis");
    } else if (tipoDeSuscripcion === "Basic") {
    console.log("Puedes tomar casi todos los cursos de ITI");
    } else if (tipoDeSuscripcion === "Expert") {
    console.log("Puedes tomar casi todos los cursos de ITI durante un año");
    } else {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de ITI durante un año");
    }






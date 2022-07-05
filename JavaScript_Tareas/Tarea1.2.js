// 1. ¿Qué es un ciclo?

Los ciclos o bucles de programación (también denominados estructuras decontrol iterativas o repetitivas) son sentencias que se utilizan para ejecutar una ovarias instrucciones de forma repetitiva cuando sea necesario.

// 2. ¿Qué tipos de ciclos existen en JavaScript?

Están el ciclo for (aquí sabemos cuántas veces se va a repetir el ciclo), 
el while (aquí no sabemos cuántas veces se repetirá el ciclo) 
y el do while (aquí tampoco sabemos cuántas veces se repetirá el ciclo, pero lo que si sabemos es que al principio se va a ejecutar un bloque de código)

// 3. ¿Qué es un ciclo infinito y por qué es un problema?

Un loop infinito sucede cuando nosotros olvidamos hacer una acción para que un loop pare. Esto solo sucede con el ciclo while. Es un problema porque la pantalla del navegador se puede trabar. Esto se debe a que el ciclo infinito se procesa una y otra vez sin fin, por lo que otras acciones que tiene que realizar el navegador no se realizan.

/* 4. Replica el comportamiento de los siguientes ciclos for utilizando ciclos while

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}                                                       */

    var i = 0;
    while (i < 5) {
        console.log(`El valor de i es: ${i}`);
        i++
    }

    var i = 10;
    while (i >= 2) {
        console.log(`El valor de i es: ${i}`);
        i--
    }


/* 5. Escribe un código en JavaScript que le pregunte a los usuarios  cuánto es 2 + 2
        • Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
        Pista: puedes usar la función prompt de JavaScrip               */
    
        var pregunta = prompt("2 + 2 es cuatro?");
        if (Number(pregunta) === 4){
          console.log("felicitaciones");
        }else{
          console.log("volvemos a empezar");
        }

/* 6.   Tienes un array de productos con los siguientes atributos:
                • name
                • price
                • stock
        Debes agregar y calcular una nueva propiedad llamada "iva", los impuestos deben ser del 12% con base al precio base.
        Por ejemplo, si aplicamos el 12% de impuestos para un producto con precio de $1000 el resultado de los "IVA" será $190, debes tener en cuenta 
        que como resultado se debe dejar un valor entero sin decimales. */



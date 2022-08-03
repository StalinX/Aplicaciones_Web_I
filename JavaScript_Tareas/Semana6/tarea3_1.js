

/*  1 ORDENACIÓN DE TRES NÚMEROS*/

function ordenar3numeros() {

    let a = prompt('Ingrese el Numero 1');
    let b = prompt('Ingrese el Numero 1');
    let c = prompt('Ingrese el Numero 1');
    if(a>b && b>c){
        console.log ("Numero Mayor "+a)
        console.log ("Numero Medio "+b)
        console.log ("Numero Memor "+c)
    } else if (a>c && c>b) {
        console.log ("Numero Mayor "+a)
        console.log ("Numero Medio "+c)
        console.log ("Numero Memor "+b)
    } else if (b>a && a>c) {
        console.log ("Numero Mayor "+b)
        console.log ("Numero Medio "+a)
        console.log ("Numero Memor "+c)
    }else if (b>c && c>a) {
        console.log ("Numero Mayor "+b)
        console.log ("Numero Medio "+c)
        console.log ("Numero Memor "+a)
    } else if (c>a && a>b) {
        console.log ("Numero Mayor "+c)
        console.log ("Numero Medio "+a)
        console.log ("Numero Memor "+b)
    }else if (c>b && b>a){
     console.log ("Numero Mayor "+c)
        console.log ("Numero Medio "+b)
        console.log ("Numero Memor "+a)
    }else{
        
    }
           
}

ordenar3numeros();

/*2 AÑO BICIESTO
 */

function checkBisiestYear(year) {

    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year,' año bisiesto');
    } else {
        console.log(year, ' no es año bisiesto');
    }
}
checkBisiestYear(2022);



/*3 DESCUENTOS */

function descuento (valor_escritorio,n_escritorios){
    let compra;
    if (n_escritorios<5){
        compra = (valor_escritorio*n_escritorios)-((valor_escritorio*n_escritorios)*0.10);
    console.log ("Recibe un descuento del 10%  Total a Pagar =", compra);
    }else if ((n_escritorios>=5 )&&(n_escritorios<=10)){
        compra = (valor_escritorio*n_escritorios)-((valor_escritorio*n_escritorios)*0.20);
        console.log ("Recibe un descuento del 20%  Total a Pagar =", compra);
    }else{
        compra = (valor_escritorio*n_escritorios)-((valor_escritorio*n_escritorios)*0.40);
        console.log ("Recibe un descuento del 40%  Total a Pagar =", compra);
    }
    }
    
    descuento(200,13);





//Scope global y local
var Nombre = "Stalin";

//

let myFunction = () => {
    return console.log(Nombre);
}
myFunction()

//hosinting

var saludo = "Stalin";
function hey(){
    return `hola ${saludo}`;
}
console.log(hey());

//coercion implicita  y explicita
//implicita 
4 + "9";

//explicita
let numero1 = "7";
let conNum1 = Number(numero1);
console.log(typeof conNum1);
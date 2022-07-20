//Traer el paquete de xmlhttprequest
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
//Generando un String de mi API de Rick
const API = 'https://rickandmortyapi.com/api';

//Generando una funcion para traer los datos
function fetchData(urlApi, callback){
    let xhttp = new  XMLHttpRequest();
    // abre la conexion API
    xhttp.open('GET', urlApi, true);
    //vERIFICA EL ESTADO DE LA CONEXION
    xhttp.onreadystatechange = function (even) {
        //validando el estado de la conexion
        if (xhttp.readyState === 4) {
            //validar las respuestas del servidor
            if (xhttp.status === 200){
                callback(null, JSON.parse(xhttp.responseText))
            }else{
                const error = new Error('Error '+ urlApi);
                callback(error, null)
            }
        }
    }
    //enviar solicitud
    xhttp.send()
}

//guardo en memoria
const newArray = [];
//llamo a la funcion 
//asincronismo
fetchData(`${API}/character`, function(error1, data1){
    if(error1) return console.error(error1);
    //console.log(data1);
    fetchData(`${API}/character/${data1.results[0].id}`, function(error2, data2){
        if (error2) return console.error(error2);
        fetchData(`${API}/location/${data2.id}`, function(error3, data3){
            if (error3) return console.error(error3);
            newArray.push(data1.info.count);
            console.log(newArray);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        })
    })      
})
//
console.log(newArray);
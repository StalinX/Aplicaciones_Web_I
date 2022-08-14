const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const API = "https://swapi.dev/api/";




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

fetchData(`${API}people/1/`, (error, data)=>{
    if(error){
        console.log(error);
    }
    fetchData(`${API}planets/3/`, (error1, data1)=>{
        if(error1){
            console.log(error);
        }
        fetchData(`${API}starships/2/`, (error2, data2)=>{
            if(error2){
                console.log(error);
            }
            console.log(`${data.name} Mide ${data.height}`);
            console.log(`Planeta ${data1.name} diametro = ${data1.diameter}`);
            console.log(`Nave ${data2.name} Mide = ${data2.starship_class}`);
        });
    });
});



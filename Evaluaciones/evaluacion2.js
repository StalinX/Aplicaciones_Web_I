const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const API = "https://swapi.dev/api";

const getData = (url, callback)=>{
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true) = (event) => {
    if(xhttp.readyState === 4){
        xhttp.status === 200
        ? callback (null, JSON.parse(xhttp.responseText))
        : callback ("Error", null);
    }
};
xhttp.send();
};

getData(`${API}people/1/`, (error, data)=>{
    if(error){
        console.log(error);
    }
    getData(`${API}planets/3/`, (error1, data1)=>{
        if(error1){
            console.log(error);
        }
        getData(`${API}starships/2/`, (error2, data2)=>{
            if(error2){
                console.log(error);
            }
            console.log(`${data.name} mido ${data.height}`);
            console.log(`Planeta ${data.name} diametro = ${data1.height}`);
            console.log(`Nave ${data.name} Mide = ${data2.height}`);
        });
    });
});
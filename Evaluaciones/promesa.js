const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const API = "https://swapi.dev/api";

const getData = (url)=> {
    return new Promise((resolve, reject) =>{
        const xhttp = new XMLHttpRequest();
        xhttp.open("GET", url, true);
        xhttp.onreadystatechange = () =>{
            if(xhttp.readyState === 4){
                xhttp.status === 200
                ? resolve (null, JSON.parse(xhttp.responseText))
                : reject ("Error", null);
            }
        };
        xhttp.send();
    });
};
    
getData(`${API}people/1/`)
.then((response)=>{
    console.log(`${response.name} mido ${response.height}`);
    return getData(`${API}planets/3/`);
})

.then((response)=>{
console.log(`Planeta ${response.name} diametro = ${response.diameter}`);
return getData(`${API}planets/2/`)
})

.then((response)=>{
console.log(`Nave ${response.name} Mide = ${response.startship_class}`);
});

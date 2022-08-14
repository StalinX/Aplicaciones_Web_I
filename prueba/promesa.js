const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const API = 'https://swapi.dev/api/';

const fetchData = (urlAPi) => {
    return new Promise((resolved, reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.open("GET", urlAPi, true);
        xhttp.onreadystatechange = (event) => {
            if(xhttp.readyState === 4){
                if(xhttp.status === 200){
                    resolved(JSON.parse(xhttp.responseText));
                }else{
                    //const error = new Error("Error "+urlAPi)
                    reject(error);
                }
            }
        }
        xhttp.send();
    })
}
    
fetchData(`${API}/people/1/`)
.then((response)=>{
    console.log(`${response.name} mido ${response.height}`);
    return fetchData(`${API}planets/3/`);
})

.then((response)=>{
console.log(`Planeta ${response.name} diametro = ${response.diameter}`);
return fetchData(`${API}planets/2/`)
})

.then((response)=>{
console.log(`Nave ${response.name} Mide = ${response.startship_class}`);
});
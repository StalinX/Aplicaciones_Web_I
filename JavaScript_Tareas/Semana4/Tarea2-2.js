const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://rickandmortyapi.com/api';
 
const fetchData = (urlAPi) => {
    return new Promise((resolved, reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.open("GET", urlAPi, true);
        xhttp.onreadystatechange = (eve) => {
            if(xhttp.readyState === 4){
                if(xhttp.status === 200){
                    resolved(JSON.parse(xhttp.responseText));
                }else{
                    const error = new Error("Error "+urlAPi)
                    reject(error);
                }
            }
        }
        xhttp.send();
    })
}
fetchData(`${API}/character`)
.then(data1 => {
   console.log(data1.info.count);
    return fetchData(`${API}/character/${data1.results[0].id}`)
})
.then(data2 => {
    console.log(data2.name);
    return fetchData(`${API}/location/${data2.id}`)

})
.then(data3 => {
    console.log(data3.dimension);
})
/* .catch((er)=>){
    const error = new Error("Error "+ er);
    console.log(er)

}*/

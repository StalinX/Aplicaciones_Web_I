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
.then(res => {
    //console.log(res)
    fetchData(`${API}/character/${res.results[0].id}`)
    console.log(res);
})



const newArray = [];
fetchData(`${API}/character`, function(error1, data1){
    if(error1) return console.error(error1);
    fetchData(`${API}/character/${data1.results[0].id}`, function(error2, data2){
        if(error2) return console.error(error2);
        fetchData(`${API}/location/${data2.id}`,function(error3, data3){
            if(error3) return console.error(error3);
            newArray.push(data1.info.count)
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);


        })
    }
    )
    
})
console.log(newArray);
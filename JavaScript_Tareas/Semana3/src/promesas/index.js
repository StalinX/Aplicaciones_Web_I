//promesa

const pr = new Promise((resolve, reject) => {
    resolve  ("TODO PERFECTO");
    reject ("TODO SALIO MAL");
})

const cats = 10;

const countCat = new Promise ((resolve, reject) => {
    if (cats <= 5){
        resolve("Acept");
    }else{
        reject("No Acept");
    }
})

countCat
.then((res) => console.log(res))
.catch((err)=> console.log(err))
.finally (() => console.log("Salio todo mal"))
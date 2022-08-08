const urlApiCatRandom = 'https://api.thecatapi.com/v1/images/search?limit=3&api_key=3cac5af6-d37e-42d9-975d-ee073966ba39';

const getCatsRandom = async () =>{
    const response = await fetch(urlApiCatRandom);
    const data = await response.json();
    const array = [];
    const div = document.querySelector('#getCatRandom__cats');
    data.forEach(cat => {
        //creando mi imagen
        const img = document.createElement('img');
        img.src = cat.url;
        img.width = 200;
        img.height = 200;
        array.push(img);
        //crear boton
        const button = document.createElement('button');
        button.innerHTML= "Agregar a favoritos";
        array.push(button);
    });
    div.append(...array);
}

// funcion para los gatos favoritos
// funcion para agregar gatos favoritos
// funcion para eliminar de favoritos
getCatsRandom();

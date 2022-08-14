const urlApiDogRandom = 'https://api.thedogapi.com/v1/images/search?limit=4&api_key=bca652f0-ce82-403a-99bd-712ecca1238d';
const urlApiDogFavorite = 'https://api.thedogapi.com/v1/images/favourites?api_key=bca652f0-ce82-403a-99bd-712ecca1238d';
const getDogsRandom = async () =>{
    const response = await fetch(urlApiDogRandom);
    const data = await response.json();
    const array = [];
    const div = document.querySelector('#getDogRandom__dogs');
    data.forEach(dog => {
        //creando mi imagen
        const img = document.createElement('img');
        img.src = dog.url;
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
const getDogsFavorite = async () =>{
    const response = await fetch(urlApiDogFavorite);
    const data = await response.json();
    const div = document.querySelector('#getDogFavorite__cats');
    const array = [];
    data.map(dogs => {
        const img = document.createElement('img');
        img.src = dogs.image.url;
        img.setAttribute('alt', dogs.user_id);
        img.width = 200;
        img.height = 200;
        array.push(img);
        //crear boton
        const button = document.createElement('button');
        button.innerHTML= "<h1> Eliminar de favoritos";
        button.onclick = () => {
        }
        array.push(button);
    });
    div.append(...array);
    console.log(data);
}

getDogsFavorite();


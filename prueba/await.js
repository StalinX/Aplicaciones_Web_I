

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const API = 'https://swapi.dev/api/';
const fetchData = (urlApi) => {
    return fetch(urlApi).then(res => res.json());
  }
const anotherFn =async(urlApi) => {
    try {
        const data1 = await fetchData(`${API}people/1/`);
        const data2 = await fetchData(`${API}planets/3/`);
        const data3 = await fetchData(`${API}starships/2/`);

        console.log(`${data1.name} mido ${data1.height}`);
        console.log(`Planeta ${data2.name} diametro = ${data2.diameter}`);
        console.log(`Nave ${data3.name} Mide = ${data3.startship_class}`);

    } catch (error) {
        console.log (error);
    }
};

anotherFn(API);
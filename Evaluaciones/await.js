import fetch from 'node-fetch';
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
//const API = 'https://swapi.dev/api/';


const fetchdata = (urlApi) => {
    return fetchdata (urlApi).then(res => res.json());
}


const getData = require('../Evaluaciones');
    const API = 'https://swapi.dev/api/';
    const anotherFn =async(url) => {
        try {
            const data1 = await getData(`${API}people/1/`);
            const data2 = await getData(`${API}planets/3/`);
            const data3 = await getData(`${API}starship/2/`);

            console.log(`${data1.name} mido ${data1.height}`);
            console.log(`Planeta ${data2.name} diametro = ${data2.diameter}`);
            console.log(`Nave ${data3.name} Mide = ${data3.startship_class}`);

        } catch (error) {
            console.log (error);
        }
    };

    anotherFn(API);
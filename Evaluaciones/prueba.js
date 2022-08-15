
const getData = require('../Evaluaciones/node_modules');
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
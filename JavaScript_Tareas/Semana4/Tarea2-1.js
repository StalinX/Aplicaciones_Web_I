
//import fetch from 'node-fetch'
const API = 'https://rickandmortyapi.com/api';
async function fetchData(urlAPI){
  try{
      const response = await fetch(`${API/character}`)
      return response.json()
  } catch(error){
      return error;
  }
  async function resolveRequests(){
    const data1 = await fetchData(API)
    console.log(data1.info.count)

    const data2 = await fetchData(API + data1.results[0].id)
    console.log( data2.name )

    const data3 = await fetchData(data2.origin.url)
    console.log( data3.url )
}

resolveRequests()
}





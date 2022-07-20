import fetch from "node-fetch";
async function getCharacters() {
    const response = await fetch(`https://rickandmortyapi.com/api/character`);
    const data = await response.json();
    return data.results;
  }
  
  // or, mixed
  async function getCharacters() {
    const data = await fetch(`https://rickandmortyapi.com/api/character`).then(
      (res) => res.json()
    );
    return data.results;
  }
  
  (async () => {
    try {
      let characters = await getCharacters();
      console.log(characters); // (20) [{...}, {...}, {...}]
    } catch (err) {
      console.error(err);
    }
  })();









const API = "https://rickandmortyapi.com/api/character/"
async function fetchData(endpoint){
    try{
        const res = await fetchData(endpoint)
        return res.json()
    } catch(err){
        return err;
    }
}
async function resolveRequests(){
    const firstRq = await fetchData(API)
    console.log( "Number of characters:", firstRq.info.count )

    const secondRq = await fetchData(API + firstRq.results[0].id)
    console.log( "First character name", secondRq.name )

    const lastRq = await fetchData(secondRq.origin.url)
    console.log( "First character origin", lastRq.name )
}

resolveRequests()


import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Card from './Card';

let limit = 20;
let offset = 20;



function App() {
  useEffect (()=>{getPokemons()},[])
  const [pokemons, setPokemons] = useState([])
  const getPokemons = async () => {
    await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`).then(async pokemon=>{
      let data = await pokemon.data.results.map(async poke => {
        const result = await axios.get(poke.url)
        const res = result.data
        return res
      })
      const result = await Promise.all(data)
      setPokemons(result)
    })
  }

  
  
  console.log(pokemons)
  return (
    <div className="App">
      <div className="GridPokemons"> 
        {pokemons.map(pokemon => <Card pokemon={pokemon} key={pokemon.id}/>)}
      </div>
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import "./index.css";
import { PokemonCard } from "./pokemonCard";
export const Pokem = () => {
  const API = "https://pokeapi.co/api/v2/pokemon?limit=54";
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState("true");
  const [error, setError] = useState(null);
  const[ search,setSearch]=useState('')
  useEffect(() => {
    const FetchData = async () => {
      try {
        const res = await fetch(API);
        const data = await res.json();

        const DEtailedPOkem = data.results.map(async (currTAsk) => {
          const res = await fetch(currTAsk.url);
          const data = await res.json();
          console.log(data);
          return data;
        });
        const detailData = await Promise.all(DEtailedPOkem);
        console.log(detailData);
        setPokemon(detailData);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(error);
      }
    };
    FetchData();
  }, []);

  if (loading) {
    return (
      <div>
        <p> loading....</p>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <p> {error.message}</p>
      </div>
    );
  }
  const searchData = pokemon.filter((currPokemon)=>currPokemon.name.toLowerCase().includes(search.toLowerCase()))
  return (
    <>
      <section className="cantainer " >
        <header>
          <h1>Pokemon cards</h1>
        </header>
        <div className="pokemon-search"> 
       
          <input type="text" placeholder="search pokemon" value={search} onChange={(e)=>setSearch(e.target.value)}/>
        </div>
        <div>
          <ul className="cards">            
            { searchData.map((currVAlue) => {
              return <PokemonCard key={currVAlue.id} pokemonData={currVAlue} />;
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

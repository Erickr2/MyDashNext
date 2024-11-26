
import { PokemonsResponse, simplePokemon } from "@/pokemons";
import { PokemonGrid } from "@/pokemons/components/PokemonGrid";


const getPokemons = async (limit = 20, offset = 0): Promise<simplePokemon[]> => {

  const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then(res => res.json());

  const pokemons = data.results.map(pokemon => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name
  }))

  return pokemons;
}


export default async function FavoritePokemonsPage() {

  const pokemons = await getPokemons(150);

  return (
    <div className="flex flex-col">

      <span className="text-5xl my-2">Listado de pokemons <small>estatico</small></span>

      <PokemonGrid pokemons={pokemons} />

    </div>
  );
}



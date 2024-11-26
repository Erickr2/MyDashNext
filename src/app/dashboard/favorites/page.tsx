import { FavoritesPokemons } from "@/pokemons";

export const metadata = {
  title: 'Favoritos',
  description: 'mis pokemons favoritos'
}

export default async function PokemonsPage() {

  return (
    <div className="flex flex-col">

      <span className="text-5xl my-2">Pokemons favoritos <small>Global state</small></span>

     <FavoritesPokemons />

    </div>
  );
}
import React from 'react'
import { PokemonCard } from './PokemonCard';
import { simplePokemon } from '../intrefaces/simple-pokemon';

interface Props {
    pokemons: simplePokemon[];
}

export const PokemonGrid = ({pokemons}: Props) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
    {
      pokemons.map(pokemon => (
        <PokemonCard key={pokemon.id} pokemon={pokemon}/>
      ))
    }
  </div>
  )
}

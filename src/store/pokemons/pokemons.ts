import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { simplePokemon } from '@/pokemons';

//llave de tipo string que apunta a un pokemon
interface PokemonState {
   favorites: {[key: string]: simplePokemon}
}

//esto es una simulacion para obtener datos de una api, 
const getInitialState = (): PokemonState => {
 /*  if( typeof localStorage === "undefined") return {}; */
const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}');

return favorites;
}

const initialState: PokemonState = {
  favorites: {}
}

const pokemonsSlice = createSlice({
  name: 'pokemonsState',
  initialState,
  reducers: {
    setFavoritePokemons( state, action: PayloadAction<{ [key: string]: simplePokemon }> ) {
      state.favorites = action.payload;
    },
    toggleFavotites( state, action: PayloadAction<simplePokemon>) {

        const pokemon = action.payload;
        const { id } = pokemon;
        //si existe, entonces deja de existir es decir deja de ser favorito
        if( !!state.favorites[id] ){
            delete state.favorites[id]
           /*  return; */
        } else {
          //si no, agrego el pokemon que me mandan en su llave 
          state.favorites[id] = pokemon;
        }
        
        //esto no se hace en redux, deben ser funciones puras
        localStorage.setItem('favorite-pokemons', JSON.stringify(state.favorites));

    }
  }
});

export const { toggleFavotites, setFavoritePokemons } = pokemonsSlice.actions

export default pokemonsSlice.reducer
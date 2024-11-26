'use client';
import { ReactNode, useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from '.';
import { setFavoritePokemons } from './pokemons/pokemons';

interface Props {
    children: ReactNode
}

export const Providers = ( {children}: Props) => {

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}');
    console.log(favorites)
    store.dispatch( setFavoritePokemons(favorites));
  }, [])
  

  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}

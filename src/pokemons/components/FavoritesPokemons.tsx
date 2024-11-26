'use client';
import React, { useState } from 'react'
import { PokemonGrid } from './PokemonGrid'
import { useAppSelector } from '@/store';
import { simplePokemon } from '../intrefaces/simple-pokemon';
import { IoHeartOutline } from 'react-icons/io5';

export const FavoritesPokemons = () => {

    const favoritePokemons = useAppSelector( state => Object.values( state.pokemons.favorites ) );
    console.log('estos son mis favs, ',favoritePokemons)

    return (
        <>
        {
            favoritePokemons?.length === 0
            ? <NoFavorites /> 
            : <PokemonGrid pokemons={favoritePokemons} />
        }
            
        </>
    )
}


export const NoFavorites = () => {
    return (
        <div className='flex flex-col h-[50vh] items-center justify-center'>
            <IoHeartOutline size={100} className='text-red-500' />
            <span>No hay favoritos seleccionados</span>
        </div>
    )
}

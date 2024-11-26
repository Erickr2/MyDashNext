import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux';
import counterReducer from './Counter/counterSlice'
import pokemonsReducer from './pokemons/pokemons'
import { localStorageMiddleware } from './middlewares/localStorage-middleware';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokemons: pokemonsReducer
  },
  /* middleware: ( getDefaultMiddleware: any ) => getDefaultMiddleware()
    .concat(localStorageMiddleware) */
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

//despachar acciones
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
//escuhar mi estado
export const useAppSelector = useSelector.withTypes<RootState>();
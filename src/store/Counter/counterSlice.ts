import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface counterState {
    count: number;
    isReady: boolean; 
}

const initialState: counterState = {
    count: 0,
    isReady: false
}

const CounterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

    initCounterState( state, action: PayloadAction<number> ) {
      //si no esta inializado, establece el estado
      if(state.isReady) return;

      state.count = action.payload;
      state.isReady = true;
    },

    addOne(state) {
      state.count++;
    },

    substracOne(state) {
      if(state.count === 0) return;

      state.count--;
    },

    resetCount( state, action: PayloadAction<number> ) {
      if(action.payload < 0) action.payload = 0;

      state.count = action.payload;
    }

  }
});

export const { addOne, substracOne, resetCount, initCounterState } = CounterSlice.actions;

export default CounterSlice.reducer;
 

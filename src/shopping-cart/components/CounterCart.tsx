'use client'

import { useAppDispatch, useAppSelector } from '@/store';
import { addOne, initCounterState, substracOne } from '@/store/Counter/counterSlice';
import { useEffect } from 'react';

interface Props {
    value?: number;
}

interface CounterResponse {
    count: number;
}

const getApiCounter = async(): Promise<CounterResponse> => {
    const data = await fetch('/api/counter').then( res => res.json())

    return data;
}

export const CounterCart = ( {value = 0}: Props) => {

    const counter = useAppSelector(state => (state.counter.count));
    const dispatch = useAppDispatch()

    /* useEffect(() => {
        //establecemos el valor en el state con el value que recibo
      dispatch( initCounterState(value) );
    }, [dispatch, value]) */

    useEffect(() => {
      getApiCounter()
      .then( ({count}) => dispatch( initCounterState(count) )  )
    }, [dispatch])
    
    

    return (
        <>
            <span className="text-9xl">{counter}</span>


            <div className="flex">

                <button
                    className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
                    onClick={() => dispatch( addOne() )}
                >
                    +1
                </button>
                <button
                    className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
                    onClick={() => dispatch( substracOne() )}
                >
                    -1
                </button>
            </div>
        </>
    )
}

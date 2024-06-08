import React from 'react'
import {Decrement, Increment } from '../redux/CounterAction';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.count);
   
    return (
        <>
            <p>Count: {count}</p>
            <button onClick={() => dispatch(Decrement())}>Decrement</button>
            <button onClick={() => dispatch(Increment())}>Increment</button>
        </>
    )
}

export default Counter;
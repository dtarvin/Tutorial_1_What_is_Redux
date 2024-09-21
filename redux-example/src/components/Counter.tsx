"use client"

import { useDispatch } from "react-redux";
import { increment, decrement } from '@/redux/actions';

const Counter = () => {
    
    const dispatch = useDispatch();

    const incrementFun = () => {
        dispatch(increment());
    }

    const decrementFun = () => {
        dispatch(decrement());
    }

    return (
        <div>
            <button onClick={incrementFun}>Increment</button>
            <button onClick={decrementFun}>Decrement</button>
        </div>
    )
};

export default Counter;
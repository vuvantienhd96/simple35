import React, {useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import './Dasboard.css';
import { Chart } from './Chartjs';

import { fetchUserById } from './../features/apiSave/recallApiLoading';


// add hoook
import { useSelector, useDispatch } from 'react-redux';
import { 
    increment, 
    decrement, incrementByAmount } from './../features/counter/couterReducer';

export const Dasboard = () => {

    const count = useSelector(state => state.counter.value);
    const name = useSelector(state => state.counter.name);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(callApi())
    // }, []);


    return (
        <>hello DashBooad
            <Chart />
            <div>
            <button
                    aria-label="Increment value"
                    onClick={() =>  dispatch(fetchUserById())}
                >
                    call api
                </button>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(decrement())}
                >
                    decrement
                </button>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(incrementByAmount(3))}
                >
                    Increment + 3
                </button>

            </div>
            <h2>this is state of Redux hello: {count}</h2>
            <h2>this is state name of Redux: {name}</h2>
        </>
    )
}
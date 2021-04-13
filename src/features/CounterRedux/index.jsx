import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import { increase, decrease } from './counterSlice';

CounterFeature.propTypes = {
    
};

function CounterFeature(props) {
    const dispatch = useDispatch();
    const counter = useSelector(state => {
        console.log(state); // {count:1}
        return state.count;
    });

    const handleIncreaseClick = () => {
        const action = increase(); //action creator
        dispatch(action);
    }

    const handleDecreaseClick = () => {
        const action = decrease(); //action creator
        dispatch(action);
    }

    return (
        <div>
            Counter: {counter}
            <Button onClick = {handleIncreaseClick}>Increase</Button>
            <Button onClick = {handleDecreaseClick}>Decrease</Button>
        </div>
    );
}

export default CounterFeature;
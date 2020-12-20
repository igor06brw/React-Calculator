import React from 'react';
import './Results.css'

const results = (props) => {
    console.log(props)
    return ( <div className="results">{props.results.prevValue} {props.results.operator} {props.results.currentValue}</div> );
}

export default results;
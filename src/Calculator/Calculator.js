import React, { Component } from 'react';
import Buttons from './UI/Buttons/Buttons';
import Results from './UI/Results/Results'
import './Calculator.css'

class Calculator extends Component {
    state = {

    }
    render() {
        return (
            <div className="calculator">
                <Results />
                <Buttons />
            </div>
        );
    }
}

export default Calculator;

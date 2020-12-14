import React, { Component } from 'react';
import Buttons from './UI/Buttons/Buttons';
import Results from './UI/Results/Results'

class Calculator extends Component {
    state = {

    }
    render() {
        return (
            <div>
                <Results />
                <Buttons />
            </div>
        );
    }
}

export default Calculator;

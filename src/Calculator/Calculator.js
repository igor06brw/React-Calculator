import React, { Component } from 'react';
import Buttons from './UI/Buttons/Buttons';
import Results from './UI/Results/Results'
import './Calculator.css'

class Calculator extends Component {
    state = {

    }

    onNumberHandler = (e) => {
        console.log(e)
    }
    render() {
        return (
            <div className="calculator">
                <Results />
                <Buttons clicked={this.onNumberHandler}/>
            </div>
        );
    }
}

export default Calculator;

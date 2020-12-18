import React, { Component } from 'react';
import Buttons from './UI/Buttons/Buttons';
import Results from './UI/Results/Results'
import './Calculator.css'

class Calculator extends Component {
    state = {
        currentValue: '',
        nextValue: '',
        isDecimal: false
    }

    componentDidUpdate() {
        console.log(this.state);
    }



    

    assignDigit(e) {
        let tempString = this.state.currentValue;
        tempString += e;
        this.setState({currentValue: tempString});
    } 
    assignValue(number) {
        let currentValue = this.state.currentValue
        if (number === '.') { 
            this.assignDecimal(number)
        } else {
            this.assignDigit(number)
        }

    }
    assignDecimal(decimal) {
        if(!this.state.isDecimal) {
            this.setState({isDecimal: true});
            this.assignDigit(decimal)
        } else {
            return null;
        }
    }
    onNumberHandler = (e) => {
        this.assignValue(e)
        console.log(this.state);
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

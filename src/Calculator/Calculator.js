import React, { Component } from 'react';
import Buttons from './UI/Buttons/Buttons';
import Results from './UI/Results/Results'
import './Calculator.css'

class Calculator extends Component {
    state = {
        currentValue: '',
        prevValue: null,
        isDecimal: false
    }

    componentDidUpdate() {
        console.log(this.state);
    }


    onCalculate(currentValue, operator, prevValue) {
        let x;
        if(operator === '+') {
            return x = Number(currentValue) + prevValue
        }
        console.log(x)

        // (operator === '+') ? 
        //     (x = Number(currentValue) + prevValue) 
        // : (operator === '-') ?
        //     (x = Number(currentValue) - prevValue) : (null)
        


    }

    
    onCheckOperator(operator) {
        if(operator === '+' || operator === '-' || operator === '*' || operator === '/') {
        }
    }

    
    //  NUMBER
    assignDigit(e) {
        this.onCheckOperator(e);
        let tempString = this.state.currentValue;
        tempString += e;
        console.log(tempString)
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




    // BUTTONS
    onNumberHandler = (value) => {
        this.assignValue(value)
        console.log(this.state);
    }
    onOperatorHandler = (operator) => {
        this.onCheckOperator(operator);
    }
    render() {
        return (
            <div className="calculator">
                <Results />
                <Buttons clicked={this.onNumberHandler} operator={this.onOperatorHandler}/>
            </div>
        );
    }
}

export default Calculator;
